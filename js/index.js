$(function(){

    //sp　背景　パララックス
    if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
        $(window).scroll(function() {
            var window_height = $(window).height();
            var current_scroll = $(this).scrollTop();
            //bg01の調整
            var bg01_height = window_height - current_scroll;
            $(".bg01").css("height", bg01_height + "px");
            //bg02の調整
            var bg02_position = $('.bg02 + .block.main').offset();
            $(".bg02").css("height", ((bg02_position.top - current_scroll)) + 1 + "px");
            //bg03の調整
            var bg03_position = $('.bg03 + .block.main').offset();
            $(".bg03").css("height", ((bg03_position.top - current_scroll)) + 1 + "px");
        })
    }
    //sp 縦横判定
    var isLandscape = function(){
        if (window.innerHeight > window.innerWidth) {
            $(".fixed.bg01, .fixed.bg02, .fixed.bg03").removeClass("landscape")
        }else{
            $(".fixed.bg01, .fixed.bg02, .fixed.bg03").addClass("landscape")
        }
    }
    $(window).resize(function(){
        isLandscape();
    });
    isLandscape();     
});


//Googlemap
var map;
function initMap() {
    if( $(window).width() > 768 ){
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 35.6923675, lng: 139.672058},
            zoom: 17,
            disableDefaultUI: true
        });
    }else{
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 35.6923675, lng: 139.672058},
            zoom: 16,
            disableDefaultUI: true
        });
    }
    // マーカー設定
    var markerImg = {
        url: '../img/marker.png',
        scaledSize: new google.maps.Size(34, 55)
    };
    var marker = new google.maps.Marker({
        position: {lat: 35.6918074, lng: 139.6728452},
        map: map,
        icon: markerImg
    });
        // 地図をグレースケールに
    var mapStyle = 
    [
    {
        "stylers": [
            { "saturation": -100 }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry",
        "stylers": [
        { "visibility": "simplified" },
        { "color": "#f9f9f9" }
        ]
    }, 

    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            { "visibility": "simplifed" }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
        { "visibility": "simplifed" }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [
        { "visibility": "simplifed" },
        { "color": "#80808d" }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "all",
        "stylers": [
        { "visibility": "simplifed" },
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
        { "visibility": "simplifed" },
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "all",
        "stylers": [
        { "visibility": "simplifed" },
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "all",
        "stylers": [
            { "visibility": "simplifed" }
        ]
    },
    ];
    var mapType = new google.maps.StyledMapType(mapStyle);
        map.mapTypes.set('GrayScaleMap', mapType);
        map.setMapTypeId('GrayScaleMap');
}
window.addEventListener('load', function () {
    initMap();
});