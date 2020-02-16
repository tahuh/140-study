function a() {
	console.log('A');
}

var a = function(){
	console.log('A');
}

// above two are equal

function slowfunc(callback){
	callback();
}

slowfunc(a);
/* description
slowfunc(a) 실행
-> 내부의 callback parameter를 함수로 실행
-> 현재 callback이라는 parameter는 a
-> 따라서 함수 모양은 다음과 같이 바꾸ㅏㅁ

function slowfunc(a) {
	a();
}

그리고 a 자리에 a를 선언한 (line5~line7)의 내용이 치환됨

function slowfunc(a) {
	function() {
		console.log('A');
	}
}

이 때문에 'A'가 출력 된다

*/
