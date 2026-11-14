const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Clyr API OK' }));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API sur le port ${port}`));