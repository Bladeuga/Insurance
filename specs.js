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
const phoneNumberValidationSpecs = require("./specs/phonenumbervalidation.spec.js");
for(const prop in phoneNumberValidationSpecs){
    const func = phoneNumberValidationSpecs[prop];
    func();
};
