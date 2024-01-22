import React from 'react'
import './Dashboard.css'


function Dashboard() {
  return (
    <div>
         <div id="menu">
          <div className="logo">
            <img src="src/assets/Exclude.png" alt="" className="images"/>
          <h1 className="dyn">SGS Project</h1>
          </div>
          <div className="items"> 
       <li><a href="#">Dashboard</a></li>
       <li><a href="#">Admin</a></li>
       <li><a href="#">Manager</a></li>
       <li><a href="#">Users</a></li>
       <li><a href="#">Employees</a></li>
       <li><a href="#">Garages</a></li>
       <li><a href="#">Financial  Details</a></li>
       <li><a href="#">Row Materials</a></li>                   
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
                  <img src="src/assets/settings.svg" alt="" />
                  <img src="src/assets/notifications.svg" alt="" className='svg'/>
                    <img src="src/assets/1image.jpg"/>
                </div>
            </div>
                <h1 className='i-name'>Dashboard</h1>
        </div>
        <div className="values">
  <div className="val-box1">
    <i></i>
    <div>
      <h3 className='dashboard-head-numbers'>8,267</h3>
      <span className='dashboard-span'>New Users</span>
    </div>
  </div>
  <div className="val-box2">
    <i></i>
    <div>
      <h3 className='dashboard-head-numbers'>17</h3>
      <span className='dashboard-span'>New Employees</span>
    </div>
  </div>
  <div className="val-box3">
    <i></i>
    <div>
      <h3 className='dashboard-head-numbers'>27</h3>
      <span className='dashboard-span'>New Books</span>
    </div>
  </div>
  <div className="val-box4">
    <i></i>
    <div>
      <h3 className='dashboard-head-numbers'>$900</h3>
      <span className='dashboard-span'>New Income</span>
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
               <h5>Rachel Mutoni</h5>
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
              {/* <img src="src/assets/1image.jpg" alt="" /> */}
            <div>
               <h5 className='dashboard-headings'>Lydie Ingabire</h5>
               <p className='dashboard-paragraphs'>lydiengabire@gmail.com</p>
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
               <h5 className='dashboard-headings'>Munezero Christian</h5>
               <p className='dashboard-paragraphs'>munezerochris@gmail.com</p>
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
               <h5 className='dashboard-headings'>Ncuti Vencheur</h5>
               <p className='dashboard-paragraphs'>ncutivencheur@gmail.com</p>
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
