const NodeEnv= require('jest-environment-node');
module.exports= class testEnvironment extends NodeEnv {
    constructor(config, context){
        super(config);
    }
    async setup(){

    }
    async teardown(){

    }

    runScript(script){
        return super.runScript(script);
    }
};