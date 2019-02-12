const Wrappers = require ('../../../helper/Wrappers.js');
const {LOCATORS_DCSEE} = require('../../../helper/testdata/Locators.js');
const {CONST_DCSEE} = require('../../../helper/testdata/Data.js');


describe('dcsee page testing,', () => {
    const wrappers = new Wrappers();

    it('run test for valid url', () => {
        console.log("testing site", CONST_DCSEE.APP_URL);
        wrappers.openUrl(CONST_DCSEE.APP_URL);
        wrappers.findAndSetValue(LOCATORS_DCSEE.PRODUCT_PAGE_URL, CONST_DCSEE.VALID_URL,2000);
        console.log("click button = " + wrappers.checkForElementPresent(LOCATORS_DCSEE.RUN_TEST_BUTTON,2000));
        wrappers.findAndClick(LOCATORS_DCSEE.RUN_TEST_BUTTON);
        wrappers.findAndClick(LOCATORS_DCSEE.RUN_TEST_BUTTON,2000);
        wrappers.checkForElementPresent (LOCATORS_DCSEE.RESULT_SECTION, 20000);
        wrappers.myExpectToBeTrue(LOCATORS_DCSEE.RESULT_SECTION);
        wrappers.myExpectToBeTrue(LOCATORS_DCSEE.BV_LOADER_SECTION);
        wrappers.myExpectToBeTrue(LOCATORS_DCSEE.CLIENT_CONFIG_SECTION);
        wrappers.myExpectToBeTrue(LOCATORS_DCSEE.JS_INSPECTION);
        wrappers.myExpectToBeTrue(LOCATORS_DCSEE.CATALOG_API);
        });

    it('run test for not existed url', () => {
        console.log("testing site", CONST_DCSEE.APP_URL);
        wrappers.openUrl(CONST_DCSEE.APP_URL);
        wrappers.findAndSetValue(LOCATORS_DCSEE.PRODUCT_PAGE_URL, CONST_DCSEE.NOT_EXISTED_URL,20000);
        wrappers.findAndClick(LOCATORS_DCSEE.RUN_TEST_BUTTON,2000);
        wrappers.checkForElementPresent(LOCATORS_DCSEE.MESSAGE_BODY,20000);
        console.log("Error Message: " + wrappers.findAndGetText(LOCATORS_DCSEE.MESSAGE_BODY,1));
        expect($(LOCATORS_DCSEE.MESSAGE_BODY).getText()).to.equal(CONST_DCSEE.ERROR_MESSAGE_TEXT);
    });

    it('run test for invalid url', () => {
        console.log("testing site", CONST_DCSEE.APP_URL);
        wrappers.openUrl(CONST_DCSEE.APP_URL);
        wrappers.findAndSetValue(LOCATORS_DCSEE.PRODUCT_PAGE_URL, CONST_DCSEE.NOT_VALID_URL, 20000);
        expect($(LOCATORS_DCSEE.HIDDEN_RUN_TEST_BUTTON).isExisting());
    });

});
