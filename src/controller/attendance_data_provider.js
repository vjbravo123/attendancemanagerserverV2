const client = require("../database/client_connector");
const collection = client.db("attendance").collection("students_attendance");

const attendance_dataprovider=async()=>{

    const data=await collection.find().toArray().then()
    await data.sort((a, b) => a.sno - b.sno);
    // res.send(data);
    // console.log(data);
    return data;
}
module.exports=attendance_dataprovider;