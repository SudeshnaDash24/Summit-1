$(document).ready(function ($) {
    var dir;
    var url = window.location.pathname;
    url = url.split('/');
    var mainurl = window.location.host;
    if (mainurl !== "localhost")
        mainurl = mainurl + '/' + url[1];
    var fileextension = ".jpg";
    if (region === "India") {
        if (program.toLowerCase() === "itdp") {
            dir1 = "/img/grads/india/itdp/group1";
            dir2 = "/img/grads/india/itdp/group2";
            dir3 = "/img/grads/india/itdp/group3";
        }
        else if (program.toLowerCase() === "itlp" ) {
            dir1 = "/img/grads/india/itlp/group1";
            dir2 = "/img/grads/india/itlp/group2";
            dir3 = "/img/grads/india/itlp/group3";
        }
    }
    else if (region === "US") {
        if (program.toLowerCase() === "itdp") {
            dir1 = "/img/grads/austin/itdp/group1";
            dir2 = "/img/grads/austin/itdp/group2";
            dir3 = "/img/grads/austin/itdp/group3";
        }
        else if (program.toLowerCase() === "itlp (fy16-fy18)" || program.toLowerCase() === "leader (  itlp fy19)") {
            dir1 = "/img/grads/austin/itlp/group1";
            dir2 = "/img/grads/austin/itlp/group2";
            dir3 = "/img/grads/austin/itlp/group3";
        }
    }
    else {
        if (program.toLowerCase() === "itdp") {
            dir1 = "/img/grads/malaysia/itdp/group1";
            dir2 = "/img/grads/malaysia/itdp/group2";
            dir3 = "/img/grads/malaysia/itdp/group3";
        }
        else if (program.toLowerCase() === "itlp") {
            dir1 = "/img/grads/malaysia/itlp/group1";
            dir2 = "/img/grads/malaysia/itlp/group2";
            dir3 = "/img/grads/malaysia/itlp/group3";
        }
    }
    var jssor_1_options = {
        $AutoPlay: 1,
        $Idle: 0,
        $SlideDuration: 5000,
        $SlideEasing: $Jease$.$Linear,
        $PauseOnHover: 4,
        $SlideWidth: 150,
        $Align: 0
    };
    var MAX_WIDTH = 1000;
    $.ajax({
        url: "http://" + mainurl + dir1,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if (val.match(/\.(jpe?g|png|gif)$/)) {
                    $(".group1slides").append("<div><img data-u='image' src='" + val + "'></div>");
                }
            });
            if ($('#section-graduationprofiles').length > 0) {
                var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
                function ScaleSlider() {
                    var containerElement = jssor_1_slider.$Elmt.parentNode;
                    var containerWidth = containerElement.clientWidth;

                    if (containerWidth) {

                        var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

                        jssor_1_slider.$ScaleWidth(expectedWidth);
                    }
                    else {
                        window.setTimeout(ScaleSlider, 30);
                    }
                }
                ScaleSlider();
            }
            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
        }
    });
    $.ajax({
        url: "http://" + mainurl + dir2,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if (val.match(/\.(jpe?g|png|gif)$/)) {
                    $(".group2slides").append("<div><img data-u='image' src='" + val + "'></div>");
                }
            });
            if ($('#section-graduationprofiles').length > 0) {
                var jssor_2_slider = new $JssorSlider$("jssor_2", jssor_1_options);
                function ScaleSlider() {
                    var containerElement = jssor_2_slider.$Elmt.parentNode;
                    var containerWidth = containerElement.clientWidth;

                    if (containerWidth) {
                        var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);
                        jssor_2_slider.$ScaleWidth(expectedWidth);
                    }
                    else {
                        window.setTimeout(ScaleSlider, 30);
                    }
                }
                ScaleSlider();
            }
            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
        }
    });
    $.ajax({
        url: "http://" + mainurl + dir3,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if (val.match(/\.(jpe?g|png|gif)$/)) {
                    $(".group3slides").append("<div><img data-u='image' src='" + val + "'></div>");
                }
            });
            if ($('#section-graduationprofiles').length > 0) {
                var jssor_3_slider = new $JssorSlider$("jssor_3", jssor_1_options);
                function ScaleSlider() {
                    var containerElement = jssor_3_slider.$Elmt.parentNode;
                    var containerWidth = containerElement.clientWidth;
                    if (containerWidth) {
                        var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);
                        jssor_3_slider.$ScaleWidth(expectedWidth);
                    }
                    else {
                        window.setTimeout(ScaleSlider, 30);
                    }
                }
                ScaleSlider();
            }
            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
        }
    });
    

    $('.region,.program').hover(function () {

        $(this).addClass("hover-region");

    }, function () {
        $(this).removeClass("hover-region");
    });
    $('.region').on('click', function () {
        $('.selected-region').removeClass("selected-region");
        $(this).addClass("selected-region");
        var region = $(this).text();
        var program = $('.selected-program').text();
        if (region != "" && program != "") {
            //alert("Refreshing page based on region- " + program + "|" + region);
            reloadPage(region, program);
        }
    });
    $('.program').on('click', function () {
        $('.selected-program').removeClass("selected-program");
        $(this).addClass("selected-program");
        var program = $(this).text();
        var region = $('.selected-region').text();
        if (region != "" && program != "") {
            // alert("Refreshing page based on program - "+program+"|"+region);
            reloadPage(region, program);

        }
    });
