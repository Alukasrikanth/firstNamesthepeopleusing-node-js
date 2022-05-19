const getPeopleName= require("../country/state/city/index");
const getFirstName = require("../utilities/utils/index");
const getPeopleInCity=(getPeopleName)=>{
    return getFirstName(getPeopleName);
}

module.exports=getPeopleInCity;
