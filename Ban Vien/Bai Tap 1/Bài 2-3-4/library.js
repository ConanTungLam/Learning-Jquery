function StudentGroup() {
    var EDIT_MODAL = null;
    var studentList;

    // private properties
    var me = this;

    this.renderLayout = function (listStudentInfo) {
        studentList = listStudentInfo;
        var $container = $('<div class="student-group-container"></div>');

        for (var i = 0; i < listStudentInfo.length; i++) {
            _generateStudentInfo($container, listStudentInfo[i]);
        }
        return $container;
        
    };

    // Tuong tu cái trên kia, ở đây quyết định xem mình sẽ cần gì và trả lại gì, input là student data, output là 1 Component (StudentInfoComponent).
    // tạo tiếp class StudentInfo
    function _generateStudentInfo($container, studentData) {
        var studentInfo = new StudentInfo(studentData, me);
        // goi tiep ham generate de student info tao ra modal cua rieng no, sau do append vao container
        var studentModal = studentInfo.renderLayout();
        $container.append(studentModal);
        // new ko muon nhu vay thi ta su dung nhu sau:
        // studentInfo.renderAndAppendLayout($container);
    }


    // #SHOW_EXIT_STUDENT_MODAL

    this.showEditStudentModal = function (userData, onUpdateUserData) {
        //Trong StudentGroup, ta tao 1 method co ten la showEditStudentModal, method nay la public de co the duoc goi tu ben ngoai.
        // Sau do ta xac dinh cac tham so truyen vao cho method nay, cac input, output ma ta mong doi.

        // Input o day se la userData, chinh la user ma class nay dang giu.
        // Output o day se la newUserData, thong tin sau khi user edit.
        // Tuy nhien o day co 1 dac diem, ta khong biet chinh xac khi nao thi user se click vao nut update de thay doi, vi vay ta khong the
        // tra ve 1 object ma thay vao do ta se tra ve 1 callback.

        // CallBack la gi, callback la viec ta goi lai 1 method, khi co 1 su kien gi do xay ra, o trong nay call back chinh la su kien xay
        // ra sau khi ta click vao nut update.


        //Tien hanh thuc hien nhu sau :

        //Step 1. Render EDIT MODAL. Neu chua co thi ta tao moi
        if (EDIT_MODAL == null) {
            EDIT_MODAL = _renderEditModal(userData);
        }


        // Step 2. Cap nhat lai cac gia tri cho input modal
        _updateEditModal(userData);


        // Step 3. Bind event click lai. Vi sao ta phai lam nhu vay? Vi ta goi lai method nay rat nhieu lan, moi lan goi la 1 lan bind them event.
        // Neu ta ko clear cac event cu dang listen tren su kien click nay di, thi moi lan goi method nay, sau khi an nut click se co n cai callback duoc goi.

        EDIT_MODAL.find('.update-button').off("click");
        EDIT_MODAL.find('.update-button').on("click", function () {
            var newStudentData = _collectEditModalData();

            onUpdateUserData(newStudentData);
        });


        // XEM TIEP #HANDLE_SU_KIEN_XAY_RA_SAU_KHI_CLICK_UPDATE
    }


    function showConfirmModal (params){
        var confirmModal = $('<div class="confirm-del"><h3 class="text-confirm">' + params.title +'</h3><button class="accept" value="Yes">Có</button><button class="reject" value="No">Không</button></div>');
        $('body').append(confirmModal);

        confirmModal.find('button.accept').click(function(){
            
            params.onConfirmFunc();
            confirmModal.remove();
        });

        confirmModal.find('button.reject').click(function(){
            
            params.onCancelFunc();
            confirmModal.remove();
        });    

    }

    this.removeStudentByIndex = function (studentId, onConfirmCallBackFunc, onCancelCallBackFunc){
        showConfirmModal({
            title : 'Bạn có muốn xóa học sinh này?',
            onConfirmFunc : function (){
                _deleteStudent();
                onConfirmCallBackFunc();

            }, 
            onCancelFunc: function (){
                onCancelCallBackFunc();
            }
        })

        function _deleteStudent(){
            var index;
            for(var i = 0; i < studentList.length; i++) {
                if(studentList[i].id == studentId){
                    index= i;
                    break;
                }
            }
            while( index < studentList.length){
                studentList[index].id = studentList[index].id - 1;
                studentList[index] = studentList[index + 1];
                index = index + 1;
             }
             studentList.length = studentList.length - 1;
             console.log(studentList)
        }
        
         
    }




}

