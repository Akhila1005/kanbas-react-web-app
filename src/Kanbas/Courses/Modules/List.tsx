
import React, { useState } from "react";
import "./index.css";
import { modules,courses } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaArrowDown, FaCaretDown, FaCaretRight, FaLink } from "react-icons/fa";
import { useParams } from "react-router";
import { HiMiniBars3 } from "react-icons/hi2";
function ModuleList() {
  type Module = {
    _id: string;
    name: string;
    lessons?: { _id: string; name: string }[];
    course: string;
  };
  
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState<Module | null>(modulesList[0]);
  
  const toggleModule = (module: Module) => {
    setSelectedModule((prevModule) => (prevModule === module ? null : module));
  };
  return (
    <>

        <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href=""className="text-danger" style={{"textDecoration": "none"}}>
              <HiMiniBars3 />  {course?.name}</a></li>
              <li className="breadcrumb-item active" aria-current="page">
    <span >Modules</span>
  </li>
          </ol>
        </nav>
        <button className="btn btn-outline-secondary" style={{marginRight: '10px'}}>Collapse All</button>
<button className="btn btn-outline-secondary" style={{marginRight: '10px'}}>View Progress</button>
<button className="btn btn-outline-secondary" style={{marginRight: '10px'}}>
    <FaCheckCircle className="text-success"/>
    <select style={{border: 0, marginLeft: '5px'}}>
        <option>Publish All</option>
        <option>Unpublish All</option>
        <option>Unpublish All</option>
    </select>
</button>
<button className="btn btn-danger" style={{marginLeft: '10px'}}> + Module</button>

        <button className="btn btn-outline-secondary" style={{marginLeft: '10px'}}><FaEllipsisV/></button>
      </div>
      <hr/>
      <ul className="list-group wd-modules">
        {modulesList.map((module) => (
          <li
            className="list-group-item"
            onClick={() => toggleModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {selectedModule === module ? (
                <FaCaretDown className="me-2" />
              ) : (
                <FaCaretRight className="me-2" />
              )}
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaCaretDown className="ms-2" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule === module && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    <FaLink className="me-2"/>
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;