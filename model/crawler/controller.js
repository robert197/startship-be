const Controller = require('../../lib/controller')
const crawlerFacade = require('./facade')
// const crawler = require('crawler')
// const phantom = require('phantom')
const puppeteer = require('puppeteer')



const angelUrl = 'https://angel.co/companies'

class CrawlerController {
   
   crawlSite(req, response, next) {
      puppeteer.launch({args: ['--no-sandbox', '--ignore-certificate-errors', '--ignore-certificate-errors-spki-list']}).then(browser => {
         browser.newPage().then(page => {
            page.goto(angelUrl).then(() => {
               console.log('here!!')
               page.evaluate(() => {
                  console.log('evaluate')
                  // console.log(document.querySelector('.npm-expansions').textContent)
               }).then(() => {
                  console.log('evaluate')
               })
            }).catch((err) => {
               console.log(err)   
            })
            page.close().then(() => {
               browser.close()
            }).catch((err) => {
               console.log(err)
            })
         }).catch((err) => {
            console.log(err)
         })
      }).catch((err) => {
         console.log(err)
      })
   }
}

module.exports = new CrawlerController()
