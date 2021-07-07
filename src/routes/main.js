const express = require('Express');
const path = require('path');

const router = express.Router();
const publicPath = path.resolve(__dirname, './public');

router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/index.html'));
});

router.get('/index.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/index.html'));
}); 

router.get('/register.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/register.html'));
});

router.get('/login.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/login.html'));
});

module.exports = router;