Feature('Spark Rock Customer Success Center - Registration');

Scenario('Verify Successfull Registration on spark rock customer portal',  ({ I }) => {
    I.amOnPage("https://success.sparkrock.com/SignIn?returnUrl=%2Fknowledgebase%2F");
    I.click('a[title="Register"]');
    I.waitForVisible('//span[text()="Register for a new local account"]');
    I.seeElement('//span[text()="Register for a new local account"]');
    I.fillField('input[id="EmailTextBox"]',"sarthak1235@gmail.com");
    I.fillField('input[id="UserNameTextBox"]',"sarthak313123");
    I.fillField('input[id="PasswordTextBox"]',"Password@12345");
    I.fillField('input[id="ConfirmPasswordTextBox"]',"Password@12345");
    I.click('input[id="SubmitButton"]');
    I.waitForVisible('//span[text()="Your email requires confirmation."]');
    I.seeElement('//span[text()="Your email requires confirmation."]');
});


Scenario('Verify User Can Go To KnowledgeBase Once Registration Successfull',  ({ I }) => {
    I.amOnPage("https://success.sparkrock.com/SignIn?returnUrl=%2Fknowledgebase%2F");
    I.click('a[title="Register"]');
    I.waitForVisible('//span[text()="Register for a new local account"]');
    I.seeElement('//span[text()="Register for a new local account"]');
    I.fillField('input[id="EmailTextBox"]',"sarthak1234@gmail.com");
    I.fillField('input[id="UserNameTextBox"]',"sarthak313131");
    I.fillField('input[id="PasswordTextBox"]',"Password@12345");
    I.fillField('input[id="ConfirmPasswordTextBox"]',"Password@12345");
    I.click('input[id="SubmitButton"]');
    I.waitForVisible('//span[text()="Your email requires confirmation."]');
    I.seeElement('//span[text()="Your email requires confirmation."]');
    I.click('//nav[@class="s-header__nav"]/a[1]');
    I.seeElement('//div[text()="Knowledge Categories"]');
});



/** Enhancements
 * 
 * 
 * Create BDD (So that everybody understands what tests are done)
 * We can deploy it to the pipeline so that anyone without knowledege of the automation testing can use it
 * Create either a Page object or a Singleton Pattern for better locators management in case things/features are changing rapidly
 * 
 * 
 * 
 * 
 */