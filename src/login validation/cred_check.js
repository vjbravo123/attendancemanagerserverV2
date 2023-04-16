let client = require("../database/client_connector");
const attendance_finder = require('./attendance_finder')

const cred_check = async (req, res) => {
    let collection_reference = client.db('login').collection(req.params.arg1);
    const name = req.body.username;
    const password = req.body.password;
    const filter = { "name": name, "password": password }
    
    try {
        let docCount = await collection_reference.countDocuments(filter);
        console.log(`found ${docCount} Documents :`);
        
       if(req.params==='users'){//this if block is for checking teachers credentials

           if (docCount > 0) {
               res.status(200).json({ value: true })
           }
           else {
               res.status(401).json({ value: false })
           }
       }

      else{  //for students cred
        if(docCount>0){
            let result = await collection_reference.find(filter).toArray();
            console.log(result);
            const roll_no=result[0].roll_no;
            let promm =await  attendance_finder(roll_no);
            console.log(promm);
            let obj ={attendance:promm.present_count ,attendance_data:promm.result , value:true}
            res.json(obj);
        }
        else{
            res.json({value:false})
        }
      }
    }
    catch (err) {
        console.log("404 error:" + err)
    }
}
module.exports = cred_check;