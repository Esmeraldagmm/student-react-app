// import the file StudentInfo to display
import { StudentInfo } from "./StudentInfo";
import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import { Link } from "react-router-dom";
import { SubmitStudentPage } from "./pages/SubmitStudentPage";


//list we can iterate through to display using map

const studentList = [
  {
    firstName: "Misty",
    lastName: "Knight",
    sID: "234",
    school: "Queens College",
    major: "Law",
  },
  {
    firstName: "Jessica",
    lastName: "Jones",
    sID: "434",
    school: "Brooklyn College",
    major: "CS",
  },
  {
    firstName: "Colleen",
    lastName: "Wing",
    sID: "233",
    school: "Queens College",
    major: "CS",
  },
  {
    firstName: "Dare",
    lastName: "Devil",
    sID: "876",
    school: "CCNY",
    major: "Law",
  },
  {
    firstName: "Luke",
    lastName: "Cage",
    sID: "323",
    school: "CCNY",
    major: "Math",
  },
];

function App() {
  const [students, setStudents] = useState(studentList); // studentList is the initial state of the variable students

  // compoent using useEffect - data of students directly from the json file
  // use async await to fetch data from the json file
  useEffect(() => {
    const getStudents = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}`);
      const data = await response.json();
      setStudents(data); // setStudents updates the state of the students variable
    };
    getStudents();     // call the function to retrieve the data
  }, []);

  return (
    <>
      <div>
        <h1>Welcome to CTP</h1>
        <p>List of Students</p>
        {students.map((student) => (
          <Link to={`/student/${student.id}`} key={student.id}>
          <StudentInfo key={student.sID} {...student} />
          </Link>
        ))}

        {/* submit a new student button */}
        <Link to='/student/submit'> Submit a New Student 
        <SubmitStudentPage />
        </Link>

        {/* button to add a new student */}
        <button
          onClick={async () => {
            // use setter function when you want to use the previous state
            await fetch(`${import.meta.env.VITE_API_URL}`, {
              body: JSON.stringify({
                sId: '12345466756w',
                firstName: 'AJ',
                lastName: 'JA',
                major: 'Philosophy',
                school: 'Lehman',
              }),
              // need to include headers to specify the type of data being sent
              headers:{
                'Content-Type': 'application/json',
              },
              method: 'POST',
            });
          }}
        >
          Add a new student
        </button>

        {/* button to remove last student */}
        <button
          onClick={() => {
            setStudents((oldStudentList) => [
              oldStudentList.slice(0, oldStudentList.length - 1),
          ]);
          }}
        >
          Remove last student
        </button>
      </div>
    </>
  );
}

// we can destructrue objects {...students} to pass them as props
export default App;



// delete student: student/prisma.delete
