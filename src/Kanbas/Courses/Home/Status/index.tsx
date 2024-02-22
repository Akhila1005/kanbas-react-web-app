/* eslint-disable jsx-a11y/anchor-is-valid */
import "./index.css";
import { AiOutlineStop, AiOutlineCloudDownload } from "react-icons/ai";
import { FaCheckCircle, FaRegBell, FaCalendarAlt } from "react-icons/fa";
import React from 'react';
import { FaBullhorn, FaBullseye, FaChartBar, FaChevronCircleRight, FaCross, FaFileImport, FaRemoveFormat } from 'react-icons/fa';
import { redirect } from 'react-router';


function Status() {
    return (


        <div className=" wd-modules-container cust-subcol-right flex-grow-0 me-2 d-none d-lg-block wd-publish">
            <h5>Course Status</h5>
            <div style={{ display: 'flex' }}>
  <button type="button" className="btn btn-outline-secondary unpublished" style={{ marginRight: '5px', paddingRight: '0', paddingLeft: '0' }}>
    <span style={{ display: 'inline-flex', alignItems: 'center' }}>
      <AiOutlineStop style={{ marginRight: '5px' }} /> Unpublish
    </span>
  </button>
  <button type="button" className="btn btn-success published" style={{ paddingRight: '0', paddingLeft: '0' }}>
    <span style={{ display: 'inline-flex', alignItems: 'center' }}>
      <FaCheckCircle style={{ marginRight: '5px' }} /> Published
    </span>
  </button>
</div>




            <div>
      <div style={{display: 'flex', flexDirection: 'column', width: 240}}>
        <a href="#" className="btn btn-outline-secondary" style={{textAlign: 'left', margin: 5}}><FaFileImport/> Import Existing Content</a>
        <a href="#" className="btn btn-outline-secondary" style={{textAlign: 'left', margin: 5}}><FaChevronCircleRight/> Import From Commons</a>
        <a href="#" className="btn btn-outline-secondary" style={{textAlign: 'left', margin: 5}}><FaBullseye/> Choose Home Page</a>
        <a href="#" className="btn btn-outline-secondary" style={{textAlign: 'left', margin: 5}}><FaChartBar/> View Course Stream</a>
        <a href="#" className="btn btn-outline-secondary" style={{textAlign: 'left', margin: 5}}><FaBullhorn/> New Announcement</a>
        <a href="#" className="btn btn-outline-secondary" style={{textAlign: 'left', margin: 5}}><FaChartBar/> New Analytics</a>
        <a href="#" className="btn btn-outline-secondary" style={{textAlign: 'left', margin: 5}}><FaRegBell/> View Course Notificatons</a>
    </div>

                    
      <h3>To Do</h3>
      <hr/>
      <ul>
        <li><a style={{color: 'red'}} href="#">Lecture CS4550.12631.202410 Sep 7 at 11:45am</a></li>
        <li><a style={{color: 'red'}} href="#">Lecture CS4550.12631.202410 Sep 11 at 11:45am</a></li>
        <li><a style={{color: 'red'}} href="#">CS 5610 06 SP23 Lecture Sep 11 at 6pm</a></li>
      </ul>
    </div>
        </div>

    );
}
export default Status