const STUDENT_GROUP_UTILS = new StudentGroup();



// Tao 1 student Info Class voi cac constructor la student data.
function StudentInfo(studentData, studentGroup) {
    var id = studentData.id;
    var name = studentData.name;
    var avatar = studentData.avatar;
    var birthday = studentData.birthday;
    var phone = studentData.phone;
    var address = studentData.address;
    var email = studentData.email;
    var score = studentData.score;
    var COMPONENT = null;
    var COMPONENT_DETAIL = null;

    var me = this; // tai thoi diem nay su dung variable me thay the cho this. de viec goi cac function de dang hon, xem o _bindEvent o duoi, me.editStudent se trigger cai event o tren.

    // render layout se nhan cac param tuy theo minh quyet dinh, minh co the gui lai 1 Object hoac minh cung co the dua container ngoai kia vao day de append no. Trong vi du nay, ta su dung 1 container cha de sinh ra cai nay,
    // vi vay ta can phai tra ve component modal (COMPONENT o day la output, va input la null);

    this.renderLayout = function () {
        COMPONENT = _generateLayout();
        _bindEvent();
        return COMPONENT;
    };



    //  this.renderAndAppendLayout = function ($container) {
    // //     COMPONENT = _generateLayout();
    // //     _bindEvent();


    // //     $container.append(COMPONENT);
    // // };

    this.showStudentDetail = function () {

        if (COMPONENT_DETAIL == null) {
            // này có thể dùng .hide() cũng được nhưng dùng css để có hiệu ứng.
            closePopUp()
            COMPONENT_DETAIL = _generateComponentDetail();
            COMPONENT_DETAIL.addClass("active")
            showUserDetailModal()
        }
        else if(COMPONENT_DETAIL != null && COMPONENT_DETAIL.hasClass("active") == true){
            closePopUp()
        }
        else{
            closePopUp();
            COMPONENT_DETAIL.addClass("active");
            COMPONENT_DETAIL.css({ "opacity": "1", "transform": "scale(1)", "zIndex": "2" });
        }

        COMPONENT_DETAIL.find(".close-pop-up").click(function(e){
            closePopUp();
        })

        function showUserDetailModal() {
            // COMPONENT_DETAIL.addClass("active");
            // add adjust position for component here.
            //overlap dòng dưới bên trái

            if (COMPONENT_DETAIL.offset().top + COMPONENT_DETAIL.outerHeight() > $('.show-stu').offset().top + $('.show-stu').outerHeight()
                && $('.show-stu').outerWidth() - COMPONENT_DETAIL.offset().left > COMPONENT_DETAIL.outerWidth()) {
                COMPONENT_DETAIL.css({ "top": -COMPONENT_DETAIL.outerHeight(true) + 35 + "px", "right": -COMPONENT_DETAIL.outerWidth(true) + 20 + "px" });
                COMPONENT_DETAIL.find('.arrow').removeClass().addClass('arrow bottom-left')
            }

            //overlap góc dưới bên phải & dòng dưới cùng & dòng trên cùng góc phải
            else if ((COMPONENT_DETAIL.offset().top + COMPONENT_DETAIL.outerHeight() > $('.show-stu').offset().top + $('.show-stu').outerHeight()
                && COMPONENT_DETAIL.offset().right < COMPONENT_DETAIL.outerWidth()) ||
                COMPONENT_DETAIL.offset().left + COMPONENT_DETAIL.outerWidth() > $('.show-stu').offset().left + $('.show-stu').outerWidth()
                && COMPONENT_DETAIL.offset().left > COMPONENT_DETAIL.outerWidth()) {
                COMPONENT_DETAIL.css({ "top": -COMPONENT_DETAIL.outerHeight(true) + 35 + "px", "left": -COMPONENT_DETAIL.outerWidth(true) + 20 + "px" });
                COMPONENT_DETAIL.find('.arrow').removeClass().addClass('arrow bottom-right')
            }
            else {
                COMPONENT_DETAIL.find('.arrow').removeClass().addClass('arrow top-left')
            }
        }

        function closePopUp(){
            $('.pop-up-infor').css({ "opacity": "0", "transform": "scale(0.3)", "zIndex": "-1" });
            $('.pop-up-infor').removeClass("active");
        }

    };

    this.editStudent = function () {
        // edit student se show modal chua cac field thong tin cua hoc sinh va cho phep ta co the thay doi gia tri cua no.
        // Modal nay nam o ngoai component, ta co the dua no vao trong student Group de cho no quan ly.
        // Vi vay, ta can student group cung cap 1 phuong thuc de ta co the thuc hien dieu nay.
        // XEM #SHOW_EXIT_STUDENT_MODAL



        // #HANDLE_SU_KIEN_XAY_RA_SAU_KHI_CLICK_UPDATE
        STUDENT_GROUP_UTILS.showEditStudentModal(studentData, function (newStudentData) {
            // don gian ta thay the student data = new student data, va re-render lai layout.
            this.updateStudent(studentData);
        });
    };

    this.updateStudent = function (studentData) {
        // quyet dinh gia tri nao se duoc update
        studentData = new StudentData();

        dislayName = studentData.dislayName;
        className = studentData.className;
        listMonHoc = studentData.listMonHoc;
    };

    this.rerenderLayout = function (newData) {
        // step 1. update new data
        var currentComp = COMPONENT;


        // step 2. rerender component
        COMPONENT = _generateLayout();


        // step 3. replace current component by new component.
        COMPONENT.insertAfter(currentComp);
        currentComp.remove();
    };

    this.deleteStudent = function(){
        studentGroup.removeStudentByIndex(id, function(){
            console.log("CONFIRM");
            COMPONENT.remove();
        }, function(){
            console.log("CANCEL");
        });
    
    }

    function _generateLayout() {
        var studentBlockEl = $('<div class="infor-stu" id="' + id + '"><div class="name-stu"> ' + name + ' <span class="edit-stu">&#9998;</span><span class="delete-stu">&#10008;</span></div> <div class="avatar-stu">avatar</div> <div class="more-info">Ngày sinh: ' + birthday + '<br>Số ĐT: ' + phone + '<br> Email: ' + email + ' </div> <div class="show-detail-stu">Show Delail</div></div>');
        return studentBlockEl;
    }

    function _bindEvent() {
        COMPONENT.find('.show-detail-stu').click(function () {
            me.showStudentDetail();
        });

        COMPONENT.find('.edit-button').click(function () {
            me.editStudent();
        });

        COMPONENT.find('.delete-stu').click(function(){
            me.deleteStudent();
        })
    }

    function _generateComponentDetail() {

        var modal = $('<div class="pop-up-infor" id=' + id + '><span class="arrow"></span><div class="pop-up-name">' + name + '<div class="close-pop-up">x</div></div><div class="pop-up-person-infor"> Địa chỉ: ' + address + '<br/> Ngày sinh: ' + birthday + '<br/> Số ĐT: ' + phone + '<br/> Email: ' + email + '<br/></div><div class="pop-up-score"> Điểm môn 1: ' + score[0] + '<br/>  Điểm môn 2: ' + score[1] + '<br/> Điểm môn 3: ' + score[2] + '<br/> Điểm môn 4: ' + score[3] + '<br/> Điểm môn 5: ' + score[4] + '<br/> Điểm môn 6: ' + score[5] + '<br/> Điểm môn 7: ' + score[6] + '<br/></div><div class="pop-up-rank"> Điểm trung bình: <br> Xếp loại: Giỏi/Khá/Trung Bình</div></div>');
        COMPONENT.find('.show-detail-stu').append(modal);
        modal.click(function(e){
            e.stopPropagation();
        })
        return modal;
    }
}

