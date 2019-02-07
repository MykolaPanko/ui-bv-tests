
class Wrappers {


    findAndClick(locator, ms) {
        $(locator).waitForDisplayed(ms);
        $(locator).click();
    };




    findAndSetValue(locator, value, ms) {
        $(locator).waitForDisplayed(ms);
        $(locator).click();
        $(locator).setValue(value);
    };



    checkForElementPresent(locator, ms) {
        try {
            $(locator).waitForDisplayed(ms);
            return true;
        } catch (e) {
            return false;
        }
    }



    myExpectToBeTrue(locator) {
        expect($(locator).isDisplayed()).to.be.true;
    };

    openUrl(appUrl) {
        try {
            browser.url(appUrl);
            return true;
        } catch (e) {
            return false;
        }


    }
    findAndGetText(locator, ms) {
        $(locator).waitForDisplayed(ms);
        const text = $(locator).getText();
        return text;
    }
}


module.exports = Wrappers;