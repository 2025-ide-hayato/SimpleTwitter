/**
 *
 */
$(function(){

$("#name").blur(function(){
	notValid(this, 20);
});

let notValid = (obj, chrLmt) => {
	const inTextCnt = $(obj).val().length;
	if( inTextCnt > chrLmt || inTextCnt == 0) {
		$(obj).css('background-color', '#FF97C2');
	} else {
		$(obj).css('background-color', 'transparent');
	}

};


});
