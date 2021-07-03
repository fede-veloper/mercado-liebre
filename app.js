const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.resolve(__dirname, './public');

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

app.get('/views/login.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

// npm install --save-dev nodemon
// npx nodemon app.js