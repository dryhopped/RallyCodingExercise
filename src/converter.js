/**
 * Converts a number to its string representation.
 */
var Converter = (function() {

    var groups = [
        '', 'thousand', 'million', 'billion', 'trillion',
        'quadrillion', 'quintillion', 'sextillion', 'septillion'
    ]

    var decades = [
        '', 'ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy',
        'eighty', 'ninety'
    ]

    var underTwenty = [
        '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
        'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
        'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ]

    /**
     * Validates the input.
     * 
     * @param  {Number|String}  number The input to validate
     * @return {String|Boolean}
     */
    var validate = function(number) {

        if (!isNaN(number))
            return validateSize(number)

        return 'Failed to get string representation of number. Please input a number!'

    }

    /**
     * Validates that the number is within this applications convertable range.
     * 
     * @param  {Number|String}  number The number being converted.
     * @return {String|Boolean}
     */
    var validateSize = function(number) {

        var absInput = Math.abs(number),
            maxSize  = Math.pow(10, 27)

        if (absInput >= maxSize) {
            return 'Failed to get string representation of number. Range must be within negative and positive trillions (10^27).'
        }

        return false

    }

    /**
     * Converts the number to its string representation.
     * 
     * @param  {Number|String} number The number to be converted
     * @return {String}
     */
    var numberToWords = function(number) {

        if (number == '')
            return ''

        if (number == 0)
            return 'Zero dollars'

        var output = ''

        if (number < 0) {
            output += 'Negative'
            number = number.substr(1)
        }

        // Split cents and dollars
        number = number.split('.')
        var dollars = number[0],
            cents   = number[1]

        number = dollars

        // Prepend with 0's so we can split it into 3 digit nums easily.
        if (number.length % 3 === 1) {
            number = '00' + number
        } else if (number.length % 3 === 2) {
            number = '0' + number
        }

        // Convert the number to a string
        var sections = (number.length / 3) - 1
        while (number.length > 0) {

            var section = number.substr(0, 3)
            number = number.substr(3)

            if (section != '000') {

                output += underTwenty[section.charAt(0)] + ' '

                if (section.charAt(0) > 0)
                    output += 'hundred '

                if (section.substr(1) > 19) {
                    output += decades[section.charAt(1)] + ' ' +
                        underTwenty[section.charAt(2)] + ' '
                } else if (section.substr(1) < 10) {
                    output += underTwenty[section.charAt(2)] + ' '
                } else {
                    output += underTwenty[section.substr(1)] + ' '
                }

                output += groups[sections] + ' '

            }

            sections--

        }

        output = output.trim()

        if (cents) {
            cents = cents.substr(0, 2)
            output += ' and ' + cents + '/100'
        }

        if (output == 'one') {
            output += ' dollar'
        } else {
            output += ' dollars'
        }

        return output.charAt(0).toUpperCase() + output.slice(1)

    }

    /**
     * Binds the element to watch and update.
     * 
     * @param  {Element} inputEl  The CSS Selector to watch for changes
     * @param  {Element} outputEl The CSS Selector to display converted number.
     * @return {void}
     */
    var bind = function(inputEl, outputEl) {

        // Setup the input and output elements to work with.
        var input = inputEl || null
        var output = outputEl || null

        // Bind the event handler to watch for changes to the input
        input.addEventListener('keyup', function(e) {
            output.innerHTML = convert(input.value)
        })

        // Return this so we can chain method calls
        return this

    }

    /**
     * Converts a number to its string representation.
     *
     * @param  {Number|String} number The number to convert.
     * @return {String}
     */
    var convert = function(number) {

        var error
        if (error = validate(number))
            return error

        return numberToWords(number)

    }

    /**
     * The Converter Object.
     *
     * @return {Object}
     */
    return {

        bind: bind,
        convert: convert

    }

})()

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = Converter;
else
    window.Converter = Converter;