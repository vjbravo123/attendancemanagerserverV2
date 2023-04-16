const updateAttendanceStatus = require("../function/updateAttendanceStatus");
const excelmaker = require('../function/excelmakeṛ')
const attendance_datafunc = require("../function/attendnance_data");
const attendance = async (req ,res) => {
   
    const data =await attendance_datafunc();

    // console.log(data);
    const  attendanceData  = req.body;
      // console.log(attendanceData);
      await updateAttendanceStatus(attendanceData);
      excelmaker(attendanceData,data,res);
    }
module.exports=attendance;
