import React , { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import * as db from "../Database";
function Dashboard() {
    const [courses, setCourses] = useState(db.courses);
    
    const [course, setCourse] = useState({

        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "/images/reactjs.jpg"
    });
      const addNewCourse = () => {
        const newCourse = { ...course,
                            _id: new Date().getTime().toString() };
        setCourses([...courses, { ...course, ...newCourse }]);
      };
      const updateCourse = () => {
        setCourses(
          courses.map((c) => {
            if (c._id === course._id) {
              return course;
            } else {
              return c;
            }
          })
        );
      };
    
      const deleteCourse = (courseId: string) => {
        setCourses(courses.filter((course) => course._id !== courseId));
      };

    
    return (
        <div className="p-4">
            <h1>Dashboard</h1>              <hr />
            <h5>Course</h5>
      <input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
            <div className="d-flex justify-content-between align-items-center">
    <h2>Published Courses (4)</h2>
    <div className="d-flex gap-2">
        <button onClick={addNewCourse} className="btn btn-primary">Add</button>
        <button onClick={updateCourse} className="btn btn-success">Update</button>
    </div>
</div>
<hr />
            <div className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div key={course._id} className="col" style={{ width: 300 }}>
                            <div className="card">
                            <img src="/images/dashboard.jpg" className="card-img-top" style={{ height: 150 }} alt={course.name} />
                                <div className="card-body">
                                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                        style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                        {course.name} </Link>
                                        
                                    <p className="card-text">{course.name}</p>
                                     <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-success"
                                     style={{ marginRight: "10px" }}>
                                        Go </Link> 
                                        <button onClick={(event) => {
                                          event.preventDefault();
                                          setCourse(course);
                                          }}className="btn btn-warning" style={{ marginRight: "10px" }}>
                                          Edit
                                          </button>

                                        <button onClick={(event) => {
                                         event.preventDefault();
                                         deleteCourse(course._id);
                                         }} className="btn btn-danger">
                                          Delete
                                          </button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Dashboard;