describe('dcsee page testing', () => {
    const site = "https://dcsee.flynn-prod-us-east-1.nexus.bazaarvoice.com/";
        it('run test for valid url', () => {
            console.log("testing site", site);
            browser.url(site);
            const productUrlField = $('//input[@placeholder=\'Product Page URL\']');
            productUrlField.waitForDisplayed(10000);
            productUrlField.click();
            productUrlField.setValue('https://www.andreashop.sk/philips-oneblade-qp-22055');
            const createButton = $('.buttonSubmitChild');
            createButton.click();
            const resultSection = $('//*[@class=\'Block mt-1rem mb-1rem p-1rem_1p5rem_3rem m-0 bc-white Content\']');
            if (resultSection.waitForDisplayed("test was running"))
            {
            console.log("test was running")
            }
            else console.log("error");
        });
    });