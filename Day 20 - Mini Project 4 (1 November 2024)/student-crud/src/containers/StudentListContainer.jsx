import React, { Component } from "react";
import StudentTable from "../components/StudentTable";
import { deleteData } from "../utils/api";
import Swal from 'sweetalert2'

export default class StudentListContainer extends Component {
  handleDeleteStudent = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FC4646FF",
      cancelButtonColor: "#28C8BEFF",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      backdrop: "#00000092",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteData(id)
          .then((res) => {
            this.props.getAllData();
            Swal.fire({
              title: "Deleted!",
              text: "Your data has been deleted.",
              icon: "success",
              confirmButtonText: "OK",
            });
            console.log(res);
          })
          .catch((error) => {
            Swal.fire({
              title: "Error!",
              text: "There was a problem deleting the data.",
              icon: "error",
              confirmButtonText: "OK",
            });
            console.error(error);
          });
      }
    });
  };

  render() {
    return (
      <div className="card neo-shadow">
        <div className="card-body">
          <StudentTable
            students={this.props.students}
            loading={this.props.loading}
            error={this.props.error}
            onDelete={this.handleDeleteStudent}
            toogleModalForm={this.props.toogleModalForm}
            toogleModalDetail={this.props.toogleModalDetail}
          />
        </div>
      </div>
    );
  }
}
