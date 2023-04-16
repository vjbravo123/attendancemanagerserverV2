const client = require("../database/client_connector");
const collection = client.db("attendance").collection("attendance")


const attendance_finder = async (roll_no) => {

    let present_count = 0;

    let result = await collection.find({ roll_no: roll_no }).toArray();

    for (let i = 0; i < result.length; i++) {
        if (result[i].attendance_status === "Present") {
            present_count++;
        }
    }

    console.log(result);
    console.log(present_count);

    let obj = { present_count: present_count, result: result }

    return obj;
}
module.exports=attendance_finder;