class App {
	constructor(){
		let clicking = document.getElementsByClassName("click")[0].innerHTML;
		if(clicking == "메인페이지"){
			this.mainLoader();
		}else if(clicking == "펀드등록"){
			this.adaptLoader();
		}else if(clicking == "펀드보기"){
			this.fundLoader();
		}else if(clicking == "투자자목록"){
			this.investorLoader();
		}else if(clicking == "회원가입"){
			this.registerLoader();
		}
	}

	mainLoader(){
		let ranking = document.getElementsByClassName("ranking");
		let percnet = 100;
		for(let e of ranking){
			let canvas = e.querySelector("canvas");
			this.makeGraph(canvas, percnet);
			percnet -= 10;
		};
	}

	makeGraph(canvas, p) {
		let w = canvas.width;
		let h = canvas.height;
		let ctx = canvas.getContext("2d");
		let now = 0;
		let term = p / 45;

		let frame = setInterval(()=>{
			now += term;
			if(now >= p){
				now = p;
				clearInterval(frame);
			}
			this.drawGraph(ctx, w, h, now);
		}, 1000/30);
	}

	drawGraph(ctx, w, h, now) {
		ctx.clearRect(0,0,w,h);

		ctx.beginPath();
		ctx.fillStyle = "#bddff0";
		ctx.moveTo(w/2, h/2);
		ctx.arc(w/2, h/2, 90, -Math.PI/2, 3/2*Math.PI);
		ctx.fill();
		ctx.closePath();

		ctx.beginPath();
		ctx.fillStyle = "#2292d1";
		ctx.moveTo(w/2, h/2);
		ctx.arc(w/2, h/2, 90, -Math.PI/2, -Math.PI/2 + (now / 100) * ( 2* Math.PI));
		ctx.fill();
		ctx.closePath();

		ctx.beginPath();
		ctx.fillStyle = "#fff";
		ctx.moveTo(w/2, h/2);
		ctx.arc(w/2, h/2, 60, -Math.PI/2, 3/2*Math.PI);
		ctx.fill();
		ctx.closePath();

		let percnet = Math.floor(now / 100 * 100);
		ctx.fillStyle = "#002758";
		ctx.font = "25px Arial";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillText(percnet + "%", w/2, h/2);
	}

	makeLine(canvas, p){
		let w = canvas.width;
		let h = canvas.height;
		let ctx = canvas.getContext("2d");
		let now = 0;
		let term = p / 45;

		let frame = setInterval(()=>{
			now += term;
			if(now >= p){
				now = p;
				clearInterval(frame);
			}
			this.drawLine(ctx, w, h, now);
		},1000/30)
	}

	drawLine(ctx, w, h, now) {
		ctx.clearRect(0, 0, w, h);

		ctx.fillStyle = "#bddff0";
		ctx.fillRect(0,0,w,h);

		ctx.fillStyle = "#2292d1";
		ctx.fillRect(0,0,w * (now / 100), h);
	}

	adaptLoader(){

	}

	fundLoader() {
		let funds = document.getElementsByClassName("fund");

		let percnet = 100;
		for(let i of funds){
			let canvas = i.querySelector("canvas");
			this.makeGraph(canvas, percnet);
			percnet -= 10;
		}
	}

	investorLoader() {
		let investors = document.getElementsByClassName("investor");

		let percnet = 100;

		for(let i of investors) {
			let canvas = i.querySelector("canvas");
			this.makeLine(canvas, percnet);
			percnet -= 10;
		}
	}

	registerLoader() {

	}
}

window.onload = function(){
	let app = new App();
}