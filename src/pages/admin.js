import React from "react";
import "../styles/student.css";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux"; //to read curret value of one of a state
import { addUser, deleteUser } from "../reducers/studentsReducer";
// import { addMarks } from "../reducers/marks";

function Admin() {
  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [marks, setMarks] = React.useState("");

  const dispatch = useDispatch(); //make an action happedn onClick on a redux state from user.js file
  const studentList = useSelector(
    (state) => state.studentsList.studentData.value
  );
  console.log(studentList);
  console.log(name);
  console.log(username);
  return (
    <div>
      ADMIN PAGE
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
                  hidden: { opacity: 0, scale: 0 },
                }}
              >
                <ul>STUDENT NAME: {student.name}</ul>
                <ul>USERNAME: {student.username}</ul>
                <br />
                <div>
          </div>
              </motion.div>
              <br />
              <br />
            </div>
          );
        })}
      </div>
      <div className="newStudent">
        <input
          type="text"
          placeholder="Name.."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="UserName.."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <br />
        <br />
        <button
          onClick={() => {
            dispatch(
              addUser({
                // id: studentList[studentList.length - 1].id + 1,
                name,
                username,
              })
            );
          }}
        >
          ADD NEW STUDENT
        </button>
      </div>
    </div>
  );
}

export default Admin;
