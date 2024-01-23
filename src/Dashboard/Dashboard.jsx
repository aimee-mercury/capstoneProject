import React from 'react'
import './Dashboard.css'
import { IoIosNotificationsOutline } from "react-icons/io";
import logo from '../assets/1.jpg'
import profile from '../assets/avatar-profile.webp'

function Dashboard() {
  return (
    <div className='whole-dashboard'>
         <div id="menu">
          <div className="logo">
            <img src={logo} alt="" className="logo-images"/>
          <h1 className="dyn">LMS Project</h1>
          </div>
          <div className="items"> 
       <li><a href="#" >Dashboard</a></li>
       <li><a href="#">Books</a></li>
       <li><a href="#">Members</a></li>
       <li><a href="#">Settings</a></li>
       <li><a href="#">Financial  Details</a></li>
       <li><a href="#">Help</a></li>                  
    </div>
         </div>
       <div className='interf-section'>
      <div className="interface">
            <div className="navigation">
                <div className="n1">
                <img src="src/assets/search.svg" alt=""/>
                    <div className="search">
                        <input type="text" placeholder="search" />
                    </div>
                </div>
                <div className="profile">
                <div><IoIosNotificationsOutline className='dashboard-notify-icon'/></div>
                <div><img  src={profile} alt="" /></div>
                </div>
            </div>
                <h1 className='i-name'>Dashboard</h1>
        </div>
        <div className="values">
  <div className="val-box1">
    <i></i>
    <div>
      <h3 className='dashboard-head-numbers'>8,267</h3>
      <span className='dashboard-span'>Users</span>
    </div>
  </div>
  <div className="val-box2">
    <i></i>
    <div>
      <h3 className='dashboard-head-numbers'>17</h3>
      <span className='dashboard-span'>Employees</span>
    </div>
  </div>
  <div className="val-box3">
    <i></i>
    <div>
      <h3 className='dashboard-head-numbers'>19, 027</h3>
      <span className='dashboard-span'>Books</span>
    </div>
  </div>
  <div className="val-box4">
    <i></i>
    <div>
      <h3 className='dashboard-head-numbers'>$19, 000</h3>
      <span className='dashboard-span'>Income</span>
    </div>
  </div>
    </div> 
    <div className="board">
      <table width="100%">
        <thead> 
          <tr>
            <td>Names</td>
            <td>Title</td>
            <td>Status</td>
            <td>Role</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td className="people">
              <img src="src/assets/1image.jpg" alt="" />
            <div>
               <h5 className='dashboard-headings'>Rachel Mutoni</h5>
               <p className='dashboard-paragraphs'>mutonirachel20@gmail.com</p>
            </div>
            </td>
            <td className="people-des">
              <h5 className='dashboard-headings'>Frontend Engineer</h5>
              <p className='dashboard-paragraphs'>Web developer</p>
            </td>
            <td className="active">
              <p className='dashboard-paragraphs'>Active</p>
              </td>
            <td className="role">
              <p className='dashboard-paragraphs'>Founder</p>
            </td>
            <td className="edit"><a href="#">Edit</a></td>
          </tr>
          <tr>
            <td className="people">
              <img src="src/assets/1image.jpg" alt="" />
            <div>
               <h5 className='dashboard-headings'>Ingabire Marie Aimee</h5>
               <p className='dashboard-paragraphs'>marieaimee@gmail.com</p>
            </div>
            </td>
            <td className="people-des">
              <h5 className='dashboard-headings'>Frontend Engineer</h5>
              <p className='dashboard-paragraphs'>Web developer</p>
            </td>
            <td className="active">
              <p className='dashboard-paragraphs'>Active</p>
              </td>
            <td className="role">
              <p className='dashboard-paragraphs'>Cofounder</p>
            </td>
            <td className="edit"><a href="#">Edit</a></td>
          </tr>
          <tr>
            <td className="people">
              {/* <img src="src/assets/1image.jpg" alt="" /> */}
            <div>
               <h5 className='dashboard-headings'>Gihozo alice </h5>
               <p className='dashboard-paragraphs'>gihalice@gmail.com</p>
            </div>
            </td>
            <td className="people-des">
              <h5 className='dashboard-headings'>Software Engineer</h5>
              <p className='dashboard-paragraphs'>full stack developer</p>
            </td>
            <td className="active">
              <p className='dashboard-paragraphs'>Active</p></td>
            <td className="role">
              <p className='dashboard-paragraphs'>Cofounder</p>
            </td>
            <td className="edit"><a href="#">Edit</a></td>
          </tr>
          <tr>
            <td className="people">
              {/* <img src="src/assets/1image.jpg" alt="" /> */}
            <div>
               <h5 className='dashboard-headings'>Mutoni liliane </h5>
               <p className='dashboard-paragraphs'>mutonilili@gmail.com</p>
            </div>
            </td>
            <td className="people-des">
              <h5 className='dashboard-headings'>Backend Engineer</h5>
              <p className='dashboard-paragraphs'>Developer</p>
            </td>
            <td className="active"><p>Active</p></td>
            <td className="role">
              <p className='dashboard-paragraphs'>Cofounder</p>
            </td>
            <td className="edit"><a href="#">Edit</a></td>
          </tr>
          </tbody>
        </table>
      </div>
      </div>
    </div>
  )
}

export default Dashboard
