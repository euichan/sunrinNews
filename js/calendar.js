var d;
var year;
var date;
var month;
var lastDate;
var prevLastDate;
var firstDay;
var dayContainer;
window.onload = function () {
    d = new Date();
    setDate(d);

}

function setDate(d) {
    year = d.getFullYear();
    date = d.getDate();
    month = d.getMonth();
    lastDate = (new Date(year, month + 1, 0)).getDate();
    prevLastDate = (new Date(year, month, 0)).getDate();
    firstDay = (new Date(year, month, 0)).getDay();
    setCalender();
}

function getMonthName(month) {
    switch (month) {
    case 0:
        return "JANUARY";
    case 1:
        return "FEBRUARY";
    case 2:
        return "MARCH";
    case 3:
        return "APRIL";
    case 4:
        return "MAY";
    case 5:
        return "JUNE";
    case 6:
        return "JULY";
    case 7:
        return "AUGUST";
    case 8:
        return "SEPTEMBER";
    case 9:
        return "OCTOBER";
    case 10:
        return "NOVEMBER";
    case 11:
        return "DECEMBER";
    }
}

function setCalender() {
    var monthTitle = document.getElementById("month_title");
    monthTitle.innerHTML = getMonthName(month) + ", " + year;
    dayContainer = document.getElementsByClassName("calender")[0];
    for (var i = 1; i < dayContainer.childNodes.length; i += 2) {
        dayContainer.childNodes[i].innerHTML = "";
    }
    for (var i = firstDay-1; i >=0; i--) {
        var dateText = document.createTextNode(prevLastDate-((firstDay-1)-i));
        dayContainer.childNodes[(i * 2) + 1].setAttribute("class", "date_no_this_month");
        dayContainer.childNodes[(i * 2) + 1].appendChild(dateText);
    }
    for (var i = 0; i < lastDate; i++) {
        var dateText = document.createTextNode(i + 1);
        dayContainer.childNodes[firstDay * 2 + (i * 2) + 1].setAttribute("class", "date_this_month");
        dayContainer.childNodes[firstDay * 2 + ((i) * 2) + 1].appendChild(dateText);
    }
    for (var i = 0; i < dayContainer.childNodes.length - (lastDate+firstDay); i++) {
        var dateText = document.createTextNode(i + 1);
        dayContainer.childNodes[(firstDay+lastDate) * 2 + (i * 2) + 1].setAttribute("class", "date_no_this_month");
        dayContainer.childNodes[(firstDay+lastDate) * 2 + ((i) * 2) + 1].appendChild(dateText);
    }
}

function seungie_prev(object) {
    setDate(new Date(year, month - 1));
    setCalender();
}

function seungie_next(object) {
    setDate(new Date(year, month + 1));
    setCalender();
}