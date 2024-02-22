import { FaArrowDown, FaCog, FaEllipsisV, FaFileExport, FaFileImport, FaFilter, FaSearch, FaSignOutAlt } from "react-icons/fa";
import { assignments,enrollments, grades, users,courses } from "../../Database";
import { useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
function Grades() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div className="d-flex">
    <div className="flex-fill">
         <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href=""className="text-danger" style={{"textDecoration": "none"}}>
              <HiMiniBars3/>{course?.name}</a></li>
              <li className="breadcrumb-item active" aria-current="page">
    <span >Grades</span>
  </li>
          </ol>
        </nav>
      <h1>Grades</h1>
      <div className="table-responsive">
      <table width="100%">
            <tbody>
                <tr>
                    <td> 
                    </td>
                    <td>
                    <div className="float-end">
    <button className="btn btn-outline-dark" id="select-import" style={{ marginRight: '5px' }}>
        <FaFileImport /> Import
    </button>
    <button className="btn btn-outline-dark" id="select-export" style={{ marginRight: '5px' }}>
        <FaFileExport />
        <select style={{ border: 0 }}>
            <option value="Export">Export</option>
        </select>
    </button>
    <button className="btn btn-outline-dark" style={{ marginRight: '5px' }}>
        <FaCog />
    </button>
</div>

                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="text-fields-name"><h4>Student Names</h4></label>
                        <div className="input-group">
                            <span className="input-group-text"><FaSearch/></span>
                            <input className="form-control" placeholder="Search Student" />
                            <span className="input-group-text" style={{marginRight: 20}}><FaArrowDown/></span>
                        </div>
                    </td>
                    <td>
                        <label htmlFor="text-fields-assignment"><h4>Assignment Names</h4></label>
                        <div className="input-group">
                            <span className="input-group-text"><FaSearch/></span>
                            <input className="form-control" placeholder="Search Assignments" />
                            <span className="input-group-text" style={{marginRight: 20}}><FaArrowDown/></span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <br/>
        <button className="btn btn-outline-dark"><FaFilter/>Apply Filters</button><br/><br/>
        <table className="table table-striped">
          <thead className="thead-light">
            <th>Student Name</th>
            {as.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>
          <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td style={{color:'red'}}>{user?.firstName} {user?.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td><div className="input-group">
                       <input type="text" className="form-control" value={grade?.grade || ""}  />

                       <span className="input-group-text">
                          
                       </span>
                   </div>
                        </td>);})}
                </tr>);
            })}
          </tbody></table>
      </div></div></div>);
}
export default Grades;