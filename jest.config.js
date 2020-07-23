module.exports = {
    verbose: true,
    setupFilesAfterEnv: ['./jest/setupTestFramework.js'],
    testEnvironment: 'jest-environment-webdriver',
    testEnvironmentOptions: {
      browser: "chrome",
    },
    reporters:[
        "default",
    ],
    testRegex: "\\.spec\\.js",
    testPathIgnorePatterns:[],
    transform:{
      ".*\\.js$": "babel-jest",
    },
    globals:{

    
    },
  };