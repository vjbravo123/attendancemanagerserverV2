const { ObjectId } = require("mongodb");
const client = require("../database/client_connector")
const db_data_inserter = require('../controller/insert_data_to_db');
let collection_reference = client.db('attendance').collection('students_attendance');

const signup = async (req, res) => {
    const name = req.body.username;
    const password = req.body.password;
    const roll_no = req.body.roll_no;
    const idToSearchFor = req.body.id;

    let obj = { name: name, password: password, roll_no: roll_no };



    try {
        // Define the ID to search for
        //   const idToSearchFor =sid;

        // Search for the ID in the collection
        let result = await collection_reference.findOne({ _id: new ObjectId(idToSearchFor) });

        // Check if a matching document was found
        if (result) {
            console.log(`ID '${idToSearchFor}' exists in the collection`);
            console.log(result)
            console.log("id found true");
            
            await db_data_inserter(obj,"login","students_login");
     
            res.status(200).send({value:true})
            }

         else {
            console.log(`ID '${idToSearchFor}' does not exist in the collection`);
            console.log("id not found false");
            res.status(401).send({value:false})
        }
    } catch (err) {
        res.send({value:false})
        console.error(err);
        return false;
    }
}










// let checkvalue = signupidcheck(sid);
// let promiseresolvedvalue = await checkvalue.then();
// let obj = { value: promiseresolvedvalue }
// if (promiseresolvedvalue) {
//     await signup_details(a, "login", "students_login");
//     res.send(obj)
//     console.log("singup accepted")
// }
// else {
//     console.log("singup rejected")
//     res.send(obj)
// }
// }

module.exports = signup;