const schedule = require('node-schedule');
const request = require('request');
const Event = require('../models/Event');

schedule.scheduleJob("test job" , "0 */6 * * *", () => {
    let events = [];
    function kickstartScrap(){
        return new Promise(function(resolve,reject){
            request('https://wlg67g0nle.execute-api.ap-south-1.amazonaws.com/test/kickstart', async(error , response , body) => {
                if (!error && response.statusCode == 200){
                    const dataArray = JSON.parse(body);
                    dataArray.forEach((data) => {
                        const temp = {};
                        temp.Title = data.name;
                        temp.Description = "Offical coding competition held by Google";
                        temp.Venue = "Online";
                        temp.Date = data.date;
                        temp.Time = data.date;
                        temp.Banner = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png";
                        temp.Link = data.link;
                        temp.Duration = data.duration;
                        events.push(temp);
                    })
                    resolve();
                }
                else{
                    reject("Something went wrong in scraping kickstart");
                }    
            })   
        })
    }




    kickstartScrap()
    // chaining
    // .then(() => {
    //     return kickstartScrap();
    // })
    .then(async()=> {
        console.log("done");
        await Event.deleteMany();
        await Event.create(events);
    })
    .catch((err)=>{
        console.log(err);
    })
})

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
    const events = await Event.find();
    res.status(200).send(events);
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