   function showFloor(){
        var LocationFloorList=document.getElementsByClassName('LocationFloorList')[0];
		//console.log(LocationFloorList)
	
        var aLi1=LocationFloorList.getElementsByTagName('li');
       var aFloor=getByClass(document,'floor');
        var arr=[];

        for(var i=0; i<aFloor.length; i++){
            var json={};
            json.name=i;
            json.offsetTop=aFloor[i].offsetTop;
            arr.push(json);

        }


        window.onscroll=function(){
            //显示楼层编号
            var scrolltop=document.documentElement.scrollTop || document.body.scrollTop;
            if(scrolltop>1500){
                LocationFloorList.style.display='block';
            }else{
                LocationFloorList.style.display='none';
            }

            // 根据楼层滚动位置，定位编号
            var last_arr=[];
            for(var j=0; j<arr.length; j++){
                if(arr[j].offsetTop<scrolltop+200){//400为接近屏幕的敏感区
                    last_arr.push(arr[j].name);
                }
            }

            //console.log(last_arr);
            var li_index=last_arr[last_arr.length-1];

            for(var l=0; l<aFloor.length; l++){
                aLi1[l].className='';
            }
            //页面上部如果有内容，没有楼层会放入新数组，产生错误
            last_arr.length==0 ?aLi1[0].className='ac':aLi1[li_index].className='ac';
        };

        //点击编号，跳转到相对楼层
        for(var i=0; i<aFloor.length; i++){
            aLi1[i].index=i;
            aLi1[i].onclick=function(){
                var start=document.documentElement.scrollTop || document.body.scrollTop;
                var end=arr[this.index].offsetTop;
                move(start,end);
            }
        }
        //move
        var timer;
        function move(start,end){
            var dis=end-start;
            var count=parseInt(2000/30);
            var n=0;
            clearInterval(timer);
            timer=setInterval(function(){
                n++;
                var a=1-n/count;
                var step_dis=start+dis*(1-a*a*a*a);
                window.scrollTo(0,step_dis);
                if(n==count){
                    clearInterval(timer);
                }
            },30)
        }

        function getByClass(oParent,cls){
            if(document.getElementsByClassName) return oParent.getElementsByClassName(cls);
            else{
                var arr=[]; //容器
                var aEl=oParent.getElementsByTagName('*');//所有标签
                var re=new RegExp("\\b"+cls+"\\b");
                for(var i=0;i<aEl.length;i++){
                    if(re.test(aEl[i].className)) arr.push(aEl[i]);//向数组中添加
                }
                return arr;
            }
        }

    }
    
    showFloor();