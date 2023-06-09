const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function isItFriday(today) {
    if (today == 'Friday') return 'TGIF'
    return 'Nope';
}

Given('today is Sunday', function () {
    // Write code here that turns the phrase above into concrete actions
    this.today = 'Sunday';
});

Given('today is Friday', function () {
    // Write code here that turns the phrase above into concrete actions
    this.today = 'Friday';
});

Given('today is parametrized {string}', function (givenDay) {
    this.today = givenDay;
})

When('I ask whether it\'s Friday yet', function () {
    // Write code here that turns the phrase above into concrete actions
    this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
    // Write code here that turns the phrase above into concrete actions
    assert.strictEqual(this.actualAnswer, expectedAnswer); 
});