const MongoClient=require("mongodb").MongoClient;
const state ={
    db:null
}


module.exports.connect =(done)=>{
    const connnection_string='mongodb://localhost:27017';
    const dbname = 'prodects';
    

    MongoClient.connect(connnection_string,{ useUnifiedTopology: true },(err,data)=>{
        if(err)throw err;
        state.db=data.db(dbname);
        done();

    })

}

module.exports.get=()=>{
    return state.db
}