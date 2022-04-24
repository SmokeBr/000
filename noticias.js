var http = require('http');//biblioteca

var server = http.createServer( function (req, res) {

    var categoria = req.url;
    
    if (categoria == '/tecnologia') {
        res.end("<h1>Notícias de Tecnologia </h1>");

    } else if (categoria == '/moda'){
        res.end("<h1>Notícias de Moda </h1>");

    } else if (categoria == '/beleza') {
        res.end("<h1>Notícias de Beleza </h1>");

    } else {
        res.end("<h1>Portal de Notícias !!!</h1>");

    }

}).listen(3000);

console.log('ola');