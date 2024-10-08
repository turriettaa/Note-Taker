const express = require('express');
const fs = require('fs');
const path = require('path');
const dbPath = path.join(__dirname, 'db', 'db.json');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



  // GET /api/notes - Read the dbPath file and return all saved notes as JSON
  app.get('/api/notes', (req, res) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error reading notes' });
      }
      res.json(JSON.parse(data));
    });
  });
 
  app.use(express.static('public'));

// GET /notes - Return the notes.html file
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});


  // GET * - Return the index.html file for all other routes
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
  
 
  // POST /api/notes - Receive a new note to save on the request body, add it to dbPath, and return the new note
  app.post('/api/notes', (req, res) => {
    const newNote = {
      title: req.body.title,
      text: req.body.text,
      id: uuidv4()
    };
  
    fs.readFile(dbPath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error reading notes' });
      }
  
      const notes = JSON.parse(data);
      notes.push(newNote);
  
      fs.writeFile(dbPath, JSON.stringify(notes), (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Error saving note' });
        }
        res.json(newNote);
      });
    });
  });

  // DELETE /api/notes/:id - Delete a note with the given id
app.delete('/api/notes/:id', (req, res) => {
    const noteId = req.params.id;
  
    fs.readFile(dbPath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error reading notes' });
      }
  
      let notes = JSON.parse(data);
      notes = notes.filter(note => note.id !== noteId);
  
      fs.writeFile(dbPath, JSON.stringify(notes), (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Error deleting note' });
        }
        res.json({ message: 'Note deleted successfully' });
      });
    });
  });
  
