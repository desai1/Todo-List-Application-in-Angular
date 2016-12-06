(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('todoController', todoControllerFn);

    todoControllerFn.$inject = [];

    function todoControllerFn() {

        var Vm = this;

        Vm.List = [{
            Text: 'Cricket',
            done: 'false'
        }];
        Vm.add = function () {

            Vm.List.push({
                Text: Vm.input,
                done: false
            });
            Vm.input = "";
        };

        Vm.remove = function () {
            var oldList = Vm.List;
            Vm.List = [];
            angular.forEach(oldList, removeFn);

            function removeFn(b) {
                if (!b.done) {
                    Vm.List.push(b);
                }
            }
        };
    }
        })();


