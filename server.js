const path =require('path');
const express = require('express');
const app = new express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res)=> {
        res.sendFile(path.resolve(__dirname, 'index.html'))    
        }
   );

app.listen(port, () => console.log(`Serving at http://localhost:${port}`))