const Wrappers = require ('../../../helper/Wrappers.js');
const {LOCATORS_DCSEE} = require('../../../helper/testdata/Locators.js');
const {VALUES_DCSEE} = require('../../../helper/testdata/Data.js');


describe('dcsee page testing,', () => {
    const wrappers = new Wrappers();
    const appUrl = "https://dcsee.flynn-prod-us-east-1.nexus.bazaarvoice.com/";

    it('run test for valid url', () => {
        console.log("testing site", appUrl);
        wrappers.openUrl(appUrl);
        wrappers.findAndSetValue(LOCATORS_DCSEE.PRODUCT_PAGE_URL, VALUES_DCSEE.VALID_URL,20000);
        wrappers.findAndClick(LOCATORS_DCSEE.RUN_TEST_BUTTON,2000);
        wrappers.checkForElementPresent (LOCATORS_DCSEE.RESULT_SECTION, 20000);
        wrappers.myExpectToBeTrue(LOCATORS_DCSEE.RESULT_SECTION);
        wrappers.myExpectToBeTrue(LOCATORS_DCSEE.BV_LOADER_SECTION);
        wrappers.myExpectToBeTrue(LOCATORS_DCSEE.CLIENT_CONFIG_SECTION);
        wrappers.myExpectToBeTrue(LOCATORS_DCSEE.JS_INSPECTION);
        wrappers.myExpectToBeTrue(LOCATORS_DCSEE.CATALOG_API);
        });

    it('run test for invalid url', () => {
        console.log("testing site", appUrl);
        wrappers.openUrl(appUrl);
        wrappers.findAndSetValue(LOCATORS_DCSEE.PRODUCT_PAGE_URL, VALUES_DCSEE.INVALID_URL,20000);
        wrappers.findAndClick(LOCATORS_DCSEE.RUN_TEST_BUTTON,2000);
        wrappers.checkForElementPresent(LOCATORS_DCSEE.MESSAGE_BODY,20000);
        console.log("Error Message: " + wrappers.findAndGetText(LOCATORS_DCSEE.MESSAGE_BODY,1));
        expect($(LOCATORS_DCSEE.MESSAGE_BODY).getText()).to.equal(VALUES_DCSEE.ERROR_MESSAGE_TEXT);
    });
});
