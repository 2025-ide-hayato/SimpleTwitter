/**
 *
 */
$(function() {

	$("#delete").on('click', function() {
		if (confirm("投稿を削除してもよろしいですか？")) {
			return true;
		}
		return false;
	});

	// 日付の絞り込み時の制御
	$("#filter").on('click', function() {
		const start = document.getElementById('start').value;
		const end = document.getElementById('end').value;

		if ((start != "" && end != "") && (start > end)) {
			alert("日付の範囲が有効ではありません");
			return false;
		}
		const today = new Date().toLocaleDateString("ja-JP", {
			year : "numeric",
			month : "2-digit",
			day : "2-digit"
		}).replaceAll('/', '-')
		console.log(today);
		if ((start != "") && (start > today)) {
			alert("日付の範囲が有効ではありません");
			return false;
		}
		return true
	});

	//返信を表示
	$(".toggle").click(function() {
		$(this).next().toggle();
		let displyText = $(this).text();
		if (displyText.indexOf("返信を表示する") != -1 ){
			$(this).text("返信を非表示にする");
		} else {
			$(this).text("返信を表示する");
		}

	});

	$(".message").hover(function(){
		if ( $(this).css('background-color') == 'rgb(102, 153, 204)'){
			$(this).css('background-color', 'transparent');
		} else {
			$(this).css('background-color', 'rgb(102, 153, 204)');
		}
	});

	$(".tweet-box").keyup(function(){
		const cnt = $(this).val().length;
		let chrCnt;
		if(cnt == 0){
			$("#charaCount").text("");
		} else if(cnt > 140){
			chrCnt = "現在" + cnt + "文字";
			$("#charaCount").text(chrCnt);
			$("#charaCount").css('color','red');
		} else{
			chrCnt = "現在" + cnt + "文字";
			$("#charaCount").text(chrCnt);
			$("#charaCount").css('color','black');
		}
	});
});
