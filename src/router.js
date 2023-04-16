const cred_check = require("./login validation/cred_check")
const signup = require("./login validation/signup")
const queries = require('./controller/queries')
const logger = require('./controller/logger')
const queried_attendance_update = require('./controller/attendance_update')
const querydelete = require('./controller/querydeleter')
const attendance = require('./controller/attendance')
const inserting_query_to_db = require('./controller/queryinserter')
const queryattendance = require('./controller/attendance_of_query_student')
const attendance_datafunc = require('./function/attendnance_data')
const express = require("express");
const Router = express.Router();


Router.get('/',logger)
Router.post('/login/:arg1',cred_check);
Router.get('/api/documents',queries );

Router.post('/queryattendance',queryattendance)

Router.post('/querydelete',querydelete)
Router.post('/queriedattendancechange/',queried_attendance_update);


Router.post('/studentslogin/:arg1',cred_check)

Router.post('/submit-form', signup);

Router.post('/students-queries',inserting_query_to_db);
  
Router.post('/attendance',attendance);

Router.get("/attendancetabledata",attendance_datafunc)
module.exports=Router;