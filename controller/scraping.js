const unstopData = async(req, res, next) => {
    
    // let options = {};
    // if (process.env.AWS_LAMBDA_FUNCTION_VERSION){
    //     options = {
    //         args : [...chrome.args , "--hide-scrollbars" , "--disable-web-security"],
    //         defaultViewport : chrome.defaultViewport,
    //         executablePath : await chrome.executablePath,
    //         headless : true,
    //         ignoreHTTPSErrors : true
    //     };
    // }

    // try{
    //     const scrapingUnstop = async () => {
    //         const browser = await puppeteer.launch(options);
    //         const page = await browser.newPage();
    //         await page.goto("https://unstop.com/hackathons?filters=,all,open,all&types=teamsize,payment,oppstatus,eligible&sort=daysleft&dir=asc");

    //         const grabEvents = await page.evaluate(()=>{
    //             const events = document.querySelectorAll("app-opportunity-listbox a");
    //             const eventList = [];


    //             events.forEach((currEvent)=>{

    //                 const logoDiv = currEvent.querySelector(".img");
    //                 const infoParentDiv = currEvent.querySelector(".cptn");

    //                 const infoDiv = infoParentDiv.children;

    //                 const nameDiv = infoDiv[0];
    //                 const detailsParentDiv = infoDiv[1];

    //                 const eventName = nameDiv.querySelector("h2");
    //                 const institueName = nameDiv.querySelector("h3");

    //                 const details = detailsParentDiv.children;

    //                 const registrationDetails = details[0];
    //                 const tagDetails = details[1];

    //                 const strongParent = registrationDetails.querySelectorAll("strong");
    //                 const prizePoolParent = tagDetails.children;

    //                 const registration = strongParent[0];
    //                 const timeLeft = strongParent[1];
    //                 let prizePool;
    //                 if (prizePoolParent[1]){
    //                     prizePool = prizePoolParent[1].innerText;
    //                 }
    //                 else{
    //                     prizePool = "Not Mentioned"
    //                 }

    //                 eventList.push({
    //                     "name" : eventName.innerText,
    //                     "instituteName" : institueName.innerText,
    //                     "registrations" : registration.innerText,
    //                     "timeLeft" : timeLeft.innerText,
    //                     "prizePool" : prizePool
    //                 });
    //             })

    //             return eventList;
    //         })

    //         await browser.close();
    //         return grabEvents;
    //     };

    //     const data = await scrapingUnstop();
    //     res.status(200).send(data);
    // }
    // catch(err){
    //     next(err);
    // }
    const tempData = [
        {
            "Title": "Event Title",
            "Description": "Event Desc",
            "Venue": "Event Venue",
            "Date": "Event Date",
            "Time": "Event Time",
            "Banner": "Event Banner",
            "Link": "Event Link"
        },
        {
            "Title": "Event Title",
            "Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti et nesciunt itaque velit eos aut, adipisci debitis nam fugit nihil ea tempore officiis. Quam minima ratione deserunt est, neque odit!",
            "Venue": "Event Venue",
            "Date": "Event Date",
            "Time": "Event Time",
            "Banner": "Event Banner",
            "Link": "Event Link"
        },
        {
            "Title": "Event Title",
            "Description": "Event Desc",
            "Venue": "Event Venue",
            "Date": "Event Date",
            "Time": "Event Time",
            "Banner": "Event Banner",
            "Link": "Event Link"
        },
        {
            "Title": "Event Title",
            "Description": "Event Desc",
            "Venue": "Event Venue",
            "Date": "Event Date",
            "Time": "Event Time",
            "Banner": "Event Banner",
            "Link": "Event Link"
        },
        {
            "Title": "Event Title",
            "Description": "Event Desc",
            "Venue": "Event Venue",
            "Date": "Event Date",
            "Time": "Event Time",
            "Banner": "Event Banner",
            "Link": "Event Link"
        },
        {
            "Title": "Event Title",
            "Description": "Event Desc",
            "Venue": "Event Venue",
            "Date": "Event Date",
            "Time": "Event Time",
            "Banner": "Event Banner",
            "Link": "Event Link"
        },
        {
            "Title": "Event Title",
            "Description": "Event Desc",
            "Venue": "Event Venue",
            "Date": "Event Date",
            "Time": "Event Time",
            "Banner": "Event Banner",
            "Link": "Event Link"
        }
    ]


    res.status(200).send(tempData);
}


