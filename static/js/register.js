var level=0;
function seungie(e) {
    if (e.id == "btn_left") {
        $.fn.fullpage.moveSlideLeft();
    }
   
    $.fn.fullpage.moveSlideRight();
}
var csrftoken;
window.onload = function () {
    $.ajaxSetup({
        beforeSend: function (xhr, settings) {
            csrftoken = $.cookie('csrftoken');

            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });
}

function upload_img() {
    $('#id_img').trigger('click');
}

function change_img() {
    if($('#id_img')[0].value) 
        $('#preview')[0].src = $('#preview')[0].src.replace('_btn.','_mold.');
    else 
        $('#preview')[0].src = $('#preview')[0].src.replace('_mold.','_btn.');
}

function slideHandler( anchorLink, index, slideAnchor, slideIndex){
    if(slideIndex==2)
    {
            
    }
}

function sendData() {
    var formData = new FormData($('form')[0]);
    
    formData.append('level',level); 
    formData.append('img',$("input[name=img]")[0].files[0]);
    formData.append('csrfmiddlewaretoken',csrftoken);
    $.ajax({
        url: '/accounts/signup',
        processData: false,
        contentType: false,
        data: formData,
        type: 'POST',
        success: function (result) {
            window.location = '/accounts/signupcomplete'
        }
    });
}

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}