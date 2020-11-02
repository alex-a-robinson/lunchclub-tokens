let CODE = 'alexr34' // TODO
let COUNT = 10 // TODO

const puppeteer = require('puppeteer')

async function register(browser) {
  const page = await browser.newPage()
  await page.goto(`https://lunchclub.com/?invite_code=${CODE}`)
  console.log('Page loaded')

  // Focus on input box
  await page.focus('input[placeholder="Email address"]')
  await page.keyboard.type(`${makeid(5)}@exa${makeid(5)}mple.com`)
  await page.keyboard.press('Enter')

  await page.waitFor(4000)
  await page.focus('input[placeholder="First name"]')
  await page.keyboard.type('John')
  await page.focus('input[placeholder="Last name"]')
  await page.keyboard.type('Doe')

  await page.keyboard.press('Enter')

  await page.waitFor(2000)
}

async function main() {
  const browser = await puppeteer.launch({headless: false})

  for (let i=0; i < COUNT; i++) {
    console.log('Doing', i)
    await register(browser)
  }

  console.log('Done!')
  browser.close()
}

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

main()
