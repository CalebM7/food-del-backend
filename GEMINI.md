## Gemini-Generated Project Context

This document provides a quick overview of the project to help Gemini understand its structure and conventions.

### Project Type

This appears to be a Node.js backend application using the Express framework.

### Key Technologies

- **Framework:** Express.js
- **Database:** MongoDB (likely, given the `mongoose` dependency)
- **Authentication:** JWT (jsonwebtoken)
- **File Uploads:** Multer
- **Payments:** Stripe
- **Environment Variables:** `dotenv` is used for managing environment variables. The main configuration is likely in a `.env` file.

### Directory Structure

- `config/`: Likely contains database connection and other configuration files.
- `controllers/`: Contains the application logic for handling requests.
- `middleware/`: Contains middleware functions for Express.
- `models/`: Contains Mongoose models for interacting with the database.
- `routes/`: Defines the API routes.
- `uploads/`: Directory for file uploads.
- `server.js`: The main entry point for the application.

### Running the Application

The `package.json` file has a `server` script that uses `nodemon` to run the application:

```bash
npm run server
```

### Dependencies

The project uses the following key dependencies:

- `express`: Web framework
- `mongoose`: MongoDB object modeling
- `jsonwebtoken`: For handling JSON Web Tokens
- `bcrypt`: For password hashing
- `multer`: For handling file uploads
- `stripe`: For payment processing
- `cors`: For handling Cross-Origin Resource Sharing
- `dotenv`: For loading environment variables
- `validator`: For data validation

This information will help me provide more relevant and accurate assistance.
