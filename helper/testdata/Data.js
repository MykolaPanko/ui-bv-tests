const CONST_DCSEE = {
    APP_URL:'https://dcsee.flynn-prod-us-east-1.nexus.bazaarvoice.com',
    VALID_URL: 'https://www.andreashop.sk/philips-oneblade-qp-22055',
    NOT_EXISTED_URL:'https://www.andreashop.sk/philips-oneblade-qp-2205511',
    ERROR_MESSAGE_TEXT:"Unable to get BV Loader TypeError: Cannot destructure property `clientname` of \'undefined\' or \'null\'.",
    NOT_VALID_URL:'\'\''
};

const VALUES_KEY_GENERATOR = {
    INVALID_KEY: '<script>alert("alert message!!!")</script>'
};

const CONST_FIT = {
    APP_URL:'https://fit.flynn-prod-us-east-1.nexus.bazaarvoice.com/',
    MASTER_CLIENT:''
};

const CONST_DCG = {
    APP_URL:'https://display-code-generator.flynn-prod-us-east-1.nexus.bazaarvoice.com/'
}

module.exports = {CONST_DCSEE, VALUES_KEY_GENERATOR, CONST_FIT, CONST_DCG};