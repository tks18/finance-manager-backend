// Initialization
import path from 'path';
import dotenv from 'dotenv';

const { NODE_ENV } = process.env;

// Load ENV Variables to the Process
dotenv.config({
  path:
    NODE_ENV === 'production'
      ? path.resolve(__dirname, '.env')
      : path.resolve(__dirname, '..', '.env'),
});

// Import Server
import { ExpressServer } from '@plugins';

// Create Server and Start the Server
const PORT = process.env.PORT || 3000;

const server = new ExpressServer(PORT);

server.start();
