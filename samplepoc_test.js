Feature('samplepoc');

Scenario('test something', ({ I }) => {
    I.wait(5);
    I.saveScreenshot('1.png')
    I.tap('#com.google.android.calculator:id/digit_5');
    I.tap('~plus');
    I.tap('#com.google.android.calculator:id/digit_2');
    I.tap('~equals');
    I.saveScreenshot('2.png')

});

