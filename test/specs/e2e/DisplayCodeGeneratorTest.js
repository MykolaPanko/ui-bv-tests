const Wrappers = require ('../../../helper/Wrappers.js');
const {LOCATORS_DCG} = require('../../../helper/testdata/Locators.js');
const {CONST_DCG} = require('../../../helper/testdata/Data.js');


describe('Display Code Generator page testing,', () => {
    const wrappers = new Wrappers();
    it('run test for generate code', () => {
        console.log("testing site", CONST_DCG.APP_URL);
        wrappers.openUrl(CONST_DCG.APP_URL);
        wrappers.findAndClick(LOCATORS_DCG.UPDATE_BUTTON, 10000);
        browser.pause(1000);
        console.log("key = "  + $('//input[@placeholder=\'Click to generate...\']').getValue());
        expect(wrappers.findAndGetValue(LOCATORS_DCG.CLICK_TO_GENERATE_FIELD,1000)).to.match(/[\d]{4}/);
    });
});