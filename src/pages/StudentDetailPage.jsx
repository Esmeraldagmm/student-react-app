import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const StudentDetailPage = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const getStudent = async () => {
      const response = await fetch(`https://localhost:3000/student/${id}`);
      const data = await response.json();
      setStudent(data);
    };
    getStudent();
  }, [id]);

  return <div>{student ? student.major : "Loading..."}</div>;
};
