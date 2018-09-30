var singleJson = require('./multi-json');
var multiJson = require('./single-json');

this.jsonTest = function (curUrl) {
    var data;
    switch (curUrl[3]) {
        case 'single-json':
            data = singleJson.testData();
            break;
        case 'multi-json':
            data = multiJson.testData();
            break;
        default:
        /*pass*/
    }
    return data;
};

module.exports = this;