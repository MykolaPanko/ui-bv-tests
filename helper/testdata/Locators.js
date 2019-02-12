

const LOCATORS_DCSEE = {
    RUN_TEST_BUTTON:'//button[@type=\'submit\']',
    HIDDEN_RUN_TEST_BUTTON:'//div[@class=\'buttonSubmitSpinner buttonSubmitHidden\']',
    PRODUCT_PAGE_URL: '//input[@placeholder=\'Product Page URL\']',
    RESULT_SECTION:'//*[@class=\'Block mt-1rem mb-1rem p-1rem_1p5rem_3rem m-0 bc-white Content\']',
    BV_LOADER_SECTION:'//*[contains(text(),\'BV Loader\')]',
    CLIENT_CONFIG_SECTION:'//*[contains(text(),\'Client Configs\')]',
    JS_INSPECTION:'//*[contains(text(),\'Product Page JavaScript Inspection\')]',
    CATALOG_API:'//*[contains(text(),\'Catalog API\')]',
    MESSAGE_BODY: 'div.MessageBody'
};

const LOCATORS_CLOUD_SEO_KEY = {
    CLIENT_NAME_FIELD:'#clientName',
    CREATE_BUTTON:'#submit',
    KEY_ROW:'.row'
};

const LOCATORS_FIT = {
    MASTER_CLIENT_FIELD:'#client_1',
    CLIENT_1_FIELD:'#client_2',
    CLIENT_2_FIELD:'#client_3',
    SUGGESTION_PUMAEU:'//a[@href=\'#\']//strong[contains(text(),\'pumaeu\')]',
    SUGGESTION_PUMADE:'//a[@href=\'#\']//strong[contains(text(),\'pumade\')]',
    ADD_ADDITIONAL_CLIENT_BUTTON:'//button[@id=\'add_client_elem\']',
    RUN_FIT_BUTTON:'#submit',
    CHECK_MATCHES_SECTION: '//p[contains(text(),\'Check matches for\')]',
    RESULT_SECTION: '//pre[@class=\'c_results\']'
}

const LOCATORS_DCG = {
    CLICK_TO_GENERATE_FIELD: '//input[@placeholder=\'Click to generate...\']',
    UPDATE_BUTTON: '//button[@class=\'code-receiver\']'
}


module.exports = {LOCATORS_DCSEE, LOCATORS_CLOUD_SEO_KEY, LOCATORS_FIT, LOCATORS_DCG};
