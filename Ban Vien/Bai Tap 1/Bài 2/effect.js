$(document).ready(function () {

    $('.show-detail-stu').click(function (e) { 
        // show pop-up student information
        // 1. Nếu chưa có hiện infor thì click hiển thị infor
        // 2. Nếu đang hiện thì click lần nữa thì ẩn đi
        // 3. Nếu có 1 pop-up đang hiện click vô 1 Show Detail khác thì hiện infor cái đang click và tắt cái có trước

        if($(this).children().hasClass('pop-up-infor') == true && $(this).hasClass('active') == true){
            closePopUp(this)
        }
        else if($(this).children().hasClass('pop-up-infor') == true && $(this).hasClass('active') == false){
            openPopUp(this)
        }
        else{
            $(this).append('<div class="pop-up-infor"><span class="arrow"></span><div class="pop-up-name">Nguyễn Văn A  <div class="close-pop-up">x</div></div><div class="pop-up-person-infor"> Địa chỉ<br/> Ngày sinh<br/> Số ĐT<br/> Email<br/></div><div class="pop-up-score"> Điểm môn 1<br/> Điểm môn 2<br/> Điểm môn 3<br/> Điểm môn 4<br/> Điểm môn 5<br/> Điểm môn 6<br/> Điểm môn 7<br/></div><div class="pop-up-rank"> Điểm trung bình<br> Xếp loại: Giỏi/Khá/Trung Bình</div></div>');
            openPopUp(this);
            popUpPosition(this)
        }

            

        $('.close-pop-up').click(function (e){
            e.stopPropagation();
            closePopUp($(this.closest('.show-detail-stu')));

        }); 
    });
    
    // Nếu muốn có 1 bgr mờ khi click vô infor thì enable or not class .enable
    function closePopUp(OneElementClose){        
        $(OneElementClose).removeClass('active');
        $(OneElementClose).children('.pop-up-infor').css({"opacity": "0", "transform": "scale(0.3)", "zIndex": "-1"});
        //$('body').removeClass('enable')

    }

    function openPopUp(OneElementOpen){
        $('.show-detail-stu').removeClass('active').children('.pop-up-infor').css({"opacity": "0", "transform": "scale(0.3)", "zIndex": "-1"});
        $(OneElementOpen).addClass('active');
        $(OneElementOpen).children('.pop-up-infor').css({"opacity": "1", "transform": "scale(1)", "zIndex": "3"});
        //$('body').addClass('enable')
    }

    function popUpPosition(element){
        console.log($(element).children('.pop-up-infor').offset().left);
        //overlap góc dưới bên phải & dòng dưới cùng & dòng trên cùng góc phải
        if(($(element).children('.pop-up-infor').offset().top + $('.pop-up-infor').outerHeight() > $('.show-stu').offset().top + $('.show-stu').outerHeight() 
        && $(element).closest('.infor-stu').offset().left > $('.pop-up-infor').outerWidth()) || 
        $(element).children('.pop-up-infor').offset().left + $('.pop-up-infor').outerWidth() > $('.show-stu').offset().left + $('.show-stu').outerWidth() 
        && $(element).closest('.infor-stu').offset().left > $('.pop-up-infor').outerWidth()){
            $(element).children('.pop-up-infor').css({"top": -$(element).children('.pop-up-infor').outerHeight(true) + 25 + "px", "left": -$(element).children('.pop-up-infor').outerWidth(true) - 35 + "px" });
            $('.arrow').removeClass().addClass('arrow bottom-right')
        }
        //overlap dòng dưới bên trái
        else if($(element).children('.pop-up-infor').offset().top + $('.pop-up-infor').outerHeight() > $('.show-stu').offset().top + $('.show-stu').outerHeight() 
        && $(element).closest('.infor-stu').offset().left < $('.pop-up-infor').outerWidth()){
            $(element).children('.pop-up-infor').css({"top": -$(element).children('.pop-up-infor').outerHeight(true) + 25 + "px", "right": -$(element).children('.pop-up-infor').outerWidth(true) - 35 + "px" });
            $('.arrow').removeClass().addClass('arrow bottom-left')
        }
    }


    $('.selector').each(function(index, element){
        console.log(index, element);
    });


    var callBackFunc = function(index, element){
        console.log(idx, item);
    }
    


    
    forEachElement('selector', callBackFunc);

    function forEachElement(selector, callBackFunc){
        var listElement = document.getElementsByClassName(selector);

        for(var i = 0; i < listElement.length; i++){
            callBackFunc(i, listElement[i]);
        }

        console.log(i);

    }
    
        
});