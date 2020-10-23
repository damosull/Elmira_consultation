var PracticePage = function () { };

PracticePage.prototype = Object.create({}, {
    selectControlOptionOne: { get: function () { return element(by.id('dropdown-class-example')).element(by.css("[value='option1']")); } },
    selectControlOptionTwo: { get: function () { return element(by.id('dropdown-class-example')).element(by.css("[value='option2']")); } },
    selectControlOptionThree: { get: function () { return element(by.id('dropdown-class-example')).element(by.css("[value='option3']")); } },
});

module.exports = PracticePage; 