import React, { useEffect, useState } from "react";
import axios from "axios";
function WorkingWithObjects() {
  const API_BASE = process.env.REACT_APP_API_BASE;
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const ASSIGNMENT_URL = `${API_BASE}/a5/assignment`
  const [module, setModule] = useState({
    id: 1, name: "Web Development",
    description: "Web Development using NodeJS",
    course: "CS 5610 Web Development",
  });
  const MODULE_URL = `${API_BASE}/a5/module`;
  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios
      .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);
  return (
    <div>
      <h3>Working With Objects</h3>
      <h3>Modifying Properties</h3>
      <input onChange={(e) => setAssignment({
            ...assignment, title: e.target.value })}
        value={assignment.title} type="text" className="form-control mb-2" />
      <button onClick={updateTitle} className="btn btn-primary" style={{ marginRight: '10px' }}>
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment} className="btn btn-success" >
        Fetch Assignment
      </button>

      <h4>Modifying Properties</h4>
      <div className="form-control mb-2">
        <div className="row">
          <div className="col-sm-2">
            <input type="text" className="form-control mb-2"
              onChange={(e) => setAssignment({ ...assignment,
                  title: e.target.value })}
              value={assignment.title}/>
            </div>
            <div className="col-sm-2">
            <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`} className="btn btn-primary">
              Update Title
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <input type="number" className="form-control mb-2"
              onChange={(e) => setAssignment({ ...assignment,
                  score: Number(e.target.value )})}
              value={assignment.score}/>
          </div>
          <div className="col-sm-2">
            <a href={`${ASSIGNMENT_URL}/score/${assignment.score}`} className="btn btn-primary">
              Update Score
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <input type="checkbox"
              onChange={(e) => setAssignment({ ...assignment,
                  completed: e.target.checked})}
                  checked = {assignment.completed}/>
          </div>
          <div className="col-sm-2">
            <a href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`} className="btn btn-primary">
              Update Completed
            </a>
          </div>
        </div>
      </div>
      <div className="form-control mb-2">
        <div className="row">
          <div className="col-sm-2">
          <input type="text" className="form-control mb-2"
            onChange={(e) => setModule({ ...module,
                name: e.target.value })}
            value={module.name}/>
          </div>
          <div className="col-sm-2">
          <a href={`${MODULE_URL}/name/${module.name}`} className="btn btn-danger">
            Update Module Name
          </a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
          <input type="text" className="form-control"
            onChange={(e) => setModule({ ...module,
                description: e.target.value })}
            value={module.description}/>
          </div>
          <div className="col-sm-2">
          <a href={`${MODULE_URL}/description/${module.description}`} className="btn btn-danger">
            Update Description
          </a>
          </div>
        </div>
      </div>
      <h4>Retrieving Objects</h4>
      <a href={API_BASE + "/a5/assignment"} className="btn btn-primary"style={{ marginRight: '10px' }}>
        Get Assignment
      </a>
      <a href={API_BASE + "/a5/module"} className="btn btn-danger">
        Get Module
      </a>
      <h4>Retrieving Properties</h4>
      <a href={API_BASE + "/a5/assignment/title"} className="btn btn-primary" style={{ marginRight: '10px' }}>
        Get Title
      </a>
      <a href={API_BASE + "/a5/module/name"} className="btn btn-danger">
        Get Module Name
      </a>
    </div>
  );
}
export default WorkingWithObjects;