(function(){
    'use strict';

    angular
        .module('myApp',[])
        .run(moduleRun);

    moduleRun.$inject = [];

    function moduleRun (){

        console.log("App Started");
    }
}) ();
