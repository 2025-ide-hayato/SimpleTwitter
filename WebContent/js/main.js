/**
 *
 */
$(function(){

	$("#delete").on('click', function(){
		if (confirm("投稿を削除してもよろしいですか？")) {
			return true;
		}
		return false;
	});

	$(".comment .date").css('color', 'grey');

	$("#filter").on('click', function(){
		const start = document.getElementById('start').value;
		const end = document.getElementById('end').value;

		if ((start != "" && end != "") && (start > end)) {
			alert("日付の範囲が有効ではありません");
			return false;
		}
		const today = new Date().toLocaleDateString("ja-JP", {year: "numeric" ,month: "2-digit", day: "2-digit"}).replaceAll('/', '-')
		console.log(today);
		if ((start != "") && (start > today)) {
			alert("日付の範囲が有効ではありません");
			return false;
		}
		return true
	});


});
