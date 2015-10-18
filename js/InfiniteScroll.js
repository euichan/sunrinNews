var InfiniteScrollView = function InfiniteScrollView() {
    var view; //InfiniteScrollView 클래스가 지정된 다이브 객체가 담기는 변수
    var url; //요청할 주소
    var dataNum; //맨 처음 불러올 데이터 객체 수
    var gap; //스크롤 바의 일정위치에 내려오면 데이터 값 불러오는데 그 일정위치 값(px)
    var scrolledDataNum = 5; //로딩시 불러오는 데이터 객체 수
    var check = false;
    var dataNum = 15;
    var nowIndex;

    this.init = function (view, url, dataNum, gap, scrolledDataNum) {
        this.view = view;
        this.url = url;
        this.dataNum = dataNum;
        this.gap = gap;
        this.scrolledDataNum = scrolledDataNum;
        this.dataNum = dataNum;
        this.nowIndex = dataNum;
        this.view.style.overflowX = 'hidden';
    };
    this.sendServer = function (startUrl) {
        var req = httpGet(startUrl);
        var jsonData = JSON.parse(req);
        console.log(jsonData);
        for (var i = 0; i < jsonData.length; i++) {
            var counter = jsonData[i];
            var div = insertNode(counter);
            this.view.appendChild(div);
        }
        // this.View.scrollTop = 0;
    };
};
//infiniteScrollview에 삽입할 객체 dom 소스
function insertNode(counter) {
    var div = document.createElement("div");
    var img = document.createElement("div");
    var content = document.createElement("div");
    var like = document.createElement("div");
    
    div.className += " news_card";
    img.className += " news_card_img";
    content.className += " news_card_content";
    like.className += " news_card_like";
    
    var img_text = document.createTextNode(counter.title);
    var content_text = document.createTextNode(counter.value);
    var like_text = document.createTextNode(counter.value);
    
    img.appendChild(img_text);
    content.appendChild(content_text);
    like.appendChild(like_text);
    
    div.appendChild(img);
    div.appendChild(content);
    div.appendChild(like);
    
    return div;
}

function httpGet(Url) {
    var xmlHttp;
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", Url, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}
window.onload = function () {
    temp = document.getElementsByClassName("InfiniteScrollView");

    for (var i = 0; i < temp.length; i++) {
        InfiniteScrollView[i] = new InfiniteScrollView();
        //init 변수 (temp[i], 요청 할 서버 루트 인덱스 주소,스크롤바 끝에서 일정위치에 들어서면, 로딩시 불러오는 데이터 갯수, 맨처음 불러올 데이터 갯수)
        InfiniteScrollView[i].init(temp[i], "", 5, 20, 5, 15);

        InfiniteScrollView[i].sendServer("http://applepi.kr/sunring/php/InfiniteScroll.php?start=0&end=" + InfiniteScrollView[i].dataNum);
        InfiniteScrollView[i].view.addEventListener('scroll', function () {
            var height = InfiniteScrollView[i].view.style.height.replace("px", "");
            var scrollTop = InfiniteScrollView[i].view.scrollTop;
            var scrollHeight = InfiniteScrollView[i].view.scrollHeight;

            if (scrollTop >= (scrollHeight - height - InfiniteScrollView[i].gap)) {
                if (InfiniteScrollView[i].check) {
                    console.log("request to server");
                    InfiniteScrollView[i].check = false;
                    InfiniteScrollView[i].sendServer("http://applepi.kr/sunring/php/InfiniteScroll.php?start=" + (nowIndex + 1) + "&end=" + (nowIndex + 1 + InfiniteScrollView[i].ScrolledDataNum));
                    InfiniteScrollView[i].nowIndex = InfiniteScrollView[i].nowIndex + 1 + InfiniteScrollView[i].scrolledDataNum;
                }
            } else if (scrollTop < (scrollHeight - height - InfiniteScrollView[i].gap)) {
                InfiniteScrollView[i].check = true;
            }
        });
    }

}