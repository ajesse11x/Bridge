﻿(function (globals) {
    "use strict";

    Bridge.define('Test.BridgeIssues.N064.Class64', {
        constructor: function () {
            this.$initialize();
        },
        constructor$1: function (related) {
            this.$initialize();
        },
        test: function () {
            var aux = new Test.BridgeIssues.N064.Class64.Aux1();
            new Test.BridgeIssues.N064.Class64.constructor$1(aux);
        }
    });
    
    Bridge.define('Test.BridgeIssues.N064.Class64.Aux1');
    
    
    
    Bridge.init();
})(this);
