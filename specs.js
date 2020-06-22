const emailValidationSpecs = require("./specs/emailvalidation.spec.js");
for(const prop in emailValidationSpecs){
    const func = emailValidationSpecs[prop];
    func();
};
const fullNameValidationSpecs = require("./specs/fullnamevalidation.spec.js");
for(const prop in fullNameValidationSpecs){
    const func = fullNameValidationSpecs[prop];
    func();
};
const southAfricanIdNumberValidationSpecs = require("./specs/southafricanidnumbervalidation.spec.js");
for(const prop in southAfricanIdNumberValidationSpecs){
    const func = southAfricanIdNumberValidationSpecs[prop];
    func();
};
const southAfricanLandPhoneNumberValidationSpecs = require("./specs/southafricanlandphonenumbervalidation.spec.js");
for(const prop in southAfricanLandPhoneNumberValidationSpecs){
    const func = southAfricanLandPhoneNumberValidationSpecs[prop];
    func();
};
const cellphoneNumberValidationSpecs = require("./specs/southafricancellphonenumbervalidation.spec.js");
for(const prop in cellphoneNumberValidationSpecs){
    const func = cellphoneNumberValidationSpecs[prop];
    func();
};
const phoneNumberValidationSpecs = require("./specs/southafricanphonenumbervalidation.spec.js");
for(const prop in phoneNumberValidationSpecs){
    const func = phoneNumberValidationSpecs[prop];
    func();
};

