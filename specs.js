const emailvalidationspecs = require("./specs/emailvalidation.spec.js");
for(const prop in emailvalidationspecs){
    const func = emailvalidationspecs[prop];
    func();
};
