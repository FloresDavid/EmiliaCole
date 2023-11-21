const path = require('path');

const controller = {
    home : (req,res) => res.sendFile(path.join(__dirname, '..' , 'views', 'home.html')),
    about : (req,res) => res.sendFile(path.join(__dirname, '..', 'views', 'about.html')),
    contact : (req,res) => res.sendFile(path.join(__dirname, '..', 'views', 'contact.html')),
    music : (req,res) => res.sendFile(path.join(__dirname, '..', 'views', 'music.html')),
}


module.exports = controller;