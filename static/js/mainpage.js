
/* 우진이 짜던 코드

function ClickedSchool(event){
    document.getElementsByClassName("category")[0].school_hl.style.borderBottomColor="#ff0000";
    document.getElementsByClassName("category")[1].club_hl.style.borderBottomColor="transparent";
}

function ClickedClub(event){
    document.getElementsByClassName("category")[0].school_hl.style.borderBottomColor="transparent";
    document.getElementsByClassName("category")[1].club_hl.style.borderBottomColor="#ff0000";
}
*/

window.onload = function(){
    window.addEventListener('scroll', function () {
        var contentsContainer=document.getElementById("all_contents_container");
        var topBar=document.getElementById("topbar");
        if(($(contentsContainer).css("margin-top").replace("px","")-topBar.offsetHeight)<window.scrollY){
            window.scrollTo(0,($(contentsContainer).css("margin-top").replace("px","")-topBar.offsetHeight));
        }
    });
}