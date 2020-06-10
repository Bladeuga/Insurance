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
const fullNameSpecs = require("./specs/fullname.spec.js");
for(const prop in fullNameSpecs){
    const func = fullNameSpecs[prop];
    func();
};

