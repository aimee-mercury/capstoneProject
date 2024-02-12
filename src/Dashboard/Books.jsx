import React, { useState } from "react";
import "./Book.css";
import { Table } from "../React  Table/Table";
import { Modal } from "../React  Table/Modal";
import Header from "./Header";
import Sidebar from "./Siderbar";

function Books() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [rowToEdit, setRowToEdit] = useState(null);
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:5000/api/v1/book/list');
  //       const data = response;
  //       console.log("#", data);
  //       console.log("Books available", response);
  //       setPosts(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:5000/api/v1/book/list');
  //       const data = await response.json();
  //       console.log('API Response:', data);
  //       console.log("Books available", data);
  //       setPosts(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  
  //   fetchData();
  // }, []);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setModalOpen(true);
  };

  const handleSend = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;
            return newRow;
          })
        );
  };

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <>
      <Header OpenSidebar={OpenSidebar} />
      <div className="book-container">
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
        <div
          className="book-dash-container"
          data-aos="fade-up"
          data-aos-duration={2000}
        >
          <div className="book-dash-form">
            <h2 className="add-book-dash">Add A Book</h2>
            <div className="dash-book-handle">
              <Table
                rows={posts}
                deleteRow={handleDeleteRow}
                editRow={handleEditRow}
              />
              <div className="dsh-add-btn-div">
                <button
                  onClick={() => setModalOpen(true)}
                  className="dsh-add-btn"
                >
                  Add
                </button>
              </div>

              {modalOpen && (
                <Modal
                  closeModal={() => {
                    setModalOpen(false);
                    setRowToEdit(null);
                  }}
                  onSubmit={handleSend}
                  defaultValue={rowToEdit !== null && rows[rowToEdit]}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Books;
