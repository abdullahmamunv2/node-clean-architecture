const mongoose = require('mongoose');


function initConnection(uri : string,options:object){
    return mongoose.connect(uri,options);
}

function closeAll(){
    return mongoose.disconnect();
}


export {
    initConnection,
    closeAll          
}