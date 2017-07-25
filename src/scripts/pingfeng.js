window.onload = function(){

	alinec.init(); 
	loading.loaddingPage();
};


;(function(window,document){

	var infos = {
		screenHeight:0,
		init:function(){
			this.setScreenHeight();
		},
		setScreenHeight:function(){
			if(window.innerWidth != null){
				infos.screenHeight = window.innerHeight;
			}else if(document.compatMode === 'css1Compat'){
				infos.screenHeight = document.documentElement.clientHeight;
			}else {
				infos.screenHeight = document.body.clientHeight;
			}
		}
	};

	var pages = {
		init:function(){
			infos.init();
			pages.setHeight();
		},
		setHeight:function(){
			console.log(1);
			document.body.style.height = infos.screenHeight+"px";
		}
	}

	var loading = {
		loaddingPage:function(){
			var _date = new Date().getTime();
			var timer = null;
			var dTime = iTime = false;

			var arrImg = ["../../images/pingfen/tree.jpg","../../images/pingfen/title.png","../../images/pingfen/title2.png","../../images/pingfen/logo.png"];
			var size = 0;
			var count = arrImg.length;
			var img = null;
			for(var i =0; i< arrImg.length; i++){
				img = new Image();
				img.src = arrImg[i];
				img.onload = function(){
					size++;
					if(size >= count){
						iTime = true;
						showPage();
					}
				}
				img.onerror = function(){
					size++;
					if(size >= count){
						iTime = true;
						showPage();
					}
				}
			}

			timer = setInterval(function(){
				if(new Date().getTime() - _date > 2000){
					clearInterval(timer);
					dTime = true;
					showPage();
				}
			},1000);

			function showPage(){
				if(dTime && iTime){
					document.querySelector(".page").setAttribute("class","page");
					document.querySelector(".page:nth-of-type(2)").setAttribute("class","page page-show");

					return ;
				}
			}

			

		}
	}


	window.alinec = pages;
	window.loading = loading;


})(window,document,undefined);