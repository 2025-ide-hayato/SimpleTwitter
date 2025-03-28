/**
 *
 */
$(function(){

    $("#name").blur(function(){
        notValid(this, 20 ,true);
    });

    $("#account").blur(function(){
        notValid(this, 20, false);
    });

    $("#email").blur(function(){
        notValid(this, 50, true);
    });

    $("#password").blur(function(){
        notValid(this, 255, true);
    });


    let notValid = (obj, chrLmt,nullOk) => {
        const inTextCnt = $(obj).val().length;
        if(inTextCnt > chrLmt || (nullOk == false && inTextCnt == 0)){
            $(obj).css('background-color', '#FF97C2');
        } else {
            $(obj).css('background-color', 'transparent');
        }

    };

    $("#update").click(() => {
    		let formData = $('#account-form');
    		$.ajax({
    			type:  "post",
    			url:   "./setting",
    			data:  formData.serialize()
    		}).done(function(resData) {
    			if(resData.indexOf("errorMessages") > 0){
    				window.location.href = './setting';
    			} else {
    	    		window.location.href = './';
    			}
    			console.log(document.getElementById("errorMessages"));
    		}).fail(function(resData) {
    			alert("エラー");
    		});
    		window.location.href = './';
    });

});