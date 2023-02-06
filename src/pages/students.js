import React from "react";
import "../styles/student.css";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux"; //to read curret value of one of a state
// import {addUser,deleteUser, updateUsername} from "./features/users"

function Students() {
  const dispatch = useDispatch(); //make an action happedn onClick on a redux state from user.js file
  const studentList = useSelector(
    (state) => state.studentsList.studentData.value
  );
  console.log(studentList);

  return (
    <div>
      STUDENTS PAGE
      <br />
      <br />
      <div>
        {studentList.map((student) => {
          return (
            <div>
              <motion.div
               className="student_info"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               transition={{ duration: 0.3 }}
               variants={{
                 visible: { opacity: 1, scale: 1 },
                 hidden: { opacity: 0, scale: 0 }
               }}
               
              >
                <ul>STUDENT NAME: {student.name}</ul>
                <ul>USERNAME: {student.username}</ul>
              </motion.div>
              <br />
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Students;
