// logIngestor.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Array to store logs
let logs = [];

app.post('/ingest', (req, res) => {
  const logData = req.body;
  logs.push(logData);
  console.log('Received log:', logData);
  res.status(200).send('Log ingested successfully');
});

app.get('/logs', (req, res) => {
  const { resourceId } = req.query;

  // If resourceId is provided, filter logs by resourceId
  if (resourceId) {
    const filteredLogs = logs.filter(log => log.resourceId === resourceId);
    res.json(filteredLogs);
  } else {
    // If no resourceId provided, return all logs
    res.json(logs);
  }
});

app.listen(port, () => {
  console.log(`Log Ingestor listening at http://localhost:${port}`);
});
