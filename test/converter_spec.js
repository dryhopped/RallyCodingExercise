var expect = require('chai').expect

var Converter = require('../src/converter.js')

describe('Converter', function() {

    it('converts 0 to "Zero dollars"', function() {

        expect(Converter.convert('0')).to.equal('Zero dollars')

    })

    it('converts 5 to "Five dollars"', function() {

        expect(Converter.convert('5')).to.equal('Five dollars')

    })

    it('converts 10 to "Ten dollars"', function() {

        expect(Converter.convert('10')).to.equal('Ten dollars')

    })

    it('converts 19 to "Nineteen dollars"', function() {

        expect(Converter.convert('19')).to.equal('Nineteen dollars')

    })

    it('converts 23 to "Twenty three dollars"', function() {

        expect(Converter.convert('23')).to.equal('Twenty three dollars')

    })

    it('converts 109 to "One hundred nine dollars"', function() {

        expect(Converter.convert('109')).to.equal('One hundred nine dollars')

    })

    it('converts 1139 to "One thousand one hundred thirty nine dollars"', function() {

        expect(Converter.convert('1139')).to.equal('One thousand one hundred thirty nine dollars')

    })

    it('converts 1000139 to "One million one hundred thirty nine dollars"', function() {

        expect(Converter.convert('1000139')).to.equal('One million one hundred thirty nine dollars')

    })

    it('converts -1000139 to "Negative one million one hundred thirty nine dollars"', function() {

        expect(Converter.convert('-1000139')).to.equal('Negative one million one hundred thirty nine dollars')

    })

    it('converts 1139.34 to "One thousand one hundred thirty nine and 34/100 dollars"', function() {

        expect(Converter.convert('1139.34')).to.equal('One thousand one hundred thirty nine and 34/100 dollars')

    })

})