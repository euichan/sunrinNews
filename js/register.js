var choice;
var email;
var emailSign;
var password;
var page = 0;
var sex;
var img;

function seungie(e) {
    if (e.id == "prev_btn") {
        $.fn.fullpage.moveSlideLeft();
        page--;
        return;
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
        var emailId = document.getElementById("input_email");
        var passwordId = document.getElementById("input_pw");
        var passwordCheckId = document.getElementById("input_pw_check");
        var sexName = document.getElementsByName("sex");

        email = emailId.value;
        var male = sexName[0].checked;
        var women = sexName[1].checked;
        if (male) {
            sex = 1;
        } else {
            sex = 0;
        }
        if (passwordId.value == passwordCheckId.value) {
            password = passwordId.value;
        }
    }
    if (page == 2) {
        alert("가입완료");
        //이곳에 가입완료 전송 소스

        return;
    }
    $.fn.fullpage.moveSlideRight();
    page++;
}