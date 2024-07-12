const { text } = require('body-parser');
const express = require('express');
const path = require('path');
const { title } = require('process');

const app = express();
const PORT = 3000;
const PUBLIC = path.join(__dirname, 'public');


app.use(express.urlencoded({ extended: true }));
app.use(express.static(PUBLIC));

app.get('/', (req, res) => {
    console.log('Loading home...');
    res.sendFile(path.join(PUBLIC, 'home.html'));
});

app.get('/edit', (req, res)=>{
    console.log('Creating a new note.....');
    res.sendFile(path.join(PUBLIC, 'edit.html'));
});

app.listen(PORT, ()=>{
    console.info(`Server running at port ${PORT}`);
});