//    $('a').click(function (e) {
//        // Special stuff to do when this link is clicked...

//        // Cancel the default action
//        e.preventDefault();
//    });
    function getBaseUrl(address) {

        var path = "";
        if (window.location.hostname.toLowerCase() == "localhost") {
            path = location.protocol + "//" + location.host + "/";
        }
        else {
            //path = location.protocol + "//" + location.host + "/";
            path = location.protocol + "//" + location.host + "/" + location.pathname.split('/')[1] + "/";
        }
        return path;
    }

    function reloadPage(region, program) {
        location.href = getBaseUrl() + "Home/Index?Region=" + region + "&Program=" + program;
    }

    $(document).on('change', '.btn-file :file', function () {
        var input = $(this),
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [label]);
    });


    $('.btn-file :file').on('fileselect', function (event, label) {
        $("#imageText").val(label);
    });
    
    $("#imgInp").change(function () {
        store(this);
    });
});
function store(input) {
    inputFile = input;
}
function readURL() {
    var input = inputFile;
    var fileUpload = $(input).get(0);
    var files = fileUpload.files;
    var data = new FormData();
    // Add the uploaded image content to the form data collection
    if (files.length > 0) {
        data.append("UploadedImage", files[0]);
    }

    $.ajax({
        contentType: "application/json; charset=utf-8",
        url: "http://annualsummit.aus.amer.dell.com/SummitAPI/" + 'api/image',
        type: 'POST',
        contentType: false,
        processData: false,
        data: data,
        success: function (message) {
            setTimeout(fade_out, 10000);
            $("#errorMsg").html("Your image uploaded successfully");
        },
        fail: function (message) {
            setTimeout(fade_out, 10000);
            $("#errorMsg").html("Error in updating: " + message);
        },
        error: function (jqXHR, exception) {
            if (jqXHR.status === 200) {
                msg = jqXHR.responseText;
            }
            else if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status === 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status === 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            $("#errorMsg1").html(msg);
        }
    });
}
function fade_out() {
    $("#errorMsg").fadeOut().empty();
}
function register() {
    var name = $("#name").val();
    var email = $('#email').val();
    var badgeid = $("#badgeid").val();
    var program = $("#program").val();
    var city = $("#city").val();
    var country = $("#country1").val();
    var tshirtSize = $("#tshirtSize").val();
    var meal = $('#meal').val();
    var gender = $("input[name=gender]:checked").val();
    var data = {
        username: name,
        city: city,
        email: email,
        country: country,
        program: program,
        //isITDP: program == "ITDP" ? true : false,
        //isITLP: program == "ITLP" ? true : false,
        //isLeader: program == "LEADER" ? true : false,
        tShirtSize: tshirtSize,
        gender: gender,
        dietaryRestrictions: meal,
        badgeID: badgeid
    }
    $.ajax({
        contentType: "application/json; charset=utf-8",
        url: "http://annualsummit.aus.amer.dell.com/SummitAPI/" + 'api/users',
        type: 'POST',
        data: JSON.stringify(data),
        dataType: 'json/text',
        success: function (message) {
            $("#errorMsg").html(message);
        },
        fail: function (message) {
            $("#errorMsg").html("Error in updating: " + message);
        },
        error: function (jqXHR, exception) {
            if (jqXHR.status === 200) {
                msg = jqXHR.responseText;
            }
            else if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status === 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status === 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            $("#errorMsg1").html(msg);
        }
    });
}
function submitFeedback() {
    var sessionName = $("#sessionName").val();
    var feedback = $("#feedback").val();
    var rating = $("input[name=star]:checked").val();
    lvar data = {
        session: sessionName,
        rating: rating,
        feedback: feedback,
        region: region
    }
    $.ajax({
        contentType: "application/json; charset=utf-8",
        url: "http://annualsummit.aus.amer.dell.com/SummitAPI/" + 'api/feedback',
        type: 'POST',
        data: JSON.stringify(data),
        dataType: 'json/text',
        success: function (message) {
            $("#errorMsg").html(message);
        },
        fail: function (message) {
            $("#errorMsg").html("Error in updating: " + message);
        },
        error: function (jqXHR, exception) {
            if (jqXHR.status === 200) {
                msg = jqXHR.responseText;
            }
            else if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status === 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status === 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            $("#errorMsg1").html(msg);
        }
    });
}