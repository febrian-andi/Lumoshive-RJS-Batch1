import React, { Component } from "react";
import StudentTable from "../components/StudentTable";
import StudentForm from "../components/StudentForm";
import StudentDetail from "../components/StudentDetail";
import studentsData from "../data/studentsData";

export default class StudentContainer extends Component {
  state = {
    modalForm: false,
    modalDetail: false,
    isEdit: false,
    students: studentsData,
    currentStudent: {
      name: "",
      nim: "",
      birthDate: "",
      address: "",
      guardianName: "",
    },
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      currentStudent: {
        ...prevState.currentStudent,
        [name]: value,
      },
    }));
  };

  handleAddOrUpdateStudent = () => {
    const { currentStudent, isEdit, students } = this.state;

    if (isEdit) {
      this.setState((prevState) => ({
        students: prevState.students.map((student) =>
          student.nim === currentStudent.nim ? currentStudent : student
        ),
        modalForm: false,
        currentStudent: {
          name: "",
          nim: "",
          birthDate: "",
          address: "",
          guardianName: "",
        },
      }));
    } else {
      this.setState((prevState) => ({
        students: [
          ...prevState.students,
          { ...currentStudent, id: prevState.students.length + 1 },
        ],
        modalForm: false,
        currentStudent: {
          name: "",
          nim: "",
          birthDate: "",
          address: "",
          guardianName: "",
        },
      }));
    }
  };

  handleDeleteStudent = (id) => {
    this.setState((prevState) => ({
      students: prevState.students.filter((student) => student.id !== id),
    }));
  };

  toogleModalForm = (isEdit = false, student = null) => {
    if (isEdit && student) {
      this.setState({ isEdit: isEdit, currentStudent: student });
    } else {
      this.setState({
        isEdit: false,
        currentStudent: {
          name: "",
          nim: "",
          birthDate: "",
          address: "",
          guardianName: "",
        },
      });
    }
    this.setState({ modalForm: !this.state.modalForm });
  };

  toogleModalDetail = (student = null) => {
    this.setState({ modalDetail: !this.state.modalDetail });
    if (student) {
      this.setState({ currentStudent: student });
    }
  };

  render() {
    return (
      <>
        {this.state.modalForm && (
          <StudentForm
            toogleModal={this.toogleModalForm}
            student={this.state.currentStudent}
            onChange={this.handleInputChange}
            onSubmit={this.handleAddOrUpdateStudent}
            isEdit={this.state.isEdit}
          />
        )}
        {this.state.modalDetail && (
          <StudentDetail
            toogleModal={this.toogleModalDetail}
            student={this.state.currentStudent}
          />
        )}
        <StudentTable
          toogleModalForm={this.toogleModalForm}
          toogleModalDetail={this.toogleModalDetail}
          students={this.state.students}
          onDelete={this.handleDeleteStudent}
        />
      </>
    );
  }
}
