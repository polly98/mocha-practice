describe("Mocha hooks", function() {

    before('Execute before all tests', function() {
        console.log('This function will be executed before ALL tests');
    });

    after('Execute before EACH test', function(){
        console.log("This function  is executed after ALL tests");

    });

    beforeEach("Executed before EACH test", function() {
        console.log("This function is executed before each test is executed");
    });

    afterEach("Executed after EACH test", function() {
        console.log("This function is executed after each test is executed");

    });

    it('Mocha hook test', function() {
        console.log("Mocha is the test frameowrk");

    })
    

})