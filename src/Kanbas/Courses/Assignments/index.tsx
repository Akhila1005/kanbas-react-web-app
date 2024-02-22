import React from "react";
import { FaCaretDown, FaCheckCircle, FaEdit, FaEllipsisV, FaList, FaListAlt, FaPlus, FaPlusCircle, FaRegPlusSquare } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { courses,assignments } from "../../Database";
function Assignments() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
    <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href=""className="text-danger" style={{"textDecoration": "none"}}>
              {course?.name}</a></li>
              <li className="breadcrumb-item active" aria-current="page">
    <span className="text-danger">Assignments</span>
  </li>
          </ol>
        </nav>
    <div className="d-flex">
    <div className="flex-fill">
      <span>
      <span className="float-end">
    <button className="btn btn-outline-secondary" style={{ marginRight: '5px' }}>
        <FaPlus /> Group
    </button>
    <button className="btn btn-danger" style={{ marginRight: '5px' }}>
        <FaPlus /> Assignment
    </button>
    <button className="btn btn-outline-secondary" style={{ marginRight: '5px' }}>
        <FaEllipsisV />
    </button>
</span>

        <input type="text" className="form-control w-50" id="assignmentSearch" placeholder="Search for Assignment"/>
      </span>
      </div>
      </div>
      <hr/>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> <FaCaretDown className="me-2"/> ASSIGNMENTS
            <span className="float-end">
              <span className="border me-3" style={{borderRadius: 40, width: 120, textAlign: "center"}}>40% of Total</span>
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item" >
                <FaEllipsisV className="me-2" />
                <FaEdit className="me-2"/>
                <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span><br/>
                <span style={{fontSize: 10}}><a style={{color:"red"}}>{assignment.module}</a> | {assignment.due} | {assignment.points}</span>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;
