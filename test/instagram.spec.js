module.exports = {
    'Instagram Page test': function (browser) {
        let instagram = browser.page.instagram();

        
  // Populating the Url in the chrome Browser
            browser
                .url('https://www.instagram.com/')
                .waitForElementVisible('body')
                .maximizeWindow()
            browser
                .getTitle(function(title) {
                    this.verify.ok(title.includes("Instagram"));
                  })
 /*  3.	Check whether a user is logged in
    a.	If user is logged in, log them out
    b.	Verify user is logged out and home page is in the expected initial state. 
 */
    browser
                .useXpath()  
                .verify.visible("//span[@class='_2dbep qNELH']") //Verifying the user is logged in
                .click("//span[@class='_2dbep qNELH']")
                .pause(3000)
                .click("//*[contains(text(),'Log Out')]") //Click on Logout     
                .verify.title('Login • Instagram')  //Verifying after logout home page is displayed   

  //8.	Verify all expected links are in place and that they are correct.
           
                .verify.visible("//*[contains(text(),'About')]")
                .verify.visible("//*[contains(text(),'Blog')]")
                .verify.visible("//*[contains(text(),'Jobs')]")
                .verify.visible("//*[contains(text(),'API')]")
                .verify.visible("//*[contains(text(),'Privacy')]")
                .verify.visible("//*[contains(text(),'Terms')]")
                .verify.visible("//*[contains(text(),'Top Accounts')]")
                .verify.visible("//*[contains(text(),'Hashtags')]")
                .verify.visible("//*[contains(text(),'Location')]")
                .verify.visible("//*[contains(text(),'Forgot password?')]")
                .verify.visible("//*[contains(text(),'Sign up')]")    
                .verify.visible("//*[contains(text(),'Log in with Facebook')]")  

    //5.	Verify expected text is in place and that it is correct
                .verify.containsText("//h1[@class='NXVPg Szr5J  coreSpriteLoggedOutWordmark  ']",'Instagram')
                .verify.containsText("//p[@class='b_nGN']",'Get the app.')

    // 4.	Verify expected graphics are in place
                .verify.visible("//*[@id='loginForm']/div/div[5]/button/span[1]")     //Facebook Icon
                .execute('window.scrollTo(0,document.body.scrollHeight);')
                .verify.visible("//*[@id='react-root']/section/main/div/div/div[3]/div/a[1]")      //Apple store image  
                .verify.visible("//*[@id='react-root']/section/main/div/div/div[3]/div/a[2]")     //Android image
    // Verify the drop down in the home page of Instagram
                .execute('window.scrollTo(0,document.body.scrollHeight);')
                .click("//select[@class='hztqj']")
                .click("//select[@class='hztqj']/option[@value='en-gb']") 
     
    }
}



