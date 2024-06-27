import puppeteer from 'puppeteer';
import connection from "../configure/index.js";

export class scrapConteroller {

  static getscrapedData(req, res) {
    connection.query(`SELECT * FROM  scrapeddata WHERE scrapeddata.status='create'`, (err, result) => {
      if (err) {
        console.log("error");
        return res.send("something error ");
      }
      return res.json({
        success: true,
        data: result,
      });
    });
  }

  static async createNewScrap(req, res) {
    const scrapedData = req.body.scraper;
    console.log("Received data:", req.body);

    try {
     
        const data = await this.scrape(scrapedData.url);
      if (data.success) {
        scrapedData.scrapeditem = data.data;
      }
      scrapedData.scrapeditem=JSON.stringify(scrapedData.scrapedData)
    

      console.log("Scraped Data:", scrapedData);

      connection.query("INSERT INTO `scrapeddata` SET ?", [scrapedData], (err, result) => {
        if (err) {
          console.log("Error:", err);
          return res.send("Something went wrong");
        }
        return res.json({
          success: true,
          data: result,
        });
      });
    } catch (error) {
      console.error("Error scraping:", error);
      return res.send("Scraping failed");
    }
  }

  static async updateScrap(req, res) {
    const scrapedData = req.body.scraper;
    console.log("Received data:", req.body);

    try {
      // Optionally scrape new data if needed
    if(scrapedData.status!='deleted'){
        const data = await this.scrape(scrapedData.url);
      if (data.success) {
        scrapedData.scrapedData = data.data;
      }
      scrapedData.scrapedData=JSON.stringify(scrapedData.scrapedData)
    }

      connection.query(`UPDATE scrapeddata SET ? WHERE scrapedId  = ${scrapedData.scrapedId}`, [scrapedData], (err, result) => {
        if (err) {
          console.log("Error:", err);
          return res.send("Something went wrong");
        }
        return res.json({
          success: true,
          data: result,
        });
      });
    } catch (error) {
      console.error("Error updating:", error);
      return res.send("Update failed");
    }
  }

  static async  scrape(url) {
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

  
    await browser.close();

    // Send the scraped data as the response
    res.json({
      success:true,
      data:scrapedData
    });
  } catch (error) {
    console.error('Puppeteer error:', error);
    res.status(500).json({ error: 'Scraping failed' });
  }
  }
}

