//传入要修改的页面地址
function changeFrameSrc (id,targetSrc) {
	var ele = document.getElementById(id);
	ele.src = targetSrc;
	ele.window.reload();
	ele.Window.body.style.backgroundColor = "#1E90FF";
}


//生成随即的背景颜色方法
function getRandomColorForBackground () {
	//生成随机数
//	var a = Math.floor(Math.random()*255+1);
	var c = '#'; 
    var cArray = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']; 
    for(var i = 0; i < 6;i++) 
     { 
       var cIndex = Math.round(Math.random()*15); 
       c += cArray[cIndex]; 
     } 
	document.body.style.backgroundColor = c;
}

//让iframe里面的按钮点击整个界面换新的。
function reloadANew () {
	alert("跳出");
//	top.location = "http://www.baidu.com"  
	self.location.href = "http://www.baidu.com/";
	
	/*
	 url直接跳转
     js中的window.location.href
     window.navigate()
     self.location.href
	 */
}
