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
        wrappers.checkForElementPresent(LOCATORS_FIT.SUGGESTION_PUMAEU);
        wrappers.findAndClick(LOCATORS_FIT.SUGGESTION_PUMAEU);
        wrappers.findAndClick(LOCATORS_FIT.ADD_ADDITIONAL_CLIENT_BUTTON);
        wrappers.findAndSetValue(LOCATORS_FIT.CLIENT_2_FIELD,'pumade',1000)
        wrappers.findAndClick(LOCATORS_FIT.SUGGESTION_PUMADE,10000);
        wrappers.findAndClick(LOCATORS_FIT.RUN_FIT_BUTTON);
        wrappers.checkForElementPresent(LOCATORS_FIT.CHECK_MATCHES_SECTION,10000);
        wrappers.myExpectToBeTrue(LOCATORS_FIT.RESULT_SECTION);
    });
});