var express = require('express'),
    app     = express(),
    PORT    = process.env.PORT || 3000

app.use(express.static(__dirname))

app.listen(PORT)

console.log('Server now listening at http://localhost:' + PORT)