// const puppeteer = require('puppeteer');

// (async () => {
//     const browser = await puppeteer.launch({});
//     const page = await browser.newPage();
//     await page.goto("https://unstop.com/hackathons?filters=,all,open,all&types=teamsize,payment,oppstatus,eligible&sort=daysleft&dir=asc");

//     const grabEvents = await page.evaluate(()=>{
//         const events = document.querySelectorAll("app-opportunity-listbox a");
//         const eventList = [];


//         events.forEach((currEvent)=>{

//             const logoDiv = currEvent.querySelector(".img");
//             const infoParentDiv = currEvent.querySelector(".cptn");

//             const infoDiv = infoParentDiv.children;

//             const nameDiv = infoDiv[0];
//             const detailsParentDiv = infoDiv[1];

//             const eventName = nameDiv.querySelector("h2");
//             const institueName = nameDiv.querySelector("h3");

//             const details = detailsParentDiv.children;

//             const registrationDetails = details[0];
//             const tagDetails = details[1];

//             const strongParent = registrationDetails.querySelectorAll("strong");
//             const prizePoolParent = tagDetails.children;

//             const registration = strongParent[0];
//             const timeLeft = strongParent[1];
//             let prizePool;
//             if (prizePoolParent[1]){
//                 prizePool = prizePoolParent[1].innerText;
//             }
//             else{
//                 prizePool = "Not Mentioned"
//             }

//             eventList.push({
//                 "name" : eventName.innerText,
//                 "instituteName" : institueName.innerText,
//                 "registrations" : registration.innerText,
//                 "timeLeft" : timeLeft.innerText,
//                 "prizePool" : prizePool
//             });
//         })

//         return eventList;
//     })

//     console.log(grabEvents);

//     await browser.close();
// })();



//chef not working
// const puppeteer = require('puppeteer');

// (async () => {
//     const browser = await puppeteer.launch({headless:false});
//     const page = await browser.newPage();
//     await page.goto("https://www.codechef.com/contests?itm_medium=navmenu&itm_campaign=allcontests");

//     const grabEvents = await page.evaluate(async()=>{
//         function waitFor(delay) {
//             return new Promise(resolve => setTimeout(resolve, delay));
//         }
//         await waitFor(5000);
//         const category = document.querySelectorAll(".jss278");
//         return category.length

//         const upcommingEventParent = category[1];

//         const upcommingEvents = upcommingEventParent.querySelectorAll("tr");
//         let eventList = [];

//         upcommingEvents.forEach((currEvent)=>{
//             const details = currEvent.querySelectorAll("td");
//             let eventDetails = {};
//             // details.forEach((currDetail , i) => {
//             //     if (i == 1){
//             //         eventDetails.name = currDetail.querySelector("span").innerText;
//             //         eventDetails.link = currDetail.querySelector("a").getAttribute("href");
//             //     }
//             //     if (i == 2){
//             //         const timeDetails = currDetail.querySelectorAll("p");
//             //         eventDetails.date = timeDetails[0].innerText;
//             //         eventDetails.time = timeDetails[1].innerText;
//             //     }
//             //     if (i == 3){
//             //         eventDetails.duration = currDetail.querySelector("p").innerText;
//             //     }
//             //     if (i == 4){
//             //         const timeLeftParent = currDetail.querySelectorAll("p");
//             //         let timeLeft = timeLeftParent[0].innerText;
//             //         if (timeLeftParent[1]){
//             //             timeLeft += " ";
//             //             timeLeft += timeLeftParent[1].innerText;
//             //         }
//             //         eventDetails.timeLeft = timeLeft;
//             //     }
//             // })
//             eventList.push(eventDetails);
//         })

//         return eventList;
//     })

//     console.log(grabEvents);

//     await browser.close();
// })();


// const puppeteer = require('puppeteer');

// (async () => {
//     const browser = await puppeteer.launch({headless:false});
//     const page = await browser.newPage();
//     await page.goto("https://codeforces.com/contests");

//     const grabEvents = await page.evaluate(()=>{
//         const category = document.querySelectorAll("table");

//         const upcommingEventParent = category[0];

//         const upcommingEvents = upcommingEventParent.querySelectorAll("tr");
//         let eventList = [];

//         upcommingEvents.forEach((currEvent)=>{
//             const details = currEvent.querySelectorAll("td");
//             let eventDetails = {};
//             details.forEach((currDetail , i) => {
//                 if (i == 0){
//                     eventDetails.name = currDetail.innerText;
//                 }
//                 if (i == 2){
//                     eventDetails.time = currDetail.querySelector("a").innerText;
//                 }
//                 if (i == 3){
//                     eventDetails.duration = currDetail.innerText;
//                 }
//                 if (i == 5){
//                     try{
//                         eventDetails.link = currDetail.querySelector("a").getAttribute("href");
//                     }
//                     catch(e){
//                         eventDetails.link = "No links available"

//                     }
//                 }
//             })
//             eventList.push(eventDetails);
//         })

//         return eventList;
//     })

//     console.log(grabEvents);

//     await browser.close();
// })();


// const puppeteer = require('puppeteer');

// (async () => {
//     const browser = await puppeteer.launch({headless:false});
//     const page = await browser.newPage();
//     await page.goto("https://codingcompetitions.withgoogle.com/kickstart/schedule");



//     const grabEvents = await page.evaluate(async()=>{
//         function waitFor(delay) {
//             return new Promise(resolve => setTimeout(resolve, delay));
//         }
//         await waitFor(5000);

//         const tables = document.querySelectorAll('div[role="table"]');

//         const nextEventTable = tables[0];
//         const upcommingEventTable = tables[1];

//         const nextEventRows = nextEventTable.querySelectorAll('div[role="row"]');
//         const upcommingEventRows = upcommingEventTable.querySelectorAll('div[role="row"]');

//         let eventList = [];

//         nextEventRows.forEach((currRow , i)=>{
//             if (i !== 0){
//                 let eventDetails = {};
//                 const cells = currRow.querySelectorAll('div[role="cell"]')
//                 cells.forEach((currCell , j) => {
//                     if (j == 0){
//                         eventDetails.name = currCell.querySelector('span').innerText;
//                     }
//                     if (j ==1){
//                         eventDetails.date = currCell.querySelector('span').innerText;
//                     }
//                     if (j == 3){
//                         eventDetails.duration = currCell.querySelector('span').innerText;
//                     }
//                 })
//                 eventDetails.link = "https://codingcompetitions.withgoogle.com/kickstart/schedule";
//                 eventList.push(eventDetails);
//             }
//         })

//         upcommingEventRows.forEach((currRow , i)=>{
//             if (i !== 0){
//                 let eventDetails = {};
//                 const cells = currRow.querySelectorAll('div[role="cell"]')
//                 cells.forEach((currCell , j) => {
//                     if (j == 0){
//                         eventDetails.name = currCell.querySelector('span').innerText;
//                     }
//                     if (j ==1){
//                         eventDetails.date = currCell.querySelector('span').innerText;
//                     }
//                     if (j == 3){
//                         eventDetails.duration = currCell.querySelector('span').innerText;
//                     }
//                 })
//                 eventDetails.link = "https://codingcompetitions.withgoogle.com/kickstart/schedule";
//                 eventList.push(eventDetails);
//             }
//         })

//         return eventList;
//     })

//     console.log(grabEvents);

//     await browser.close();
// })();