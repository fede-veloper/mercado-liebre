const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.resolve(__dirname, './public');
const PORT = 3000;

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.get('/views/index.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.get('/views/register.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get('/views/singup.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/singup.html'));
});

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

// npm install --save-dev nodemon
// npx nodemon app.js