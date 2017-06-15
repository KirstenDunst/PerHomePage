window.onresize = function (id){changePositionForCenter};
//改变控件的位置，大小不变，使居中
function changePositionForCenter (id) {
	           //浏览器的宽度
	           var a = document.documentElement.clientWidth;
	           //浏览器的高度
	           var b = document.documentElement.clientHeight;
	           
	           var element = document.getElementById(id);
	           element.style.position = "relative";
	           /*positon有4个属性:static relative absolute fixed,默认的时候是static即静止定位,
	           是按照元素在(x)html出现的顺序依次分配位置,static是不受top right left bottom影响的.
	           当父层a的position设为relative(相对定位) 子层b的position设为(绝对定位)时,b的偏移是
	           相对于父层a来定位,例如top:10px的偏移量就使b的顶部和a的顶部有10px的距离.但是如果a没有
	           设置relative 而b设为absolute,b的定位就是相对于浏览器进行,此时top:10px会使b出现在离
	           浏览器上方10px的地方.自己试下就最清楚了.
	           */
	           //获取到控件的宽度
	           var width12 = element.offsetWidth;
	           if (a<width12){
		           element.style.left = 0;
	           }else{
		           var mer = (a-789)/2;
		           element.style.left = mer;
	           }
}

function changeBackgroundColor (isenter,color) {
	if (isenter){
		this.style.backgroundColor = "#FDFDE0";	
	}else{
		this.style.backgroundColor = color;
	}
}
