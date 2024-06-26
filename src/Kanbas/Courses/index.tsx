import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import { useState, useEffect } from "react";
import axios from "axios";




function Courses() {
  const { courseId } = useParams();
  const COURSES_API = "http://localhost:4000/api/courses";
  const [course, setCourse] = useState<any>({ _id: "" });
  const findCourseById = async (courseId?: string) => {
    const response = await axios.get(
      `${COURSES_API}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  return (
    <div style={{ overflow: 'hidden',overflowX: 'hidden', position: 'relative', height: '100vh', width: '100vw' }}>
  <div style={{ overflowY: 'scroll', marginLeft: '-70px',position: 'absolute', top: '0', left: '0', bottom: '0', width: '350px' }}>
    <CourseNavigation />
  </div>
  <div style={{ overflowY: 'scroll', marginLeft: '250px', height: '100%', width: 'calc(100% - 400px)'}}>
    <Routes>
      <Route path="/" element={<Navigate to="Home" />} />
      <Route path="Home" element={<Home/>} />
      <Route path="Modules" element={<Modules/>} />
      <Route path="Piazza" element={<h1>Piazza</h1>} />
      <Route path="Assignments" element={<Assignments/>} />
      <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
      <Route path="Grades" element={<Grades />} />
    </Routes>
  </div>
</div>

  );
}
export default Courses;

