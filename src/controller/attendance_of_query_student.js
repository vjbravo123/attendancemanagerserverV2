const client = require("../database/client_connector");
const collection = client.db("attendance").collection("attendance")

const queryattendance = async (req, res) => {

    const roll_no = req.body.roll_no;
    let present_count = 0;
    let result = await collection.find({ roll_no: roll_no }).toArray();

    for (let i = 0; i < result.length; i++) {
        if (result[i].attendance_status === "Present") {
            present_count++;
        }
    }
    // console.log(result);
    // console.log(present_count);
    res.json({ attendance: result });
    

}
module.exports = queryattendance;