import puppeteer from 'puppeteer';
import connection from "../configure/index.js";

export class scrapConteroller {

  static getscrapedData(req, res) {
    connection.query("SELECT * FROM `scrapeddata`", (err, result) => {
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
      const data = await scrape(scrapedData.url);
      if (data.success) {
        scrapedData.scrapedData = data.data;
      }

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
      // const data = await this.scrape(scrapedData.url);
      // if (data.success) {
      //   scrapedData.scrapedData = data.data;
      // }

      connection.query(`UPDATE scrapeddata SET ? WHERE id = ${scrapedData.id}`, [scrapedData], (err, result) => {
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

 
}
 async function scrape(url) {
    if (!url) {
      return {
        success: false,
        message: 'URL is required'
      };
    }

    try {
      const browser = await puppeteer.launch({ headless: true, timeout: 150000 });
      const page = await browser.newPage();
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 60 0000 });

      const data = await page.evaluate(() => {
        return document.title; // Example: scraping the title of the page
      });

      await browser.close();

      return {
        success: true,
        data
      };
    } catch (error) {
      console.log(error)
      return {
        success: false,
        message: error.message
      };
    }
  }
