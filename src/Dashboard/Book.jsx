import React from 'react'
import './Dashboard.css'
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import employeeprofile from '../assets/avatar-profile.webp'

function Book() {
  return (
    <div id='book'>
      <div className="board">
      <table width="100%">
        <thead> 
          <tr className='tittles'>
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
              <img src={employeeprofile} alt="" />
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
            <td className="edit"><a href="#"><CiEdit /></a></td>
            <td className="edit"><a href="#"><MdDeleteOutline /></a></td>
          </tr>
          <tr>
            <td className="people">
              <img src={employeeprofile} alt="" />
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
            <td className="edit"><a href="#"><CiEdit /></a></td>
            <td className="edit"><a href="#"><MdDeleteOutline /></a></td>
          </tr>
          <tr>
            <td className="people">
              <img src={employeeprofile} alt="" />
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
            <td className="edit"><a href="#"><CiEdit /></a></td>
            <td className="edit"><a href="#"><MdDeleteOutline /></a></td>
          </tr>
          <tr>
            <td className="people">
              <img src={employeeprofile} alt="" />
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
            <td className="edit"><a href="#"><CiEdit /></a></td>
            <td className="edit"><a href="#"><MdDeleteOutline /></a></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Book
