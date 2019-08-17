import cron from 'node-cron'
import { checkForScrapes } from './scraper'

cron.schedule(`* * * * *`, () => {
    console.log(`Cron running every minute`);
    checkForScrapes()
});