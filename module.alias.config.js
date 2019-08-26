const path        = require('path');
const moduleAlias = require('module-alias');

module.exports = (env)=>{
    moduleAlias.addAlias('@core', path.resolve(__dirname , 'main/core'));
    moduleAlias.addAlias('@adapter', path.resolve(__dirname , 'main/adapter'));
    moduleAlias.addAlias('@infrastructure', path.resolve(__dirname , 'main/infrastructure'));
}