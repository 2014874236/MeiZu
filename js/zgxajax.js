$(function(){
			getDate();
			function getDate(type){
			   	$.ajax({
			       	type: 'GET',
			       	url:'./data/listDate.json',
			        dataType: 'json',
			        success: function(data){
			//         	alert(123);
						var htme=htmllzgx(data);						
						console.log(data);
						$('.mobile-listone').append(htme);
			       	},
			        error: function(xhr, type){
			            alert('您处于二次元世界!')
			       	}
			   	})
			}
			function htmllzgx(data){
				var html='';
				for(i in data){
				html=html+'<div class="imglistone"><a href="#"><div class="all"><img src="'+data[i].img+'"/><div class="info"><h2>'+data[i].name+'</h2><h3>'
				+data[i].type+'</h3><h4>'+data[i].num+'</h4></div></div></a></div>'
				}
				return html;
			}
		})