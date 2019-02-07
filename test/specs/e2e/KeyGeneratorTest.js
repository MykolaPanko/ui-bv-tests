const Wrappers = require ('../../../helper/Wrappers.js');
const {LOCATORS_CLOUD_SEO_KEY} = require('../../../helper/testdata/Locators.js');
const {VALUES_KEY_GENERATOR} = require('../../../helper/testdata/Data.js');


describe('cloud seo key page testing', () => {
    const site = ["https://cloudseokey.flynn-prod-eu-west-1.nexus.bazaarvoice.com/", "https://cloudseokey.flynn-prod-us-east-1.nexus.bazaarvoice.com/"];
    const wrrapers = new Wrappers();

    for (let i = 0; i < site.length; i++) {
        it('tool should generate a key', () => {
            console.log("testing site", site[i]);
            wrrapers.openUrl(site[i]);
            wrrapers.findAndSetValue(LOCATORS_CLOUD_SEO_KEY.CLIENT_NAME_FIELD,'nike',10000)
            wrrapers.findAndClick(LOCATORS_CLOUD_SEO_KEY.CREATE_BUTTON);
            wrrapers.findAndGetText(LOCATORS_CLOUD_SEO_KEY.KEY_ROW);
            console.log("generated key = " + wrrapers.findAndGetText(LOCATORS_CLOUD_SEO_KEY.KEY_ROW));
            expect(wrrapers.findAndGetText(LOCATORS_CLOUD_SEO_KEY.KEY_ROW)).to.match(/nike-([\d\w]){32}/);
        });
        it('check XSS vulnerability', () => {
            console.log("testing site", site[i]);
            wrrapers.openUrl(site[i]);
            wrrapers.findAndSetValue(LOCATORS_CLOUD_SEO_KEY.CLIENT_NAME_FIELD, VALUES_KEY_GENERATOR.INVALID_KEY, 10000);
            wrrapers.findAndClick(LOCATORS_CLOUD_SEO_KEY.CREATE_BUTTON);
            console.log(wrrapers.findAndGetText(LOCATORS_CLOUD_SEO_KEY.KEY_ROW,100));
            //     const key2 = $('.row').getText().toString();
                 if ($('.remodal-is-opened')==false) {
                     console.log("modal appeared");
                 }
                 else console.log("modal not appeared");
            console.log("Generated key: " + wrrapers.findAndGetText(LOCATORS_CLOUD_SEO_KEY.KEY_ROW,100));
            expect(wrrapers.findAndGetText(LOCATORS_CLOUD_SEO_KEY.KEY_ROW,100)).to.match(/[.-^()%!\d\w]{56}-([\d\w]){32}/);
             });
    }
});

