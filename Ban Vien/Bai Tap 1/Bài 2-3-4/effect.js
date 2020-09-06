$(document).ready(function () {
    // thông tin ban đầu của học sinh - 10 học sinh
    var studentList = [
        {
            id: 1,
            name: "Nguyễn Văn A",
            avatar: "/url/image/01.jpg",
            birthday: "2005-05-08",
            phone: "0323455547",
            address: "12 Tôn Đản",
            email: 'infoa@gmail.com',
            score: {
                mon01: 6,
                mon02: 8,
                mon03: 9,
                mon04: 7,
                mon05: 8,
                mon06: 5,
                mon07: 10,
                averageScore: function () {
                    var avg = (this.mon01 + this.mon02 + this.mon03 + this.mon04 + this.mon05 + this.mon06 + this.mon07) / 7;
                    return Math.round(avg * 100) / 100
                },

                rank: function () {
                    if (this.averageScore() < 3.5) {
                        return "Kém"
                    }
                    else if (this.averageScore() >= 3.5 && this.averageScore() < 5) {
                        return "Yếu"
                    }
                    else if (this.averageScore() >= 5 && this.averageScore() < 6.5) {
                        return "Trung Bình"
                    }
                    else if (this.averageScore() >= 6.5 && this.averageScore() < 8) {
                        return "Khá"
                    }
                    else {
                        return "Giỏi"
                    }
                }
            }
        },
        {
            id: 2,
            name: "Nguyễn Văn B",
            avatar: "/url/image/01.jpg",
            birthday: "2005-08-08",
            phone: "0323467547",
            address: "12 Tôn Đản",
            email: 'infob@gmail.com',
            score: {
                mon01: 7,
                mon02: 3,
                mon03: 4,
                mon04: 9,
                mon05: 5,
                mon06: 5,
                mon07: 6,
                averageScore: function () {
                    var avg = (this.mon01 + this.mon02 + this.mon03 + this.mon04 + this.mon05 + this.mon06 + this.mon07) / 7;
                    return Math.round(avg * 100) / 100
                },

                rank: function () {
                    if (this.averageScore() < 3.5) {
                        return "Kém"
                    }
                    else if (this.averageScore() >= 3.5 && this.averageScore() < 5) {
                        return "Yếu"
                    }
                    else if (this.averageScore() >= 5 && this.averageScore() < 6.5) {
                        return "Trung Bình"
                    }
                    else if (this.averageScore() >= 6.5 && this.averageScore() < 8) {
                        return "Khá"
                    }
                    else {
                        return "Giỏi"
                    }
                }
            }
        },
        {
            id: 3,
            name: "Nguyễn Văn C",
            avatar: "/url/image/01.jpg",
            birthday: "2005-11-18",
            phone: "0356467547",
            address: "12 Tôn Đản",
            email: 'infoc@gmail.com',
            score: {
                mon01: 7,
                mon02: 6,
                mon03: 5,
                mon04: 6,
                mon05: 8,
                mon06: 4,
                mon07: 6,
                averageScore: function () {
                    var avg = (this.mon01 + this.mon02 + this.mon03 + this.mon04 + this.mon05 + this.mon06 + this.mon07) / 7;
                    return Math.round(avg * 100) / 100
                },

                rank: function () {
                    if (this.averageScore() < 3.5) {
                        return "Kém"
                    }
                    else if (this.averageScore() >= 3.5 && this.averageScore() < 5) {
                        return "Yếu"
                    }
                    else if (this.averageScore() >= 5 && this.averageScore() < 6.5) {
                        return "Trung Bình"
                    }
                    else if (this.averageScore() >= 6.5 && this.averageScore() < 8) {
                        return "Khá"
                    }
                    else {
                        return "Giỏi"
                    }
                }
            }
        },
        {
            id: 4,
            name: "Nguyễn Văn D",
            avatar: "/url/image/01.jpg",
            birthday: "2005-07-25",
            phone: "0323466547",
            address: "12 Tôn Đản",
            email: 'infod@gmail.com',
            score: {
                mon01: 2,
                mon02: 3,
                mon03: 4,
                mon04: 6,
                mon05: 3,
                mon06: 5,
                mon07: 6,
                averageScore: function () {
                    var avg = (this.mon01 + this.mon02 + this.mon03 + this.mon04 + this.mon05 + this.mon06 + this.mon07) / 7;
                    return Math.round(avg * 100) / 100
                },

                rank: function () {
                    if (this.averageScore() < 3.5) {
                        return "Kém"
                    }
                    else if (this.averageScore() >= 3.5 && this.averageScore() < 5) {
                        return "Yếu"
                    }
                    else if (this.averageScore() >= 5 && this.averageScore() < 6.5) {
                        return "Trung Bình"
                    }
                    else if (this.averageScore() >= 6.5 && this.averageScore() < 8) {
                        return "Khá"
                    }
                    else {
                        return "Giỏi"
                    }
                }
            }
        },
        {
            id: 5,
            name: "Nguyễn Văn E",
            avatar: "/url/image/01.jpg",
            birthday: "2005-01-10",
            phone: "0323667547",
            address: "12 Tôn Đản",
            email: 'infoe@gmail.com',
            score: {
                mon01: 7,
                mon02: 9,
                mon03: 9,
                mon04: 10,
                mon05: 10,
                mon06: 9,
                mon07: 8,
                averageScore: function () {
                    var avg = (this.mon01 + this.mon02 + this.mon03 + this.mon04 + this.mon05 + this.mon06 + this.mon07) / 7;
                    return Math.round(avg * 100) / 100
                },

                rank: function () {
                    if (this.averageScore() < 3.5) {
                        return "Kém"
                    }
                    else if (this.averageScore() >= 3.5 && this.averageScore() < 5) {
                        return "Yếu"
                    }
                    else if (this.averageScore() >= 5 && this.averageScore() < 6.5) {
                        return "Trung Bình"
                    }
                    else if (this.averageScore() >= 6.5 && this.averageScore() < 8) {
                        return "Khá"
                    }
                    else {
                        return "Giỏi"
                    }
                }
            }
        },
        {
            id: 6,
            name: "Nguyễn Văn F",
            avatar: "/url/image/01.jpg",
            birthday: "2005-04-03",
            phone: "0323889547",
            address: "12 Tôn Đản",
            email: 'infof@gmail.com',
            score: {
                mon01: 1,
                mon02: 2,
                mon03: 5,
                mon04: 2,
                mon05: 3,
                mon06: 2,
                mon07: 1,
                averageScore: function () {
                    var avg = (this.mon01 + this.mon02 + this.mon03 + this.mon04 + this.mon05 + this.mon06 + this.mon07) / 7;
                    return Math.round(avg * 100) / 100
                },

                rank: function () {
                    if (this.averageScore() < 3.5) {
                        return "Kém"
                    }
                    else if (this.averageScore() >= 3.5 && this.averageScore() < 5) {
                        return "Yếu"
                    }
                    else if (this.averageScore() >= 5 && this.averageScore() < 6.5) {
                        return "Trung Bình"
                    }
                    else if (this.averageScore() >= 6.5 && this.averageScore() < 8) {
                        return "Khá"
                    }
                    else {
                        return "Giỏi"
                    }
                }
            }
        },
        {
            id: 7,
            name: "Nguyễn Văn G",
            avatar: "/url/image/01.jpg",
            birthday: "2005-12-28",
            phone: "032398547",
            address: "12 Tôn Đản",
            email: 'infog@gmail.com',
            score: {
                mon01: 3,
                mon02: 7,
                mon03: 8,
                mon04: 9,
                mon05: 10,
                mon06: 5,
                mon07: 8,
                averageScore: function () {
                    var avg = (this.mon01 + this.mon02 + this.mon03 + this.mon04 + this.mon05 + this.mon06 + this.mon07) / 7;
                    return Math.round(avg * 100) / 100
                },

                rank: function () {
                    if (this.averageScore() < 3.5) {
                        return "Kém"
                    }
                    else if (this.averageScore() >= 3.5 && this.averageScore() < 5) {
                        return "Yếu"
                    }
                    else if (this.averageScore() >= 5 && this.averageScore() < 6.5) {
                        return "Trung Bình"
                    }
                    else if (this.averageScore() >= 6.5 && this.averageScore() < 8) {
                        return "Khá"
                    }
                    else {
                        return "Giỏi"
                    }
                }
            }
        },
        {
            id: 8,
            name: "Nguyễn Văn H",
            avatar: "/url/image/01.jpg",
            birthday: "2005-09-30",
            phone: "0323800047",
            address: "12 Tôn Đản",
            email: 'infoh@gmail.com',
            score: {
                mon01: 4,
                mon02: 5,
                mon03: 6,
                mon04: 9,
                mon05: 10,
                mon06: 7,
                mon07: 9,
                averageScore: function () {
                    var avg = (this.mon01 + this.mon02 + this.mon03 + this.mon04 + this.mon05 + this.mon06 + this.mon07) / 7;
                    return Math.round(avg * 100) / 100
                },

                rank: function () {
                    if (this.averageScore() < 3.5) {
                        return "Kém"
                    }
                    else if (this.averageScore() >= 3.5 && this.averageScore() < 5) {
                        return "Yếu"
                    }
                    else if (this.averageScore() >= 5 && this.averageScore() < 6.5) {
                        return "Trung Bình"
                    }
                    else if (this.averageScore() >= 6.5 && this.averageScore() < 8) {
                        return "Khá"
                    }
                    else {
                        return "Giỏi"
                    }
                }
            }
        },
        {
            id: 9,
            name: "Nguyễn Văn I",
            avatar: "/url/image/01.jpg",
            birthday: "2005-02-27",
            phone: "0323889547",
            address: "12 Tôn Đản",
            email: 'infoi@gmail.com',
            score: {
                mon01: 10,
                mon02: 5,
                mon03: 6,
                mon04: 4,
                mon05: 8,
                mon06: 5,
                mon07: 4,
                averageScore: function () {
                    var avg = (this.mon01 + this.mon02 + this.mon03 + this.mon04 + this.mon05 + this.mon06 + this.mon07) / 7;
                    return Math.round(avg * 100) / 100
                },

                rank: function () {
                    if (this.averageScore() < 3.5) {
                        return "Kém"
                    }
                    else if (this.averageScore() >= 3.5 && this.averageScore() < 5) {
                        return "Yếu"
                    }
                    else if (this.averageScore() >= 5 && this.averageScore() < 6.5) {
                        return "Trung Bình"
                    }
                    else if (this.averageScore() >= 6.5 && this.averageScore() < 8) {
                        return "Khá"
                    }
                    else {
                        return "Giỏi"
                    }
                }
            }
        },
        {
            id: 10,
            name: "Nguyễn Văn J",
            avatar: "/url/image/01.jpg",
            birthday: "2005-06-06",
            phone: "0323223547",
            address: "12 Tôn Đản",
            email: 'infoj@gmail.com',
            score: {
                mon01: 6,
                mon02: 7,
                mon03: 8,
                mon04: 7,
                mon05: 6,
                mon06: 7,
                mon07: 5,
                averageScore: function () {
                    var avg = (this.mon01 + this.mon02 + this.mon03 + this.mon04 + this.mon05 + this.mon06 + this.mon07) / 7;
                    return Math.round(avg * 100) / 100
                },

                rank: function () {
                    if (this.averageScore() < 3.5) {
                        return "Kém"
                    }
                    else if (this.averageScore() >= 3.5 && this.averageScore() < 5) {
                        return "Yếu"
                    }
                    else if (this.averageScore() >= 5 && this.averageScore() < 6.5) {
                        return "Trung Bình"
                    }
                    else if (this.averageScore() >= 6.5 && this.averageScore() < 8) {
                        return "Khá"
                    }
                    else {
                        return "Giỏi"
                    }
                }
            }
        },

    ];

    function renderStudentList(studentList) {
        $('.show-stu').html('');
        $('.show-stu').append('<div class="add-stu">Thêm</div>');
        for (var i = 0; i < studentList.length; i++) {
            $('.show-stu').append('<div class="infor-stu" id="' + studentList[i].id + '"><div class="name-stu"> ' + studentList[i].name + ' <span class="edit-stu">&#9998;</span><span class="delete-stu">&#10008;</span></div> <div class="avatar-stu">avatar</div> <div class="more-info">Ngay sinh: ' + studentList[i].birthday + '<br>Số ĐT: ' + studentList[i].phone + '<br> Email: ' + studentList[i].email + ' </div> <div class="show-detail-stu">Show Delail</div></div>')
        }
    };

    renderStudentList(studentList);

    // save function
    function saveStudent(id){
        var index = -1;
        for (var i = 0; i < studentList.length; i++) {
            if(studentList[i].id == id){
                index= i;
                break;
            }
        }

        if(index > -1){
            studentList[index].name = $('#name').val();
            studentList[index].birthday = $('#birthday').val();
            studentList[index].phone = $('#phone').val();
            studentList[index].email = $('#email').val()
        }

        else{
            this.id = $('#id').text();
            this.name = $('#name').val();
            this.birthday = $('#birthday').val();
            this.phone = $('#phone').val();
            this.email = $('#email').val();
            studentList.push(this);
            $('.add-stu-view').removeClass("active");
            $('body').removeClass('enable');
            $('#id').html('')
        }


console.log(index);
        renderStudentList(studentList);
    }

    // cancel function
    function cancelSaving(){
        $('.add-stu-view').removeClass("active");
        $('body').removeClass('enable');
        $('#id').html('')
    }

    // reset form
    function resetFormAfterSave(){
        $('#id').text();
        $('#name').val() = '';
        $('#birthday').val() = '';
        $('#phone').val() = '';
        $('#email').val() = ''
    }


    // thêm học sinh
     $('.add-stu').click(function (e) {
         $('#id').append(studentList.length + 1);
         $('.add-stu-view').addClass("active");
         $('body').addClass('enable');
         closePopUp($('.pop-up-infor'))
     });

     $('.cancel').click(function(e){
        cancelSaving()
     });

     $('.save').click(function(e){
        var student = new Object();
        saveStudent(student.id)
     });

     // chỉnh sửa thông tin học sinh
     function editStudentInfor(id){
        let index;
        for (var i = 0; i < studentList.length; i++) {
            if(studentList[i].id == id){
                index= i;
                break;
            }
        }
        $('#id').text(studentList[index].id);
        $('#name').val(studentList[index].name) ;
        $('#birthday').val(studentList[index].birthday) ;
        $('#phone').val(studentList[index].phone) ;
        $('#email').val(studentList[index].email) ;
     }

     $('.edit-stu').click(function (e) {
        $('.add-stu-view').addClass("active");
        $('body').addClass('enable');
        closePopUp($('.pop-up-infor'))
        editStudentInfor($(this).parent().parent().attr('id'));
        saveStudent($(this).parent().parent().attr('id'))
    });
 

     //xóa học sinh
     function deleteStudent(id){
        let index;
        for (var i = 0; i < studentList.length; i++) {
            if(studentList[i].id == id){
                index= i;
                break;
            }
        }
        while( index < studentList.length){
            studentList[index] = studentList[index + 1];
            index = index + 1;
         }
         studentList.length = studentList.length - 1;
        
        renderStudentList(studentList);
     }

     $('.delete-stu').click(function(e){
        e.stopPropagation();
        deleteStudent($(this).parent().parent().attr('id'));
        //console.log(studentList)
     });

    $('.show-detail-stu').click(function (e) {
        // show pop-up student information
        // 1. Nếu chưa có hiện infor thì click hiển thị infor
        // 2. Nếu đang hiện thì click lần nữa thì ẩn đi
        // 3. Nếu có 1 pop-up đang hiện click vô 1 Show Detail khác thì hiện infor cái đang click và tắt cái có trước

        if ($(this).children().hasClass('pop-up-infor') == true && $(this).hasClass('active') == true) {
            closePopUp(this)
        }
        else if ($(this).children().hasClass('pop-up-infor') == true && $(this).hasClass('active') == false) {
            openPopUp(this)
        }
        else {
            $(this).append('<div class="pop-up-infor"><span class="arrow"></span><div class="pop-up-name">Nguyễn Văn A  <div class="close-pop-up">x</div></div><div class="pop-up-person-infor"> Địa chỉ<br/> Ngày sinh<br/> Số ĐT<br/> Email<br/></div><div class="pop-up-score"> Điểm môn 1<br/> Điểm môn 2<br/> Điểm môn 3<br/> Điểm môn 4<br/> Điểm môn 5<br/> Điểm môn 6<br/> Điểm môn 7<br/></div><div class="pop-up-rank"> Điểm trung bình<br> Xếp loại: Giỏi/Khá/Trung Bình</div></div>');
            openPopUp(this);
            popUpPosition(this)
        }

        $('.close-pop-up').click(function (e) {
            e.stopPropagation();
            closePopUp($(this.closest('.show-detail-stu')));

        });
    });

    function closePopUp(OneElementClose) {
        $(OneElementClose).removeClass('active');
        $(OneElementClose).children('.pop-up-infor').css({ "opacity": "0", "transform": "scale(0.3)", "zIndex": "-1" });
    }

    function openPopUp(OneElementOpen) {
        $('.show-detail-stu').removeClass('active').children('.pop-up-infor').css({ "opacity": "0", "transform": "scale(0.3)", "zIndex": "-1" });
        $(OneElementOpen).addClass('active');
        $(OneElementOpen).children('.pop-up-infor').css({ "opacity": "1", "transform": "scale(1)", "zIndex": "3" });
    }

    // Vị trí hiển thị của pop-up
    function popUpPosition(element) {
        //overlap góc dưới bên phải & dòng dưới cùng & dòng trên cùng góc phải
        if (($(element).children('.pop-up-infor').offset().top + $('.pop-up-infor').outerHeight() > $('.show-stu').offset().top + $('.show-stu').outerHeight()
            && $(element).closest('.infor-stu').offset().left > $('.pop-up-infor').outerWidth()) ||
            $(element).children('.pop-up-infor').offset().left + $('.pop-up-infor').outerWidth() > $('.show-stu').offset().left + $('.show-stu').outerWidth()
            && $(element).closest('.infor-stu').offset().left > $('.pop-up-infor').outerWidth()) {
            $(element).children('.pop-up-infor').css({ "top": -$(element).children('.pop-up-infor').outerHeight(true) + 35 + "px", "left": -$(element).children('.pop-up-infor').outerWidth(true) + 20 + "px" });
            $(element).children('.pop-up-infor').children('.arrow').removeClass().addClass('arrow bottom-right')
        }
        //overlap dòng dưới bên trái
        else if ($(element).children('.pop-up-infor').offset().top + $('.pop-up-infor').outerHeight() > $('.show-stu').offset().top + $('.show-stu').outerHeight()
            && $(element).closest('.infor-stu').offset().left < $('.pop-up-infor').outerWidth()) {
            $(element).children('.pop-up-infor').css({ "top": -$(element).children('.pop-up-infor').outerHeight(true) + 35 + "px", "right": -$(element).children('.pop-up-infor').outerWidth(true) + 20 + "px" });
            $(element).children('.pop-up-infor').children('.arrow').removeClass().addClass('arrow bottom-left')
        }
        else {
            $(element).children('.pop-up-infor').children('.arrow').removeClass().addClass('arrow top-left')
        }
    }


});