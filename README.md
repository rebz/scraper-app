# WIP: Scraper App

- Node back-end
- Vue front-end
- UI to manage sites for scraping
- UI to view scraped data
- Node to manage cron jobs and data scraped

---

## Vue - front
...

---

## Node - back

```
cd back
npm i
npm run dev
````
Visit http://localhost:3037/

### Notes
* using `lowdb` to store retrieve and information
    * app settings stored in `data/app.json`
    * sites to be scraped stored in `data/sites.json`
    * sites scraped moved to `data/scraped.json`
    * for each site scraped the data will be stored in a separate `*.json` file