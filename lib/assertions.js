module.exports = {
    AssertPassingSpec: (subjectFunction) => {
        let passed = false;
        let errors;
        try {
            passed = subjectFunction();
        } catch (err) {
            errors = err;
            passed = false;
        }
        if (!passed || passed === undefined){
            const message = `TEST FAILED: ${errors}`;
            throw new Error(message);
        }
    },
    AssertFailingSpec: (subjectFunction) => {
        let failed = true;
        let errors;
        try {
            failed = subjectFunction();
        } catch (err) {
            errors = err;
            failed = true;
        }
        if (failed || failed === undefined){
            const message = `TEST FAILED: ${errors}`;
            throw new Error(message);
        }
    }
}