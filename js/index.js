	
var n2=0;
$(document).ready(function(){
	var tNum=$(".banner").length-1;
	var nNum=0;		
	
	//移上去改变图标的透明度
	$(".banner_ctrl a").hover(function(){
		$(this).fadeTo(100,.7);
		},function(){
		$(this).fadeTo(100,.4);
	});
	
	//往前走一步
	$(".banner_ctrl .prev").click(function(){
		(nNum-1)<0?n2=tNum:n2=nNum-1;
		bSwitch(nNum,n2);
		nNum=n2;
	});	
	//往后走一步
	$(".banner_ctrl .next").click(function(){
		(nNum+1)>tNum?n2=0:n2=nNum+1;
		bSwitch(nNum,n2);
		nNum=n2;
	});
	//切换 淡入淡出
	function bSwitch(nNum,n2){
		$('.banner').eq(nNum).fadeOut(500,function(){
			$('.banner').eq(n2).fadeIn(1000);
		});		
	};
							
	$(function(){
		var switchTime;
	 	$(".m_banner").hover(function(){
			clearInterval(switchTime);
		},function(){
		switchTime = setInterval(function(){
			(nNum+1)>tNum?n2=0:n2=nNum+1;
			bSwitch(nNum,n2);
			nNum=n2;
		},5000);
		}).trigger("mouseleave");//鼠标离开触发事件
	});
});
//侧导航栏的js
$(function(){
				$('#tabb li').hover(function(){
					
					$('#tabb li').removeClass('flii');//在当前的hover放的地方加上样式除去上一个tab li的样式
					$(this).addClass('flii');
					$('#tab_conn div').removeClass('fdivv');//除去tab_con div的样式
					if ($(this).index()!=0) //index 值从 0 开始，所有第一个元素的 index 值是 0（不是 1）
					{
					$('#tab_conn').show(); //下方div内容展示
					$('#tab_conn div').eq($(this).index()).addClass('fdivv');
					}			//$(this).index()选取当前li的元素的位置,在tab_con div元素相对的位置添加fdiv样式											//eq() 选择器选取带有指定 index 值的元素。
					else{
						return;//不做任何改变
					}
					
				})
				
				$('#tabb li').mouseout(function(){
					$('#tab_conn').hide();
				})
				
				$('#tabb').mouseout(function(){
					 event.stopPropagation();//阻止冒泡 
					 // alert(123)
				})
				
				$('#tab_conn').mouseout(function(){
					event.stopPropagation();//阻止冒泡 		
				})
								
				$('.category-child').mouseover(function(){	
					
					$('#tabb li').eq($(this).index()).addClass('flii');				
					$('#tab_conn').show(); //下方div内容展示
					$('#tab_conn div').eq($(this).index()).addClass('fdivv');		
				})
				
				$('.category-child').mouseout(function(){
					 //alert(123)					
					$('#tabb li').removeClass('flii');//除去tab li中的样式
					$('#tab_conn').hide();
		
				})
				
			})