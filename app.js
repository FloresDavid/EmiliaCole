const express = require('express');
const path = require('path')
const app = express();
const routes = require('./routes/mainRoutes');
const PORT = 3030

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));