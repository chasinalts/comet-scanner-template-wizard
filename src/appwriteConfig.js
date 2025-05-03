import { Client, Account } from 'appwrite';

// Appwrite configuration
export const API_ENDPOINT = 'https://cloud.appwrite.io/v1';
export const PROJECT_ID = 'YOUR_PROJECT_ID'; // Replace with your Appwrite project ID

// Initialize the Appwrite client
const client = new Client()
    .setEndpoint(API_ENDPOINT)
    .setProject(PROJECT_ID);

// Initialize the Account service
export const account = new Account(client);

export default client;
