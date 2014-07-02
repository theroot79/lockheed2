whereWeAre='home';

$(document).ready(function(){
	
	contentController();

	var loc=top.location.href;
	var locArr=loc.split("/");
	var len=locArr.length;

	if(len > 3){
		var page=locArr[(len - 1)];
		if(page.length > 2){
			if(page == 'about')whereWeAre='about';
		}
	}

	$.each($('.contentlnk'),function(){
		var attr=$(this).attr('data-page');
		if(attr != 'home' && attr == whereWeAre)$(this).addClass("sel");
	});

	getContent(whereWeAre);
});

function contentController(){

	$('.contentlnk').click(function(){

		$('.contentlnk').removeClass("sel");
		$(this).addClass("sel");
		
		var page=$(this).attr('data-page');
		var title=$(this).attr('data-title');
		var href=$(this).attr('href');
		window.history.pushState(page,title,href);
		
		getContent(page);
			
		return false;
	});

}

function getContent(page){

	$.ajax({
		type:"GET",
		url:'http://'+window.location.hostname+'/contents/'+page+'.html',
		success:function(data){
			$('#contentin').html(data);
		}
	});
}