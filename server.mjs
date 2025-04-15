// Imports
import express from 'express';
import fs from 'fs';
import bikeRoutes from './routes/bikeRoutes.mjs';

// SetUPs (DB or intializing middleware/express)
const app = express();
const PORT = 3000 || 3001;

// Middleware


// View Engine
app.engine('template', (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);

    let render;

    switch (options.page) {
      case 'index':
        render = content.toString().replaceAll('#title#', options.title);
        break;
      case 'form':
        render = content.toString();
        break;
      case 'image':
        render = content.toString();
        break;
    }

    return callback(null, render);
  });
});

app.set('views', './views');
app.set('view engine', 'template');

// Routes
app.use('/bike', bikeRoutes);

// Listen
app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});