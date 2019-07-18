const path        = require('path');
const moduleAlias = require('module-alias');

module.exports = (env)=>{
    console.log('resolved path : ',path.resolve(__dirname , 'infrastructure'));
    moduleAlias.addAlias('@core', path.resolve(__dirname , 'core'));
    moduleAlias.addAlias('@adapter', path.resolve(__dirname , 'adapter'));
    moduleAlias.addAlias('@infrastructure', path.resolve(__dirname , 'infrastructure'));
}