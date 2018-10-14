const signIn = require('./sign-in');
const signInProcess = require('./sign-in-process');
const signInLast = require('./sign-in-last');
const signUp = require('./sign-up');

this.account = function (curUrl) {
    var data;
    switch (curUrl[3]) {
        case 'sign-in':
            data = signIn.testData();
            break;
        case 'sign-up':
            data = signUp.testData();
            break;
        case 'sign-in-process':
            data = signInProcess.testData();
            break;
        case 'sign-in-last':
            data = signInLast.testData();
            break;
        default:
        /*pass*/
    }
    return data;
};

module.exports = this;