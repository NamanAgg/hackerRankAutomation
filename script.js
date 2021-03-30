const puppy=require("puppeteer");

let browserPromise =  puppy.launch({
    headless: false,
    // pipe: true, <-- delete this property
    args: [
        '--no-sandbox',
        '--disable-dev-shm-usage', // <-- add this one
    ],
});

let tab;
const id ="tixig24015@irahada.com";
const pass="random123";
browserPromise.then(function(browser){
    let pagesPromise= browser.pages();
    return pagesPromise;
}).then(function(pages){
     tab=pages[0];
    let pageOpenPromise= tab.goto("https://www.hackerrank.com/auth/login");
    return pageOpenPromise;
}).then(function(){
    console.log("opened");
}).catch(function(err){
    console.log("error occured "+err);
});