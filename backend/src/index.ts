import express from 'express';
import cors from 'cors';

const app = express();
const port = 8080; // Or your preferred port

app.use(cors());
app.use(express.json());

// Your API routes here (e.g., using tsoa)

app.listen(port, () => {
  console.log(`Backend server listening on port ${port}`);
});