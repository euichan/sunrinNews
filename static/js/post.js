var count=0;
var postContentsBox;
var addBox;
var bubbleCheck=true;
var buttonCheck=0;
var type_btn;
window.onload=function(){
    postContentsBox = document.getElementById("post_contents_box");
    addBox = document.getElementById("add_post_box");
    type_btn=document.getElementsByClassName("type_btn");
    $('.file').preimage();
}
function seungie_post(obj){
    count++;
    
    var postBox = document.createElement("div");
    var imgPostBox = document.createElement("div");
    var postNum = document.createElement("div");
    var textPostBox = document.createElement("div");
    var closeButton = document.createElement("input");
    var textArea = document.createElement("textarea");
    var num = document.createTextNode(count);
    
    closeButton.setAttribute("onclick","deletePost(this)");
    closeButton.setAttribute("type","image");
    closeButton.setAttribute("class","close_btn");
    closeButton.setAttribute("src","../static/images/close.png");
    postBox.setAttribute("class","post_box");
    imgPostBox.setAttribute("class", "img_post_box");
    postNum.setAttribute("class","post_num");
    textPostBox.setAttribute("class","text_post_box");
    textArea.setAttribute("rows","5");
    textArea.setAttribute("cols","30");
    
    postNum.appendChild(num);
    imgPostBox.appendChild(postNum);
    textPostBox.appendChild(textArea);
    
    postBox.appendChild(closeButton);
    postBox.appendChild(imgPostBox);
    postBox.appendChild(textPostBox);

    return postBox;

}
function deletePost(obj){
    count--;
    var parentNode = obj.parentElement.parentElement;
    var max=obj.parentElement.childNodes[1].childNodes[0].innerHTML;
    parentNode.removeChild(obj.parentElement);
    for (var i=0;i<count;i++){
        parentNode.childNodes[5+i].childNodes[1].childNodes[0].innerHTML=i+1;
    }
}
function clickContent(){
    var bubble=document.getElementsByClassName("bubble")[0];
    if(buttonCheck==2){
        buttonCheck=-1;
        for(var i=0;i<type_btn.length;i++){
            type_btn[i].style.backgroundColor="#fff";
            type_btn[i].style.color="#000";

        }
        bubble.style.display="none";
        bubbleCheck=true;
        return 0;
    }
    buttonCheck=2;
    if(bubbleCheck){
        bubble.style.display="block";
        bubbleCheck=false;
    }
    
    for(var i=0;i<type_btn.length;i++){
        type_btn[i].style.backgroundColor="#fff";
        type_btn[i].style.color="#000";

    }
    type_btn[buttonCheck].style.backgroundColor="#555";
                type_btn[buttonCheck].style.color="#fff";

}
function post(){
    var date=document.getElementsByClassName("date_tf");
    var error=document.getElementsByClassName("alert")[0];
    for(var i=0;i<date.length;i++){
        if(!isNumber(date[i].value)){
            error.innerHTML="<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;에러!</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;캘린더 날짜는 날짜 형식에 맞춰서 입력해주세요!";
            $(error).fadeIn(200,function(){
                setTimeout(function(){$(error).fadeOut(500,function(){});},1000);
            });
        }
    }
}
function isNumber(s) {
  s += ''; // 문자열로 변환
  s = s.replace(/^\s*|\s*$/g, ''); // 좌우 공백 제거
  if (s == '' || isNaN(s)) return false;
  return true;
}
function clickPro(){
    if(buttonCheck==2){
        clickContent();
    }
    if(buttonCheck==1){
        buttonCheck=-1;
        for(var i=0;i<type_btn.length;i++){
            type_btn[i].style.backgroundColor="#fff";
            type_btn[i].style.color="#000";

        }
        return 0;
    }
    buttonCheck=1;
    for(var i=0;i<type_btn.length;i++){
        type_btn[i].style.backgroundColor="#fff";
        type_btn[i].style.color="#000";
    }
    type_btn[buttonCheck].style.backgroundColor="#555";
    type_btn[buttonCheck].style.color="#fff";
}
function clickNoti(){
    if(buttonCheck==2){
        clickContent();
    }

    if(buttonCheck==0){
        buttonCheck=-1;
        for(var i=0;i<type_btn.length;i++){
            type_btn[i].style.backgroundColor="#fff";
            type_btn[i].style.color="#000";
        }
        return 0;
    }
    buttonCheck=0;
    for(var i=0;i<type_btn.length;i++){
        type_btn[i].style.backgroundColor="#fff";
        type_btn[i].style.color="#000";
    }
    type_btn[buttonCheck].style.backgroundColor="#555";
    type_btn[buttonCheck].style.color="#fff";
}
