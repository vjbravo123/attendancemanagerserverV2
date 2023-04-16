let client = require("../database/client_connector");
let collection_reference = client.db('students_queries').collection('qurey_collection');

const querydeleter = async (req,res)=>{
    const roll_no = req.body.roll_no;
    const filter = {roll_no:roll_no}
    await collection_reference.deleteOne(filter)
    let a = {ans:"delted bro"}
      res.send(a);
    }
module.exports=querydeleter;