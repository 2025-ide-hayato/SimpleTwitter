/**
 *
 */
$(function() {
	//削除前警告
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

	//選択投稿の色変え
	$(".message").mouseover(function(){
		$(this).css('background-color', 'rgb(102, 153, 204)');
	});

	$(".message").mouseleave(function(){
		$(this).css('background-color', 'transparent');
	});

	//投稿文字数の表示
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

	//risizeをコンソール表示
	let updateSize = () => {
		const width = window.innerWidth;
		const height = window.innerHeight;
		document.getElementById('size-info').textContent = `<ウィンドウサイズ：${width}x${height}>`;
	};

	window.addEventListener('resize', updateSize);
	updateSize();

	//scroll時に背景色変更
	$(window).scroll(()=>{
		const y = window.scrollY;
		const element = document.documentElement;
		const bottom = element.scrollHeight - element.clientHeight;
		if (y >= (bottom / 2)){
			document.body.style.backgroundColor = '#FFFF99';
		} else {
			document.body.style.backgroundColor = '#99FFFF';
		}

	});

	//ヘルプ欄
	const box = document.getElementById('help');
	let isDragging = false;
	let offsetX, offsetY;

	box.addEventListener("mousedown", (event) => {
		isDragging = true;
		offsetX = event.clientX - box.offsetLeft;
		offsetY = event.clientY - box.offsetTop;
	});

	document.addEventListener("mousemove", (event) => {
		if (isDragging) {
			box.style.left = (event.clientX - offsetX) + "px";
			box.style.top =  (event.clientY - offsetY) + "px";
		}
	});

	document.addEventListener("mouseup", (event) => {
		if (isDragging) {
			isDragging = false;
			console.log("ドラッグ終了");
		}
	});



});
