exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    onPrepare: function() {
        console.log("--------------------------Message before start of SERVER----------------------------------------")

    },
    multiCapabilities: [{
        'browserName': 'firefox'
      }, {
        'browserName': 'chrome'
      }]

}
