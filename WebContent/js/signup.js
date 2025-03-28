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
	notValid(this, 255, false);
});


let notValid = (obj, chrLmt,nullOk) => {
	const inTextCnt = $(obj).val().length;
	if(inTextCnt > chrLmt || (nullOk == false && inTextCnt == 0)){
		$(obj).css('background-color', '#FF97C2');
	} else {
		$(obj).css('background-color', 'transparent');
	}

};


});
