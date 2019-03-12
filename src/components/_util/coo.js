(function () {
    let _coo = function() {
        if (!(this instanceof _coo)) return new _coo();
    };

    let class2type = {};

    'Boolean Number String Function Array Date RegExp Object Error Null Undefined'.split(' ').map((item) => {
        class2type["[object " + item + "]"] = item.toLowerCase();
    });


    _coo.type = function (obj) {
        return typeof obj === 'object' || typeof obj === 'function' ?
            class2type[Object.prototype.toString.call(obj)] || 'object' :
            typeof obj;
    };



    module.exports = _coo;
})();