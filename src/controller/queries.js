const client = require('../database/client_connector');
const queries = async (req, res) => {
    const collection = client.db("students_queries").collection("qurey_collection")
     const result = await collection.find().toArray()
    //  console.log(result);
     res.json(result);   
}
module.exports =queries;