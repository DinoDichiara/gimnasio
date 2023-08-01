const express = require('express');
const routerApi = require('./routes')
const { checkApiKey } = require('./middlewares/auth.handler')

const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json())

app.get('/', (req, res) => {
    res.send('GIMNASIO')
});

app.get('/papasito', checkApiKey, (req, res) => {
    res.send('Hola bebe, ke mas pue')
});

routerApi(app)

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log('Empezando Wachoooo!!');
}); 
