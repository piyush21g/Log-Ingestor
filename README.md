# Log-Ingestor
Overview
This project implements a log ingestor system and a query interface for efficiently handling vast volumes of log data. The system allows logs to be ingested over HTTP on port 3000 and provides a user-friendly interface for querying logs based on various criteria.

How to Run the Project
1. Run the Log Ingestor:
   node logIngestor.js
2. Run the Query Interface:
   npm start
System Design
The system comprises two main components:

Log Ingestor:
Listens for log data on port 3000.
Stores ingested logs efficiently.
Uses Express.js for handling HTTP requests.

Query Interface:
Provides a user interface for querying logs.
Supports full-text search and specific field filters.
Implements advanced features like searching within date ranges and role-based access (bonus).

Features Implemented
Log Ingestor:
Ingests logs in the provided format over HTTP.
Ensures scalability and mitigates bottlenecks.
Runs on port 3000 by default.

Query Interface:
Offers a user-friendly interface (Web UI) for log queries.
Supports full-text search and filters based on various log fields.
Implements advanced features such as searching within date ranges.
Identified Issues
Search Functionality:

The search functionality may not be optimized for extremely large datasets. Consider implementing pagination or optimization strategies for better performance.
Error Handling:
Error handling in the log ingestor and query interface can be enhanced to provide more informative error messages and gracefully handle unexpected situations.
Security:

Security measures, such as input validation and authentication, are essential aspects that need further consideration for production use.
Conclusion:
This log ingestor and query interface project provides a foundation for efficiently managing and querying log data. To enhance the system for production use, consider addressing the identified issues and adding additional security features.

Note: I have also uploaded videos showing how the project runs. Refer it.
