const updateAttendanceStatus = require("../function/updateAttendanceStatus");
const excelmaker = require('../function/excelmakeṛ')
const attendance_dataprovider = require("./attendance_data_provider");
const attendance = async (req ,res) => {
   
    const data =await attendance_dataprovider();

    // console.log(data);
    const  attendanceData  = req.body;
      // console.log(attendanceData);
      await updateAttendanceStatus(attendanceData);
      excelmaker(attendanceData,data,res);
    }
module.exports=attendance;
