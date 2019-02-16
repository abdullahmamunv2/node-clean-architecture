const EntityError = require('./DomainError.js').DomainError;
try{
    throw new EntityError("asdfasdf");
}catch(error){
    console.log(error.message);
    console.log(error.code);
}
