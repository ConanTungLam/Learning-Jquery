$(document).ready(function () {

    $('.close-pop-up').click(function (e){
        $(this).css(display, none);
    });
    $('.infor-stu .show-detail-stu').click(function (e) { 

        $('.infor-stu .show-detail-stu').empty().append('Show Delail');
        $(this).append('<div class="pop-up-infor"><div class="pop-up-name">Nguyễn Văn A  <div class="close-pop-up">x</div></div><div class="pop-up-person-infor"> Địa chỉ<br/> Ngày sinh<br/> Số ĐT<br/> Email<br/></div><div class="pop-up-score"> Điểm môn 1<br/> Điểm môn 2<br/> Điểm môn 3<br/> Điểm môn 4<br/> Điểm môn 5<br/> Điểm môn 6<br/> Điểm môn 7<br/></div><div class="pop-up-rank"> Điểm trung bình<br> Xếp loại: Giỏi/Khá/Trung Bình</div></div>');
    });

 

    
});