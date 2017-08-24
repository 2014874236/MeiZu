 //text
    var yanjing = document.getElementById('yanjing');  
    var biyan = document.getElementById('biyan');
    //input框
    var inputyanjing = document.getElementById('mimashow');  
    var inputbiyan = document.getElementById('mimahide'); 
 
 //将text值传给password
function hidePicture()
{
	document.getElementById("shouView").style.display="none";
	var showPsw = document.getElementById("mimashow").value;
	document.getElementById("mimahide").value =showPsw;
	document.getElementById("unShowView").style.display="block";
}

//将password值传给text
function showPicture()
{
	document.getElementById("unShowView").style.display="none";
	var showPsw = document.getElementById("mimahide").value;
	document.getElementById("mimashow").value =showPsw;
	document.getElementById("shouView").style.display="block";
}
//弹出提示框
$('#phone').click(function(){
				$('.send').show();
				$('.send1').hide();
				$('.send2').hide();
		})
$('#yanzhengma').click(function(){
				$('.send1').show();
				$('.send').hide();
				$('.send2').hide();
			})
$('#mimashow').click(function(){
				$('.send2').show();
				$('.send').hide();
				$('.send1').hide();
			})
$('#mimahide').click(function(){
				$('.send2').show();
				$('.send').hide();
				$('.send1').hide();
			})

//跳转到登录页面
function myFunction()
{
	if(2!=1){
alert("注册成功！");
window.location.href="登录.html";
window.event.returnValue=false;
}
}