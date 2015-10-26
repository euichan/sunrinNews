function ClickedSchool(event){
    document.getElementsByClassName("category")[0].school_hl.style.borderBottomColor="#ff0000";
    document.getElementsByClassName("category")[1].club_hl.style.borderBottomColor="transparent";
}

function ClickedClub(event){
    document.getElementsByClassName("category")[0].school_hl.style.borderBottomColor="transparent";
    document.getElementsByClassName("category")[1].club_hl.style.borderBottomColor="#ff0000";
}