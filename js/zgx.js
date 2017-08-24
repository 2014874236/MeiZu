			$(function(){
				var time9;
				var time8;
				var time7;				
				//点击左按钮后所触发的事件
				$('.left').click(function(){ 
					clearInterval(time9);
					clearInterval(time8);
					clearInterval(time7);
					var left=$('.bigbox').scrollLeft();   									//获得当前滚动条的位置
					var time=setInterval(function(){
						if(left>500){
							left=left-550;
						}else{
							left=left-200;
						}
						$('.bigbox').scrollLeft(left);	
						if(left<=0){
							clearInterval(time);
						}
//						console.log(left)
					},50)		
					$('.left').css({'border-color':'#EFEFEF','color':'#EFEFEF'});			//按完左按钮后，左按钮定住
					$('.right').css({'border':'1px solid #BDBDBD','color':'#BDBDBD'});  	//右按钮有颜色
					$('.right').hover(function(){ 											//hover需要两个方法，鼠标滑过时，鼠标滑过后							
						$(this).css({'border-color':'#00c3f5','color':'#00c3f5'}); 			//右按钮有hover属性
					},    
					function(){ 
						$('.right').css({'border':'1px solid #BDBDBD','color':'#BDBDBD'}); 
					}); 
					$('.left').hover(function(){ 
						$(this).css({'border-color':'#EFEFEF','color':'#EFEFEF'}); 			//在按完右按钮时，设置了左按钮的hover，要清除
					},    																	//hover需要两个方法，鼠标滑过时，鼠标滑过后
					function(){ 
						$('.left').css({'border-color':'#EFEFEF','color':'#EFEFEF'}); 
					}); 
				})				
				//定时切换图片
				function auto(){				
				time9=setInterval(function(){
					var w=$('.bigbox').scrollLeft();
					if(w==0){      																//表示滚动条位于最左侧，位置是 0,即左按钮定住，可以按右按钮
						var right=$('.bigbox').scrollLeft();//返回滚动条的位置
						 time7=setInterval(function(){
							right=right+150;	
							if(right>500){
								right=right+550;
							}else{
								right=right+200;
							}						
							$('.bigbox').scrollLeft(right);	
							if(right>=1240){
								clearInterval(time7);
							}
						},100)
						$('.right').css({'border-color':'#EFEFEF','color':'#EFEFEF'});			//右按钮定住
						$('.left').css({'border':'1px solid #BDBDBD','color':'#BDBDBD'});		//左按钮有颜色
						$('.left').hover(function(){ 
							$(this).css({'border-color':'#00c3f5','color':'#00c3f5'});      	//左按钮有hover属性
						},  
						function(){ 
							$('.left').css({'border':'1px solid #BDBDBD','color':'#BDBDBD'}); 	//鼠标滑过后的颜色
						}); 
						$('.right').hover(function(){ 
							$(this).css({'border-color':'#EFEFEF','color':'#EFEFEF'}); 			//在css中设置了right的hover，要更改
						},   
						function(){ 
							$('.right').css({'border-color':'#EFEFEF','color':'#EFEFEF'}); 
						}); 
					}
					else{
						var left=$('.bigbox').scrollLeft();
//						$('.bigbox').scrollLeft(left-1240);  //向左滚动
						 time8=setInterval(function(){
							if(left<500){
								left=left-200;
							}else{
								left=left-550;
							}		 				
							$('.bigbox').scrollLeft(left);
							
							if(left<=0){
								clearInterval(time8);
							}
//							console.log(left)
						},100)
						$('.left').css({'border-color':'#EFEFEF','color':'#EFEFEF'});			//左按钮定住
						$('.right').css({'border':'1px solid #BDBDBD','color':'#BDBDBD'}); 		//右按钮有颜色
						$('.right').hover(function(){ 											//右按钮有hover
						$(this).css({'border-color':'#00c3f5','color':'#00c3f5'}); 
						},  
						function(){ 
							$('.right').css({'border':'1px solid #BDBDBD','color':'#BDBDBD'}); 
						}); 
						$('.left').hover(function(){ 
							$(this).css({'border-color':'#EFEFEF','color':'#EFEFEF'}); 			//在按右按钮后，设置了左按钮的hover
						},    
						function(){ 
							$('.left').css({'border-color':'#EFEFEF','color':'#EFEFEF'}); 
						}); 
					}
				},3000)
			}	
			//鼠标悬停时，停止定时切换
			$('.hotlist').hover(function(){
				clearInterval(time9);					
			})				
			//鼠标离开时，开始定时切换
			$('.bigbox').mouseleave(function(){
				auto();
			})				
			//调用定时切换函数
			auto();			
			//点击右按钮后所触发的事件
			$('.right').click(function(){ 
				clearInterval(time9);
				clearInterval(time8);
				clearInterval(time7);
				var right=$('.bigbox').scrollLeft();//获取当前元素所在滚动条的位置
//				$('.bigbox').scrollLeft(right+1240);
				var time=setInterval(function(){
					right=right+150;	
					if(right>500){
						right=right+550;
					}else{
						right=right+200;
					}						
					$('.bigbox').scrollLeft(right);	
					if(right>=1240){
						clearInterval(time);
					}
//					console.log(left)
				},50)
				$('.right').css({'border-color':'#EFEFEF','color':'#EFEFEF'});					//按完右按钮后，右按钮定住
				$('.left').css({'border':'1px solid #BDBDBD','color':'#BDBDBD'}); 			//左按钮有颜色
				$('.left').hover(function(){ 
					$(this).css({'border-color':'#00c3f5','color':'#00c3f5'});   			//左按钮有hover属性
				},    
				function(){ 
					$('.left').css({'border':'1px solid #BDBDBD','color':'#BDBDBD'}); 		//鼠标滑过后的颜色
				});					
				$('.right').hover(function(){ 
					$(this).css({'border-color':'#EFEFEF','color':'#EFEFEF'}); 				//在css中设置了right的hover，要更改
				},    
				function(){ 
					$('.right').css({'border-color':'#EFEFEF','color':'#EFEFEF'}); 
				}); 
			})
		})