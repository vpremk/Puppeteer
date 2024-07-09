const puppeteer = require('puppeteer'); 
  
(async () => { 
  const browser = await puppeteer.launch(); 
  const page = await browser.newPage(); 
  await page.goto('https://www.geeksforgeeks.org/'); 
  
  const getDimensions = await page.evaluate(() => { 
    return { 
      width: document.documentElement.clientWidth, 
      height: document.documentElement.clientHeight 
    }; 
  }); 
  
  console.log(getDimensions); 
  
  await browser.close(); 
})(); 
