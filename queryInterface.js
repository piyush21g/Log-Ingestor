const readline = require('readline');

// Simple in-memory storage for logs (for simplicity)
let logs = [];

// CLI for querying logs
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function queryLogs() {
  console.log('\nAvailable queries:');
  console.log('1. Find all logs with the level set to "error".');
  console.log('2. Search for logs with a specific message.');
  console.log('3. Retrieve all logs related to a specific resourceId.');
  console.log('4. Filter logs within a specific date range. (Bonus)');
  console.log('5. Exit');

  rl.question('\nEnter the query number: ', (answer) => {
    switch (answer) {
      case '1':
        displayLogs(logs.filter(log => log.level === 'error'));
        break;
      case '2':
        rl.question('Enter the message to search: ', (message) => {
          displayLogs(logs.filter(log => log.message.includes(message)));
          queryLogs();
        });
        break;
      case '3':
        rl.question('Enter the resourceId: ', (resourceId) => {
          displayLogs(logs.filter(log => log.resourceId === resourceId));
          queryLogs();
        });
        break;
      case '4':
        // Implement date range filter (Bonus)
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log('Invalid option. Please enter a valid query number.');
        queryLogs();
        break;
    }
  });
}

function displayLogs(logsToDisplay) {
  console.log('\nMatching logs:');
  logsToDisplay.forEach((log, index) => {
    console.log(`${index + 1}. ${JSON.stringify(log)}`);
  });
}

// Sample logs (for testing)
logs.push({
  level: 'error',
  message: 'Failed to connect to DB',
  resourceId: 'server-1234',
  timestamp: '2023-09-15T08:00:00Z',
  traceId: 'abc-xyz-123',
  spanId: 'span-456',
  commit: '5e5342f',
  metadata: {
    parentResourceId: 'server-0987',
  },
});

// Log Entry 1
logs.push({
  level: 'error',
  message: 'Failed to connect to DB',
  resourceId: 'server-1234',
  timestamp: '2023-09-15T08:00:00Z',
  traceId: 'abc-xyz-123',
  spanId: 'span-456',
  commit: '5e5342f',
  metadata: {
    parentResourceId: 'server-0987',
  },
});

// Log Entry 2
logs.push({
  level: 'info',
  message: 'Request received successfully',
  resourceId: 'server-5678',
  timestamp: '2023-11-18T12:30:00Z',
  traceId: 'def-uvw-456',
  spanId: 'span-789',
  commit: 'a1b2c3d',
  metadata: {
    parentResourceId: 'server-5432',
    customField: 'some value',
  },
});

// Log Entry 3
logs.push({
  level: 'warning',
  message: 'High CPU usage detected',
  resourceId: 'server-9999',
  timestamp: '2023-10-20T15:45:00Z',
  traceId: 'ghi-pqr-789',
  spanId: 'span-101',
  commit: '3f4g5h6',
  metadata: {
    parentResourceId: 'server-1111',
    additionalInfo: 'Some additional information',
  },
});

// Log Entry 4
logs.push({
  level: 'debug',
  message: 'Processing data',
  resourceId: 'server-2222',
  timestamp: '2023-08-05T09:20:00Z',
  traceId: 'jkl-mno-987',
  spanId: 'span-202',
  commit: '9i8u7y6',
  metadata: {
    parentResourceId: 'server-3333',
  },
});

// Log Entry 5
logs.push({
  level: 'error',
  message: 'Invalid user input',
  resourceId: 'server-4444',
  timestamp: '2023-07-12T18:00:00Z',
  traceId: 'mno-pqr-555',
  spanId: 'span-303',
  commit: '2a1b3c',
  metadata: {
    parentResourceId: 'server-5555',
    userDetails: {
      userId: 'user123',
      username: 'john_doe',
    },
  },
});


// Start querying logs
queryLogs();
