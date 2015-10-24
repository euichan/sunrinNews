var count=0;
var postContentsBox;
var addBox;
window.onload=function(){
    postContentsBox = document.getElementById("post_contents_box");
    addBox = document.getElementById("add_post_box");
}
function seungie_post(obj){
    count++;
    
    var postBox = document.createElement("div");
    var imgPostBox = document.createElement("div");
    var postNum = document.createElement("div");
    var textPostBox = document.createElement("div");
    var textArea = document.createElement("textarea");
    
    var num = document.createTextNode(count);
    
    postBox.setAttribute("class","post_box");
    imgPostBox.setAttribute("class", "img_post_box");
    postNum.setAttribute("class","post_num");
    textPostBox.setAttribute("class","text_post_box");
    textArea.setAttribute("rows","5","cols","30");
    
    postNum.appendChild(num);
    imgPostBox.appendChild(postNum);
    textPostBox.appendChild(textArea);
        postBox.appendChild(imgPostBox);

    postBox.appendChild(textPostBox);
    
    postContentsBox.insertBefore(postBox,addBox);
}