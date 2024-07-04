import puppeteer from 'puppeteer';
import connection from "../configure/index.js";

export class scrapConteroller {

  static getscrapedData(req, res) {
    connection.query(`SELECT * FROM  scrapeddata WHERE scrapeddata.status='created'`, (err, result) => {
      if (err) {
        console.log("error");
       return res.json({
          success: false,
         
        });
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
        console.log("datasuccess",data.success)
      if (data.success) {
        scrapedData.scrapeditem = data.data;
      }
      scrapedData.scrapeditem=JSON.stringify(scrapedData.scrapeditem)
    

      console.log("Scraped Data:", scrapedData);

      connection.query("INSERT INTO `scrapeddata` SET ?", [scrapedData], (err, result) => {
        if (err) {
          console.log("Error:", err);
          return res.json({
          success: false,
         
        });
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
      
    if(scrapedData.status!='deleted'){
        const data = await scrape(scrapedData.url);
      if (data.success) {
        scrapedData.scrapeditem = data.data;
      }
      scrapedData.scrapeditem=JSON.stringify(scrapedData.scrapeditem)
    }

      connection.query(`UPDATE scrapeddata SET ? WHERE scrapedId  = ${scrapedData.scrapedId}`, [scrapedData], (err, result) => {
        if (err) {
          console.log("Error:", err);
           return res.json({
          success: false,
         
        });
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
  async function  scrape(url) {
     try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded' });

   
    await page.waitForSelector('body');

    const content = await page.content();


    const title = await page.$eval('title', element => element.textContent);

    const scrapedData = {
      content,
      title,
      
    };
     await browser.close();

    
    return {
      success:true,
      data:scrapedData
    }
  } catch (error) {
    console.error('Puppeteer error:', error);
    res.status(500).json({ error: 'Scraping failed' });
  }
  }

