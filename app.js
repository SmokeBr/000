var app = require('./config/server');

var rotaNoticias = require('./app/views/routes/noticias');
rotaNoticias(app);

var rotaHome = require('./app/views/routes/home');
rotaHome(app);

var rotaFormInclusaoNoticia = require('./app/views/routes/formulario_inclusao_noticia');
rotaFormInclusaoNoticia(app);

app.listen(3000, function() {
    console.log('Sevidor Rodando com Express não ROUDANDO !!! ');
});