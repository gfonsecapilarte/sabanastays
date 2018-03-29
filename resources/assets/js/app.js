const loadGoogleMapsApi = require("load-google-maps-api");

import bootstrap from "bootstrap";
import Modernizr from "modernizr";
import "./owl.carousel.min.js";
import "./jssor.slider.mini.js";
import "./selectFx.js";
import "bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js";
import "./starrr.min.js";
import "./nivo-lightbox.min.js";
import "./jquery.shuffle.min.js";
import "./jquery.parallax-1.1.3.js";

/*
 * Default Scripts of the themplate
 */
import "./script.js";

/*
 * Plugin to load Google maps
 */
loadGoogleMapsApi({key: "AIzaSyBTvRrf5kiEA8BTtPwhR9PDb5zeVNPPIyQ"}).then(function (googleMaps) {
    if($("#mg-map").length > 0){
        var map = new googleMaps.Map(document.querySelector("#mg-map"), {
            center: {
                lat: saLatitude,
                lng: saLongitude
            },
            zoom: 12,
            zoomControl: false
        });

        var marker = new googleMaps.Marker({
            position: {lat: saLatitude, lng: saLongitude},
            map: map,
            title: "Lorem ipsum"
        });
    }
}).catch(function (error) {
    console.error(error)
})

/*
 * Modules to work with aptos
 */
import "./aptos/search.js";

/*
 * Modules to work with users
 */
import "./users/login.js";
