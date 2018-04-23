jQuery(function ($) {

    'use strict';

     //--------------------------------------------------------------------
     //PreLoader
     //--------------------------------------------------------------------

    (function () {
        $('#preloader').delay(200).fadeOut('slow');
    }());

     //--------------------------------------------------------------------
     //One Page Navigation
     //--------------------------------------------------------------------

    (function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 50) {
                $('nav.navbar').addClass('sticky-nav');
            }
            else {
                $('nav.navbar').removeClass('sticky-nav');
            }
        });
    }());

    // --------------------------------------------------------------------
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    // --------------------------------------------------------------------

    (function () {
        $('a.page-scroll').on('click', function (e) {
            e.preventDefault();
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop : $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
        });
    }());

    // --------------------------------------------------------------------
    // Closes the Responsive Menu on Menu Item Click
    // --------------------------------------------------------------------

    (function () {
        $('.navbar-collapse ul li a').on('click', function () {
            if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
                $('.navbar-toggle:visible').trigger('click');
            }
        });
    }());

    // --------------------------------------------------------------------
    // Google Map
    // --------------------------------------------------------------------

    (function () {
        if ($('#googleMap').length > 0) {
            
            //set your google maps parameters
            var $auslatitude = 30.399104, //If you unable to find latitude and longitude of your address. Please visit http://www.latlong.net/convert-address-to-lat-long.html you can easily generate.
                $auslongitude = -97.724585,
                $map_zoom  = 17;
            /* ZOOM SETTING */
            var $indlatitude = 12.960750, //If you unable to find latitude and longitude of your address. Please visit http://www.latlong.net/convert-address-to-lat-long.html you can easily generate.
                $indlongitude = 77.648359;

            var $kualatitude = 3.153875,
                 $kualongitude = 101.714669;
            //google map custom marker icon
            var url = window.location.pathname;
            var mainurl = window.location.host;
            url = url.split('/');
            //google map custom marker icon
            var $marker_url = "http://" + mainurl + '/' + url[1] + '/img/google-map-marker.png';

            //we define here the style of the map
            var style = [{
                "stylers" : [{
                    "hue" : "#000"
                }, {
                    "saturation" : 100
                }, {
                    "gamma" : 1.15
                }, {
                    "lightness" : 5
                }]
            }];
            var $latitude, $longitude;
            if (region === "India") {
                $latitude = $indlatitude,
                    $longitude = $indlongitude
            }
            else if (region === "Malaysia") {
                $latitude = $kualatitude,
                    $longitude = $kualongitude
            }
            else {
                $latitude = $auslatitude,
                    $longitude = $auslongitude
            }
            //set google map options
            var map_options = {
                center: new google.maps.LatLng($latitude, $longitude),
                zoom              : $map_zoom,
                panControl        : false,
                zoomControl       : false,
                mapTypeControl    : false,
                streetViewControl : false,
                mapTypeId         : google.maps.MapTypeId.ROADMAP,
                scrollwheel       : false,
                styles: style,
                api: "AIzaSyDIDlHqXWfVfy - h5zAofHwdmWZfapccQD0"
            }
            //initialize the map
            var map = new google.maps.Map(document.getElementById('googleMap'), map_options);
            //add a custom marker to the map
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng($latitude, $longitude),
                map      : map,
                visible  : true,
                icon     : $marker_url
            });
        }
    }());

}); // JQuery end