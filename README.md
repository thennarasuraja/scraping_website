PROJECT SETUP
note check node -v >20 && install pnpm && vs
clone the projects form the github
open in vs
and open the terminal 
RUN pnpm i

RUN THE PROJECT

front end - pnpm dev
back end - pnpm server:dev







Introduction
Project Name: Nuxt 3 Web Scraping Tool

Description: This project allows users to scrape web pages by providing URLs. It displays scraped data, and users can create, update, or delete URLs. The backend processes are managed using Puppeteer, and data is stored in a MySQL database.

Status: Under Development

Demo: Link to Demo (if available)

Features
Scrape Web Pages: Users can input a URL to scrape its contents.
View Scraped Data: Display previously scraped data with details.
Manage URLs: Create, update, or delete URLs and their associated data.
MySQL Integration: Store and manage scraped data in a MySQL database.
Architecture
Frontend
Framework: Nuxt 3
Pages:
Start Page: Contains a title and a start button to initiate the scraping process.
Web Scraping Page: Allows for the creation of new URLs, displays scraped data, and provides options to update or delete URLs.
Backend
Controller: webscrapController
Handles the scraping logic and database queries.
Route: webscrapRoute
Manages API endpoints for creating, updating, and deleting URLs.
Scraping
Tool: Puppeteer
Used for headless browser automation and scraping.
Database
Database: MySQL
Stores URL data and scraped content.
Requirements
Node.js: 20.x
Nuxt 3: >= 3.x
MySQL: >= 5.7
Puppeteer: >= 13.x
Installation
Clone the Repository
bash
Copy code
git clone https://github.com/your-username/nuxt3-webscraping-tool.git
cd nuxt3-webscraping-tool
Install Dependencies
bash
Copy code
npm install
# or
yarn install

can you change your environment setup on configure/index.js

Database Setup
Create the necessary tables in your MySQL database. Example schema:
sql
Copy code
ref to configure/web_scrap.sql
Usage
Starting the Application
frontend:
   pnpm dev

Backend:
    pnpm server:dev

Accessing the Application
Navigate to http://localhost:3000 in your web browser.
Example
Start Page: Click the "Start" button to navigate to the scraping page.
Web Scraping Page: Click "Create" to add a new URL for scraping. View, update, or delete URLs and their data in the list below.
Configuration
Nuxt Configuration
Modify nuxt.config.js to change settings or add modules as needed.
Puppeteer Configuration
Adjust Puppeteer settings in controller/scraperControler.js inside scrap() if necessary (e.g., to run in a headless or headed mode).
API Reference
Endpoints
Base URL: localhost:5000/scraper
GET /get
Response
{
    success: true,
data:[ 
{
  "	scrapedId": 1,
  "url": "http://example.com",
  "scrapeditem": {},
  "status":"creat",
  "created_at": "2024-06-28T00:00:00.000Z",
  "updated_at": "2024-06-28T00:00:00.000Z"
},
]
}

POST /submit
Description: Add a new URL to scrape.
Request Body:
json

{
  "scrapedId": "http://example.com"
}
Response:
{
    success: true,

}
PUT /api/webscrap/
Description: Update an existing URL and its data.
Request Body:
json

{
  "scrapedId": 1
}
Response
{
    success: true,

}


DELETE /api/webscrap/
Description: Delete a URL and its data.
Response:
json

{
    "scrapedId": 1

}
Error Handling
Common Errors
Database Connection Error: Ensure MySQL credentials are correct in .env.
Scraping Error: Check the URL format and Puppeteer configuration.

 