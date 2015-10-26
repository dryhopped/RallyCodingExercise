# Rally Coding Exercise 1

[![Build Status](https://travis-ci.org/dryhopped/RallyCodingExercise.png?branch=master)](https://travis-ci.org/dryhopped/RallyCodingExercise)

Write some code that will accept an amount and convert it to the appropriate
string representation.
                    
Example: 
Convert 2523.04 to "Two thousand five hundred twenty-three and 04/100 dollars"

## Setup

To run the application, you will need to have nodejs (v0.10.0 or greater)
installed. This will allow you to run the application as well as the unit tests.
The application code is designed to allow usage from either the command line or
within the web browser.

To setup run the following in the command line from the project's root directory:

    npm install

## Testing

To run the unit tests, you can run the following from the command line:

    npm run test

## Basic usage

This Javascript library is designed to be simple to use and work with. The public
API is very straight-forward and simple. There are 2 functions available to work
with:

convert - Converts a number to its string representation
bind - Binds an input element and an output element for using within a webpage

### Examples of usage

**Converting numbers directly:**

    var Converter = require('./src/converter')

    console.log(Converter.convert('215.34')) // Outputs: Two hundred fifteen and 34/100 dollars
    console.log(Converter.convert('-215.34')) // Outputs: Negative two hundred fifteen and 34/100 dollars

**Binding to webpage elements:**

    <input class="text" id="number" name="number" type="text" placeholder="Enter a number">
    <span id="string-number"></span>
    <script src="/src/converter.js"></script>
    <script>
        var converter = new Converter.bind(
            document.querySelector('#number'),
            document.querySelector('#string-number')
        )
    </script>

## Running the application

To run the application, at the command line type:

    npm run start

Or:
    
    node server.js