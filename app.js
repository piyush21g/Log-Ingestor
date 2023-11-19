// app.js (Client-side)

document.addEventListener('DOMContentLoaded', function () {
  // Add event listeners to buttons
  document.getElementById('errorLogsButton').addEventListener('click', fetchErrorLogs);
  document.getElementById('searchLogsButton').addEventListener('click', fetchLogsBySearchTerm);
  document.getElementById('resourceIdLogsButton').addEventListener('click', fetchLogsByResourceId);
  document.getElementById('timestampLogsButton').addEventListener('click', fetchLogsByTimestamp);
});

function fetchErrorLogs() {
  // Fetch logs with level 'error'
  fetchLogs({ level: 'error' });
}

function fetchLogsBySearchTerm() {
  // Get the search term from the input field
  const searchTerm = document.getElementById('searchTerm').value;

  // Fetch logs with the specified search term
  if (searchTerm) {
    fetchLogs({ message: searchTerm });
  }
}

function fetchLogsByResourceId() {
  // Get the resource ID from the input field
  const resourceId = document.getElementById('resourceId').value;

  // Fetch logs with the specified resource ID
  if (resourceId) {
    fetchLogs({ resourceId });
  }
}

function fetchLogsByTimestamp() {
  // Get the start and end dates from the input fields
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;

  // Fetch logs between the specified timestamp range
  if (startDate && endDate) {
    fetchLogs({ startDate, endDate });
  }
}

function fetchLogs(query) {
  const url = `http://localhost:3000/logs${getQueryString(query || {})}`;
  console.log('Fetching logs from:', url);
  fetch(url)
    .then(response => response.json())
    .then(logs => displayLogs(logs))
    .catch(error => console.error('Error fetching logs:', error));
}

function getQueryString(params) {
  return '?' + Object.entries(params).map(([key, value]) => `${key}=${value}`).join('&');
}

function displayLogs(logs) {
  const logsList = document.getElementById('logs-list');

  // Clear existing logs
  logsList.innerHTML = '';

  if (logs.length === 0) {
    console.log('No logs found.');
    return;
  }

  logs.forEach(log => {
    const logItem = document.createElement('li');
    logItem.className = 'log-item';
    logItem.innerHTML = `
      <strong>Level:</strong> ${log.level}<br>
      <strong>Message:</strong> ${log.message}<br>
      <strong>Resource ID:</strong> ${log.resourceId}<br>
      <strong>Timestamp:</strong> ${log.timestamp}<br>
      <strong>Trace ID:</strong> ${log.traceId}<br>
      <strong>Span ID:</strong> ${log.spanId}<br>
      <strong>Commit:</strong> ${log.commit}<br>
      <strong>Parent Resource ID:</strong> ${log.metadata?.parentResourceId || 'N/A'}<br>
    `;
    logsList.appendChild(logItem);
  });

  console.log('Search Result:', logs);
}
