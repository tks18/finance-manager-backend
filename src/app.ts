// Initialization
import dotenv from 'dotenv';

// Load ENV Variables to the Process
dotenv.config();

// Import Server
import { ExpressServer } from '@plugins';

// Create Server and Start the Server
const PORT = process.env.PORT || 3000;

const server = new ExpressServer(PORT);

server.start();
