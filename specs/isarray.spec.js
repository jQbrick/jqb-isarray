
var isArray = require('../index');

describe('jqb-isarray', function() {
    
    it('should identify an array', function() {
        expect(
            isArray([])
        ).to.be.true;
    });
    
    it('should identify an array instance', function() {
        expect(
            isArray(new Array())
        ).to.be.true;
    });
    
    it('should reject an object', function() {
        expect(
            isArray({})
        ).to.be.false;
    });
    
    it('should reject a string', function() {
        expect(
            isArray('foo')
        ).to.be.false;
    });
    
    it('should reject an empty string', function() {
        expect(
            isArray('')
        ).to.be.false;
    });
    
    it('should reject a number', function() {
        expect(
            isArray(1)
        ).to.be.false;
    });
    
    it('should reject zero value', function() {
        expect(
            isArray(0)
        ).to.be.false;
    });
    
    it('should reject a null value', function() {
        expect(
            isArray(null)
        ).to.be.false;
    });
    
    it('should reject an explicit undefined value', function() {
        expect(
            isArray(undefined)
        ).to.be.false;
    });
    
    it('should reject an undefined value', function() {
        expect(
            isArray()
        ).to.be.false;
    });
    
    it('should reject a boolean true value', function() {
        expect(
            isArray(true)
        ).to.be.false;
    });
    
    it('should reject a boolean false', function() {
        expect(
            isArray(false)
        ).to.be.false;
    });
    
    it('should reject a function', function() {
        expect(
            isArray(function(){})
        ).to.be.false;
    });
    
});