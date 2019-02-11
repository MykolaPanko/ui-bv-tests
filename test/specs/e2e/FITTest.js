const Wrappers = require ('../../../helper/Wrappers.js');
const {LOCATORS_FIT} = require('../../../helper/testdata/Locators.js');
const {CONST_FIT} = require('../../../helper/testdata/Data.js');

describe('FIT page testing,', () => {
    const wrappers = new Wrappers();
    it('run test for valid url', () => {
        console.log("testing site", CONST_FIT.APP_URL);
        wrappers.openUrl(CONST_FIT.APP_URL);
        wrappers.findAndSetValue(LOCATORS_FIT.MASTER_CLIENT_FIELD,'puma',10000);
        wrappers.findAndSetValue(LOCATORS_FIT.CLIENT_1_FIELD,'pumaeu',10000);
        wrappers.checkForElementPresent('//a[@href=\'#\']//strong[contains(text(),\'pumae\')]');
        wrappers.findAndClick('//a[@href=\'#\']//strong[contains(text(),\'pumae\')]',10000);
        wrappers.findAndClick('#submit');
        wrappers.checkForElementPresent($('//p[contains(text(),\'Check matches for\')]'),10000);
        wrappers.myExpectToBeTrue('//pre[@class=\'c_results\']');
    });
});