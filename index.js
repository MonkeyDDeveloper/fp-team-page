const express = require('express');
const path = require('path');
const app = express();
const assets = path.join(__dirname, "assets");
const css = path.join(__dirname, "css");
const indexFile = path.join(__dirname, "index.html");
const port = process.env.PORT || 3000;

app.use('/public', express.static(assets))
app.use('/public', express.static(css))

app.get('/', (req, res) => {
    res.sendFile(indexFile)
})

app.listen(port, () => console.log(`Server running on port ${port}`))