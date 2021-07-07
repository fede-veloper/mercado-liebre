const express = require('express');
const path = require('path');
const rutasMain = require('./src/routes/main');

const app = express();

app.use(express.static(path.resolve(__dirname, './public')));

//app.use('/src/views', rutasMain);
//app.use('/', rutasMain);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src/views/index.html'));
});

app.get('/index.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src/views/index.html'));
}); 

app.get('/register.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src/views/register.html'));
});

app.get('/login.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src/views/login.html'));
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

// npm install --save-dev nodemon
// npx nodemon app.js