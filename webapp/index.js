//sap.ui.define([
//"sap/m/Text"
//], function (Text) {
//	"use strict";
//
//    new Text({
//        text: "Tırsan"
//    }).placeAt("content");
//
//	//alert("TIRSAN is ready!");
//});

sap.ui.define([
    "sap/ui/core/mvc/XMLView"
], function (XMLView) {
    "use strict";

    XMLView.create({
        viewName: "sap.ui.demo.walkthrough.view.App"
    }).then(function (oWiew) {
        oWiew.placeAt("content");
    });

});

