// JavaScript Document
$(function(){
var oMove=document.getElementById('move');
var aLi=oMove.getElementsByTagName('li');
var Menucont=document.getElementById('menuCont');
var Section=Menucont.getElementsByClassName('section');
var n;
function del_li_ac(){
	for(var i=0; i<aLi.length; i++){
		aLi[i].className="";
	};
};
for(var i=0; i<aLi.length; i++){
	aLi[i].index=i;
	aLi[i].onmouseover=function(){
		Menucont.style.display="block";
		for(var j=0;j<aLi.length;j++){
			Section[j].style.display='none'
		}
		Section[this.index].style.display="block";
	}
	aLi[i].onmouseout=function(){
		Menucont.style.display="none";
	}
}

Menucont.onmouseenter=function(ev){
	this.style.display="block";
	aLi[n].className="ac";
};

Menucont.onmouseleave=function(){
	this.style.display="none";
	del_li_ac();//删除所有li上的ac
};	
	
	
//图片轮播
var Li=document.getElementById("slide_tu")
var n=0;
var timer;
function run(){
	timer=setInterval(function(){
		Li.src="images/0"+n+".jpg";
		n++;
		if(n>4){n=0}
	},1000)	
}
run();
$('#slideA').mouseover(function(){
	clearInterval(timer)
})
$('#slideA').mouseout(function(){
	run();
})
$('#slideA .prevBtn').click(function(){
	
	Li.src="images/0"+n+".jpg";
	n--; 
	if(n<0){n=4}
})
$('#slideA .nextBtn').click(
	function(){
		Li.src="images/0"+n+".jpg";
		n++;
		if(n>4){n=0}
	}
	
)	

var show=true;
$('.mod_tab_head_item').hover(
	function(){
		if(show){
			$(this).addClass('service_frame_on').siblings().removeClass('service_frame_on');
			$('.icon').addClass('service_expand');
		}
	},
	function(){
		show=true;
	}
);
	
$('.closeBtn').click(function(){
	$('.icon').removeClass('service_expand');
	$('.icon li').removeClass('service_frame_on');
	$('.icon li:last').addClass('service_frame_on');
	show=false;
});	
	
	
	
var oNav=document.getElementsByClassName('nav')[0];
var aLi2=oNav.getElementsByTagName('li');
var Cloth=document.getElementsByClassName('cloth');
console.log(aLi2.length)
console.log(Cloth.length)
for(var i=0;i<aLi2.length;i++){
	aLi2[i].index=i;
	aLi2[i].onmouseover=function(){
		for(var j=0;j<aLi2.length;j++){
			Cloth[j].style.display='none';
		}
		Cloth[this.index].style.display='block';
	}
}


$('.service_pop li').hover(
	function(){
		$(this).addClass('red')
	},
	function(){
		$(this).removeClass("red")
	})

































/*var m;
function del_li_ac(){
	for(var i=0; i<aLi2.length; i++){
		aLi2[i].className="";
	};
};
for(var i=0; i<aLi2.length; i++){
	aLi2[i].index=i;
	aLi2[i].onmouseover=function(){
		//Menucont.style.display="block";
		del_li_ac();
		m=this.index; 
		this.className="ac";
		
		//得到自己的data-index自定义属性
		var show_id=this.getAttribute("data-index");
		//console.log(show_id)
		for(var j=0; j<Cloth.length; j++){
			Cloth.style.display="none";
		}
		//显示相对应的内容
		document.getElementById("cloth"+show_id).style.display="block";
	};
	
	aLi[i].onmouseout=function(){
		Menucont.style.display="none";
		del_li_ac();
	};
};	
Menucont.onmouseenter=function(ev){
	this.style.display="block";
	aLi[n].className="ac";
};

Menucont.onmouseleave=function(){
	this.style.display="none";
	del_li_ac();//删除所有li上的ac
};		*/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*for(var i=0;i<$('#move li').length;i++){
		$('#move li').eq(i).mouseover(function(){
			$('#menuCont').show()
			$('#menuCont .section').eq(i).show()
		});
		$('#move li').eq(i).mouseout(function(){
			$('#menuCont').hide()
		})	
	}
	
	
	$('#slideA .prevBtn').click(function(){
		
		$('#slideA ul li').eq(3).show();
	})*/
})
