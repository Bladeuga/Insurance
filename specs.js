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
const idNumberValidationSpecs = require("./specs/idnumbervalidation.spec.js");
for(const prop in idNumberValidationSpecs){
    const func = idNumberValidationSpecs[prop];
    func();
};
const landPhoneNumberValidationSpecs = require("./specs/landphonenumbervalidation.spec.js");
for(const prop in landPhoneNumberValidationSpecs){
    const func = landPhoneNumberValidationSpecs[prop];
    func();
};
const cellphoneNumberValidationSpecs = require("./specs/cellphonenumbervalidation.spec.js");
for(const prop in cellphoneNumberValidationSpecs){
    const func = cellphoneNumberValidationSpecs[prop];
    func();
};
const phoneNumberValidationSpecs = require("./specs/phonenumbervalidation.spec.js");
for(const prop in phoneNumberValidationSpecs){
    const func = phoneNumberValidationSpecs[prop];
    func();
};

