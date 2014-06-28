$(document).ready(function(){
	
	contentController();
	getContent('home');

});

function contentController(){
	
	$('.contentlnk').click(function(){
		
		$('.contentlnk').removeClass("sel");
		$(this).addClass("sel");
		
		page=$(this).attr('data-page');
		title=$(this).attr('data-title');
		href=$(this).attr('href');
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