const googleKickstartData = async(req, res, next) => {

    // let options = {};
    // if (process.env.AWS_LAMBDA_FUNCTION_VERSION){
    //     options = {
    //         args : [...chrome.args , "--hide-scrollbars" , "--disable-web-security"],
    //         defaultViewport : chrome.defaultViewport,
    //         executablePath : await chrome.executablePath,
    //         headless : true,
    //         ignoreHTTPSErrors : true
    //     };
    // }

    // try{
    //     const scrapingKickstart = async () => {
    //         const browser = await puppeteer.launch(options);
    //         const page = await browser.newPage();
    //         await page.goto("https://codingcompetitions.withgoogle.com/kickstart/schedule");



    //         const grabEvents = await page.evaluate(async()=>{
    //             function waitFor(delay) {
    //                 return new Promise(resolve => setTimeout(resolve, delay));
    //             }
    //             await waitFor(5000);

    //             const tables = document.querySelectorAll('div[role="table"]');

    //             const nextEventTable = tables[0];
    //             const upcommingEventTable = tables[1];

    //             const nextEventRows = nextEventTable.querySelectorAll('div[role="row"]');
    //             const upcommingEventRows = upcommingEventTable.querySelectorAll('div[role="row"]');

    //             let eventList = [];

    //             nextEventRows.forEach((currRow , i)=>{
    //                 if (i !== 0){
    //                     let eventDetails = {};
    //                     const cells = currRow.querySelectorAll('div[role="cell"]')
    //                     cells.forEach((currCell , j) => {
    //                         if (j == 0){
    //                             eventDetails.name = currCell.querySelector('span').innerText;
    //                         }
    //                         if (j ==1){
    //                             eventDetails.date = currCell.querySelector('span').innerText;
    //                         }
    //                         if (j == 3){
    //                             eventDetails.duration = currCell.querySelector('span').innerText;
    //                         }
    //                     })
    //                     eventDetails.link = "https://codingcompetitions.withgoogle.com/kickstart/schedule";
    //                     eventList.push(eventDetails);
    //                 }
    //             })

    //             upcommingEventRows.forEach((currRow , i)=>{
    //                 if (i !== 0){
    //                     let eventDetails = {};
    //                     const cells = currRow.querySelectorAll('div[role="cell"]')
    //                     cells.forEach((currCell , j) => {
    //                         if (j == 0){
    //                             eventDetails.name = currCell.querySelector('span').innerText;
    //                         }
    //                         if (j ==1){
    //                             eventDetails.date = currCell.querySelector('span').innerText;
    //                         }
    //                         if (j == 3){
    //                             eventDetails.duration = currCell.querySelector('span').innerText;
    //                         }
    //                     })
    //                     eventDetails.link = "https://codingcompetitions.withgoogle.com/kickstart/schedule";
    //                     eventList.push(eventDetails);
    //                 }
    //             })

    //             return eventList;
    //         })
    //         await browser.close();
    //         return grabEvents;
    //     };

    //     const data = await scrapingKickstart();
    //     res.status(200).send(data);
    // }
    // catch(err){
    //     next(err);
    // }
    const tempData = [
        {
            "Title": "Event Title",
            "Description": "Event Desc",
            "Venue": "Event Venue",
            "Date": "Event Date",
            "Time": "Event Time",
            "Banner": "Event Banner",
            "Link": "Event Link"
        },
        {
            "Title": "Event Title",
            "Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti et nesciunt itaque velit eos aut, adipisci debitis nam fugit nihil ea tempore officiis. Quam minima ratione deserunt est, neque odit!",
            "Venue": "Event Venue",
            "Date": "Event Date",
            "Time": "Event Time",
            "Banner": "Event Banner",
            "Link": "Event Link"
        },
        {
            "Title": "Event Title",
            "Description": "Event Desc",
            "Venue": "Event Venue",
            "Date": "Event Date",
            "Time": "Event Time",
            "Banner": "Event Banner",
            "Link": "Event Link"
        },
        {
            "Title": "Event Title",
            "Description": "Event Desc",
            "Venue": "Event Venue",
            "Date": "Event Date",
            "Time": "Event Time",
            "Banner": "Event Banner",
            "Link": "Event Link"
        },
        {
            "Title": "Event Title",
            "Description": "Event Desc",
            "Venue": "Event Venue",
            "Date": "Event Date",
            "Time": "Event Time",
            "Banner": "Event Banner",
            "Link": "Event Link"
        },
        {
            "Title": "Event Title",
            "Description": "Event Desc",
            "Venue": "Event Venue",
            "Date": "Event Date",
            "Time": "Event Time",
            "Banner": "Event Banner",
            "Link": "Event Link"
        },
        {
            "Title": "Event Title",
            "Description": "Event Desc",
            "Venue": "Event Venue",
            "Date": "Event Date",
            "Time": "Event Time",
            "Banner": "Event Banner",
            "Link": "Event Link"
        }
    ]


    res.status(200).send(tempData);
}


const codeforcesData = async(req ,res , next) => {
    const tempData = [
        {
            "Title": "Event Title",
            "Description": "Event Desc",
            "Venue": "Event Venue",
            "Date": "Event Date",
            "Time": "Event Time",
            "Banner": "Event Banner",
            "Link": "Event Link"
        },
        {
            "Title": "Event Title",
            "Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti et nesciunt itaque velit eos aut, adipisci debitis nam fugit nihil ea tempore officiis. Quam minima ratione deserunt est, neque odit!",
            "Venue": "Event Venue",
            "Date": "Event Date",
            "Time": "Event Time",
            "Banner": "Event Banner",
            "Link": "Event Link"
        },
        {
            "Title": "Event Title",
            "Description": "Event Desc",
            "Venue": "Event Venue",
            "Date": "Event Date",
            "Time": "Event Time",
            "Banner": "Event Banner",
            "Link": "Event Link"
        },
        {
            "Title": "Event Title",
            "Description": "Event Desc",
            "Venue": "Event Venue",
            "Date": "Event Date",
            "Time": "Event Time",
            "Banner": "Event Banner",
            "Link": "Event Link"
        },
        {
            "Title": "Event Title",
            "Description": "Event Desc",
            "Venue": "Event Venue",
            "Date": "Event Date",
            "Time": "Event Time",
            "Banner": "Event Banner",
            "Link": "Event Link"
        },
        {
            "Title": "Event Title",
            "Description": "Event Desc",
            "Venue": "Event Venue",
            "Date": "Event Date",
            "Time": "Event Time",
            "Banner": "Event Banner",
            "Link": "Event Link"
        },
        {
            "Title": "Event Title",
            "Description": "Event Desc",
            "Venue": "Event Venue",
            "Date": "Event Date",
            "Time": "Event Time",
            "Banner": "Event Banner",
            "Link": "Event Link"
        }
    ]


    res.status(200).send(tempData);
}

module.exports = {unstopData , googleKickstartData , codeforcesData};