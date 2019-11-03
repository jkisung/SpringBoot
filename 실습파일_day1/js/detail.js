$(document).ready(function(){
	var postId = $('#detail_post_id').attr("value");
	console.log("postId - " + postId);
	$.ajax({
        url: "/post?id="+postId
    }).then(function(data) {
       console.log(data);
       $('#detail_title').text(data.title);
       $('#detail_user').text(data.user);
       $('#detail_date').text(data.updtDate);
       $('#detail_content').text(data.content);
    }, function(err) {
    	console.log(err.responseJSON);
    });
	
	$('#detail_delete_btn').click(function(){
		var postId = $('#detail_post_id').attr("value");
		console.log("delete button click! - " + postId);
		$.ajax({
	        url: "/post?id="+postId,
	        method: "DELETE"
	    }).then(function(data) {
	    	window.location.href = '/';
	    }, function(err) {
	    	alert(err.responseJSON);
	    });
	});
	
	$('#modify_post_btn').click(function(){
		var postId = $('#detail_post_id').attr("value");
		var title = $('#modify_title_text').val();
		var content = $('#modify_content_text').val();
		
		console.log(postId);
		console.log(title);
		console.log(content);
		
		var param = {
			id: postId,
			title: title,
			content: content
		}
		
		$.ajax({
	        url: "/post",
	        method: "PUT",
	        dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(param)
	    }).then(function(data) {
	    	window.location.href = '/page/detail/'+postId;
	    }, function(err) {
	    	alert(err.responseJSON);
	    });
	});
});