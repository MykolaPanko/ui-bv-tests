    describe('cloud seo key page testing', () => {
        const site = ["https://cloudseokey.flynn-prod-eu-west-1.nexus.bazaarvoice.com/","https://cloudseokey.flynn-prod-us-east-1.nexus.bazaarvoice.com/"];
        for (let i =0; i < site.length; i++)
        {
            it('tool should generate a key', () => {
                console.log("testing site", site[i]);
                browser.url(site[i]);
                const clientNameField = $('#clientName');
                clientNameField.waitForDisplayed(1000);
                clientNameField.click();
                clientNameField.setValue('nike');
                const createButton = $('#submit');
                createButton.click();
                const key = $('.row').getText();
                console.log("generated key = " + key);
                expect(key).to.match(/nike-([\d\w]){32}/);
            });
            it('check XSS vulnerability', () => {
                browser.url(site[i]);
                console.log("testing site", site[i]);
                const clientNameField = $('#clientName');
                clientNameField.waitForDisplayed();
                clientNameField.click();
                clientNameField.clear;
                clientNameField.setValue('<script>alert("alert message!!!")</script>');
                const createButton = $('#submit');
                createButton.click();
                const key2 = $('.row').getText().toString();
                if ($('.remodal-is-opened')==false) {
                    console.log("modal appeared");
                }
                else console.log("modal not appeared");
                console.log("generated key2 = " + key2);
                expect(key2).to.match(/[.-^()%!\d\w]{56}-([\d\w]){32}/);
            });
        }
    });