$(document).ready(function () {
    var listStudent = [{
        id: 1,
        name: "Nguyễn Văn A",
        avatar: "/url/image/01.jpg",
        birthday: "2005-05-08",
        phone: "0323455547",
        address: "12 Tôn Đản",
        email: 'infoa@gmail.com',
        score: [7, 5, 10, 8, 5, 6, 7]
    },
    {
        id: 2,
        name: "Nguyễn Văn B",
        avatar: "/url/image/01.jpg",
        birthday: "2005-08-08",
        phone: "0323467547",
        address: "12 Tôn Đản",
        email: 'infob@gmail.com',
        score: [5, 5, 3, 4, 5, 6, 5]
    },
    {
        id: 3,
        name: "Nguyễn Văn C",
        avatar: "/url/image/01.jpg",
        birthday: "2005-11-18",
        phone: "0356467547",
        address: "12 Tôn Đản",
        email: 'infoc@gmail.com',
        score: [3, 2, 3, 7, 5, 8, 7]
    },
    {
        id: 4,
        name: "Nguyễn Văn D",
        avatar: "/url/image/01.jpg",
        birthday: "2005-07-25",
        phone: "0323466547",
        address: "12 Tôn Đản",
        email: 'infod@gmail.com',
        score: [2, 2, 3, 2, 3, 4, 3]
    },
    {
        id: 5,
        name: "Nguyễn Văn E",
        avatar: "/url/image/01.jpg",
        birthday: "2005-01-10",
        phone: "0323667547",
        address: "12 Tôn Đản",
        email: 'infoe@gmail.com',
        score: [8, 8, 9, 8, 10, 9, 9]
    },
    {
        id: 6,
        name: "Nguyễn Văn F",
        avatar: "/url/image/01.jpg",
        birthday: "2005-04-03",
        phone: "0323889547",
        address: "12 Tôn Đản",
        email: 'infof@gmail.com',
        score: [7, 7, 8, 6, 8, 6, 9]
    },
    {
        id: 7,
        name: "Nguyễn Văn G",
        avatar: "/url/image/01.jpg",
        birthday: "2005-12-28",
        phone: "0323985476",
        address: "12 Tôn Đản",
        email: 'infog@gmail.com',
        score: [10, 9, 9, 8, 10, 10, 8]
    },
    {
        id: 8,
        name: "Nguyễn Văn H",
        avatar: "/url/image/01.jpg",
        birthday: "2005-09-30",
        phone: "0323800047",
        address: "12 Tôn Đản",
        email: 'infoh@gmail.com',
        score: [7, 5, 5, 5, 5, 6, 7]
    },
    {
        id: 9,
        name: "Nguyễn Văn I",
        avatar: "/url/image/01.jpg",
        birthday: "2005-02-27",
        phone: "0323889547",
        address: "12 Tôn Đản",
        email: 'infoi@gmail.com',
        score: [4, 8, 9, 9, 7, 6, 8]
    },
    {
        id: 10,
        name: "Nguyễn Văn J",
        avatar: "/url/image/01.jpg",
        birthday: "2005-06-06",
        phone: "0323223547",
        address: "12 Tôn Đản",
        email: 'infoj@gmail.com',
        score: [10, 8, 5, 6, 9, 6, 9]
    }];

    var container = STUDENT_GROUP_UTILS.renderLayout(listStudent);
    $('.show-stu').append(container);

});