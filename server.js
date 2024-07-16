const { text } = require('body-parser');
const express = require('express');
const path = require('path');
const { title } = require('process');

const app = express();
const PORT = 3000;
const PUBLIC = path.join(__dirname, 'public');

// Middleware para parsear el cuerpo de las solicitudes POST
app.use(express.urlencoded({ extended: true }));
app.use(express.static(PUBLIC));

app.get('/', (req, res) => {
    console.log('Loading home🗒️...');
    res.sendFile(path.join(PUBLIC, 'home.html'));
});

app.get('/edit', (req, res) => {
    console.log('Creating a new note...');
    res.sendFile(path.join(PUBLIC, 'edit.html'));
});

app.post('/submit_note', (req, res) => {
    const { 'note-title': noteTitle, 'note-text': noteText, 'note-date': noteDate } = req.body;

    console.log(`Nota guardada🗒️:
    Título: ${noteTitle}
    Texto: ${noteText}
    Fecha: ${noteDate}`);

    res.sendFile(path.join(PUBLIC, 'note.html'));
});

app.listen(PORT, () => {
    console.info(`Server running at port ${PORT} 🫧 `);
});

