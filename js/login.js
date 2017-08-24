//点击记住登录状态转换
var img1 = document.getElementById("picture");
    img1.srcArr = ["img/vain.png", "img/loginrem.png"];
    img1.clk=0;
    img1.onclick = function() {
        this.clk++;
        this.src = this.srcArr[this.clk % 2];
    };
//hover状态时显示隐藏框   
$(function(){
 	$('.dot').hover(function(){
 		$('.matchingbox').css("display","block");
 	})
 	$('.dot').mouseout(function(){
 		$('.matchingbox').css("display","none");
 	})
 	
 	$('.dot').click(function(){
 		$('.dot').css("background-position","0 -216px");
 	})
 })
   
   
//账号登录时输入账号密码 
function sendok(){
	if(phone.value!="" && yanzhengma.value!=""){
		localStorage.userid=phone.value;
		sessionStorage.userpwd=yanzhengma.value;
		return true;
		}
		else{
			alert("请输入账号");
			return false;
		}
	}
function isload(){
 	localStorage.clear();	
	if(localStorage.userid){
		
		 phone.value=localStorage.userid;
	}	   
}
function login1(){
	if(localStorage.userid!="admin"||sessionStorage.userpwd!="admin"){
	alert("账户密码错误，请重新登录！！");
    sessionStorage.removeItem('yanzhengma');
	document.location="登录.html";
	}
}
	














function login1(){
	if(localStorage.userid!="admin"||sessionStorage.userpwd!="admin"){
	alert("账户密码错误，请重新登录！！");
    sessionStorage.removeItem('yanzhengma');
	document.location="登录.html";
	}
}
function login2(){
	if(localStorage.userid!="134"||sessionStorage.userpwd!="000"){
	alert("账户验证码错误，请重新登录！！");
    sessionStorage.removeItem('yanzhengma');
	document.location="验证码登录.html";
	}
}