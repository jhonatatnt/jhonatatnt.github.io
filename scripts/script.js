
function menuApps() {

	var list_app = document.getElementById('list_app');
	var btnapps = document.getElementById('btnapps');
	var icnlistapps = document.getElementById('icnlistapps');
	var k = 0;

	btnapps.onclick = function () {
		if (k == 0) {
			list_app.style.display = 'block';
			icnlistapps.src = 'img/icncancel.png';
			k = 1;
		}
		else if (k == 1) {
			list_app.style.display = 'none';
			icnlistapps.src = 'img/icnlistapps.png';
			k = 0;
		} 

		else {}
	}
}

function menuSecao() {
	var secoes = document.getElementById('secoes');
	var btnsecao = document.getElementById('btnsecao');
	var k = 0;

	btnsecao.onclick = function(){
		alert('escolha a seção');
	}
}

function wdgMusic(){
	var icnwdgmusic = document.getElementById('icnwdgmusic');
	var k = 0;

	icnwdgmusic.onclick = function() {
		if (k == 0) {
			icnwdgmusic.src = "img/icnpause.png";
			k = 1;
		}
		else if (k == 1) {
			icnwdgmusic.src = "img/icnplay.png";
			k = 0;
		} 
		else {}
	}
}

function btnsearch(){
	var btnsearch = document.getElementById('btnsearch');
	var barsearch = document.getElementById('barsearch');
	var barsearch_sec = document.getElementById('barsearch_sec');
	var btnapps = document.getElementById('btnapps');
	var btnsecao = document.getElementById('btnsecao');
	var btnperfil = document.getElementById('btnperfil');
	var wdgMusic = document.getElementById('widgetaudio');
	var btncancelsearch_sec = document.getElementById('btncancelsearch_sec');
	var btncancelsearch = document.getElementById('btncancelsearch');
	var searchresult = document.getElementById('searchresult');


	btncancelsearch.onclick= function(){
		searchresult.style.display = 'none';
	}

	btncancelsearch_sec.onclick= function(){
		barsearch.style.display = 'block';
		barsearch_sec.style.display = 'none';
		
		btnapps.style.display = 'block';
		btnsecao.style.display = 'block';
		btnperfil.style.display = 'block';
		wdgMusic.style.display = 'block';
	}
	
	btnsearch.onclick = function(){
		var tela = window.innerWidth;
		if(tela <= 640){
			barsearch.style.display = 'none';
			barsearch_sec.style.display = 'block';
			
			btnapps.style.display = 'none';
			btnsecao.style.display = 'none';
			btnperfil.style.display = 'none';
			wdgMusic.style.display = 'none';
		}
		else{
			alert(tela);
		}
	}
}

function search(){
	// var keycode = window.event.keyCode;
	// var search = document.getElementById('search');
	// if (keycode == 13){
	// 	search.submit();
	// }

	var inputsearch = document.getElementById('inputsearch');
	var searchresult = document.getElementById('searchresult');
	k = 0;

	inputsearch.onclick = function(){
		searchresult.style.display = "block";
	}

}