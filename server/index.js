import http from "http"
import bodyparser from "body-parser"
import cors from "cors"
import express from "express"


import scrapRouter from "./router/scrapedRoute.js"


const PORT=5001
const server=express()

server.use(cors());
server.use(bodyparser.json());
server.get('/',(req,res)=>{
    res.send(" response")
})
server.use('/scraper',scrapRouter)

server.get('/', async (req, res) => {
  const url = 'https://tailwindcss.com/'; // Replace with the URL you want to scrape

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    // Wait for the page to load
    await page.waitForSelector('body');

    // Extract the entire HTML content
    const content = await page.content();

    // Optionally, you can extract more specific data here if needed
    // Example: Extract the title
    const title = await page.$eval('title', element => element.textContent);

    // You can add more scraping logic to get additional data
    const scrapedData = {
      content,
      title,
      // Add more data if needed
    };

    // Store data in the database


    // Close browser
    await browser.close();

    // Send the scraped data as the response
    res.json(scrapedData);
  } catch (error) {
    console.error('Puppeteer error:', error);
    res.status(500).json({ error: 'Scraping failed' });
  }
});

server.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
})


















