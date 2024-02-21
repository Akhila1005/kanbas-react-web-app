import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
function Dashboard() {
    //console.log(courses);
    return (
        <>
        {courses[0].name}
        <div className="d-flex">
            <h1>Dashboard</h1>              <hr />
            <h2>Published Courses (8)</h2> <hr />
            <div className="row">
                
            </div>
        </div>

        </>
    );
}
export default Dashboard;