var singleJson = require('./single-json');

this.jsonTest = function (curUrl) {
    var data;
    switch (curUrl[3]) {
        case 'single-json':
            data = singleJson.testData();
            break;
        default:
        /*pass*/
    }
    return data;
};

module.exports = this;