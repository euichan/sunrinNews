var choice;
var email;
var emailSign;
var password;
var page = 0;
var sex;
var firstName;
var lastName;
var img;
var club;
var urlCount=6;//  /구분 ex) http://127.0.0.1:14493/sunrinNews/html/register.html   <- 5개 + 1 
function seungie(e) {
    var url=window.location.href.split("/");
    
    if (e.id == "btn_left") {
        $.fn.fullpage.moveSlideLeft();
        switch(url[urlCount]){
        case "secondPage":
            page=0;
            break;
        case "3rdPage":
            page=1;
            break;
        }
          return;
    }
    switch(url[urlCount]){
        case "secondPage":
            
            page=1;
            break;
        
        case undefined:
            page=0;
            break;
        case "3rdPage":
            page=2;
            break;
    }
    if (page == 0) {
        //첫번째 페이지
        if (e.id == "student_container") {
            choice = 1;
        } else if (e.id == "club_container") {
            choice = 2;
        } else if (e.id == "school_container") {
            choice = 3;
        }
    }
    if (page == 1) {
        //두번째 페이지
        var emailId = document.getElementsByClassName("full_field")[0];
        var passwordId = document.getElementsByClassName("full_field")[1];
        var passwordCheckId = document.getElementsByClassName("full_field")[2];
        var sexId = document.getElementsByClassName("forty_field_combobox")[0];
        var clubId = document.getElementsByClassName("sixty_field_combobox")[0];
        var firstNameId = document.getElementsByClassName("forty_field")[0];
        var lastNameId = document.getElementsByClassName("sixty_field")[0];
        firstName=firstNameId.value;
        lastName=lastNameId.value;
        email = emailId.value;
        password=passwordId.value;
        var passwordCheck = passwordCheckId.value;
        if(!password==passwordCheck){
            alert("Error code 1: 패스워드가 틀립니다 -by SeungEui");
            password="";
            return;
        }
        sex=sexId.selectedIndex;
        club=clubId.options[clubId.selectedIndex].innerHTML;
    }
    if (page == 2) {
        alert("가입완료");
        //이곳에 가입완료 전송 소스

        return;
    }
    $.fn.fullpage.moveSlideRight();
}