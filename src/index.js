const { chromium } = require('playwright')

async function main() {
  const browser = await chromium.launch()
  const context = await browser.newContext()
  const page = await context.newPage()

  await page.goto('https://www.example.com/')
  await page.screenshot({ path: 'src/capture.png' })

  await browser.close()
}

main()
