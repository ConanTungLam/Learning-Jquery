$(document).ready(function () {

    $('.close-pop-up').click(function (e){
        //do something
    });
    $('.infor-stu .show-detail-stu').click(function (e) { 
        $('.infor-stu .show-detail-stu').empty().append('Show Delail');
        $(this).append('<div class="pop-up-infor"><span class="arrow"></span><div class="pop-up-name">Nguyễn Văn A  <div class="close-pop-up">x</div></div><div class="pop-up-person-infor"> Địa chỉ<br/> Ngày sinh<br/> Số ĐT<br/> Email<br/></div><div class="pop-up-score"> Điểm môn 1<br/> Điểm môn 2<br/> Điểm môn 3<br/> Điểm môn 4<br/> Điểm môn 5<br/> Điểm môn 6<br/> Điểm môn 7<br/></div><div class="pop-up-rank"> Điểm trung bình<br> Xếp loại: Giỏi/Khá/Trung Bình</div></div>');
        popUpPosition(this)
    });

    function popUpPosition(element){
        console.log($(this).parent('.infor-stu'));
        console.log($('.pop-up-infor').outerWidth());
        //overlap góc dưới bên phải & dòng dưới cùng
        if($('.pop-up-infor').offset().top + $('.pop-up-infor').outerHeight() > $('.show-stu').outerHeight(true) 
        && $('.infor-stu').offset().left > $('.pop-up-infor').outerWidth()){
            $('.pop-up-infor').css({"top": -$('.pop-up-infor').outerHeight(true) + "px", "left": -$('.pop-up-infor').outerWidth(true) + "px" });
        }
        //overlap dòng dưới bên trái
        if($('.pop-up-infor').offset().top + $('.pop-up-infor').outerHeight() > $('.show-stu').outerHeight(true) 
        && $('.infor-stu').offset().left < $('.pop-up-infor').outerWidth()){
            $('.pop-up-infor').css({"top": -$('.pop-up-infor').outerHeight(true) + "px", "right": -$('.pop-up-infor').outerWidth(true) + "px" });
        }
        //overlap dòng trên cùng góc phải
        // if($('.pop-up-infor').offset().left + $('.pop-up-infor').ou(true) > $('.show-stu').outerHeight(true) 
        // && $('.pop-up-infor').offset().left < $('.pop-up-infor').outerWidth(true)){
        //     $('.pop-up-infor').css({"top": -$('.pop-up-infor').outerHeight(true) + "px", "right": -$('.pop-up-infor').outerWidth(true) + "px" });
        // }
        //else{
       //     $('.pop-up-infor').css({"top": "-10px", "left": $('.show-detail-stu').innerWidth() + "px" });
        //}

    }
        
});