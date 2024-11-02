import React, { Component } from "react";
import StudentHeaderContainer from "./StudentHeaderContainer";
import StudentListContainer from "./StudentListContainer.jsx";
import { getAllData, addData, updateData } from "../utils/api";
import StudentDetail from "../components/StudentDetail.jsx";
import StudentForm from "../components/StudentForm.jsx";

export default class StudentMainContainer extends Component {
  state = {
    modalForm: false,
    modalDetail: false,
    loading: false,
    error: null,
    isEdit: false,
    students: [],
    currentStudent: {
      name: "",
      class: "",
      year: "",
      nim: "",
      guardianName: "",
      address: "",
      gender: "",
    },
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

  componentDidMount() {
    this.hanldeGetAllStudents();
  }

  hanldeGetAllStudents = () => {
    this.setState({ loading: true, error: null });
    getAllData()
      .then((res) => {
        this.setState({ students: res.data });
        // console.log(res.data);
      })
      .catch((error) => {
        this.setState({ error: error.message || "Something went wrong!" });
        console.error(error);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      currentStudent: { ...this.state.currentStudent, [name]: value },
    });
  };

  handleAddStudent = () => {
    addData(this.state.currentStudent)
      .then((res) => {
        this.toogleModalForm();
        this.setState({
          currentStudent: {
            name: "",
            class: "",
            year: "",
            nim: "",
            guardian_name: "",
            address: "",
            gender: "",
          },
        });
        this.hanldeGetAllStudents();
      })
      .catch((error) => {
        this.setState({ error: error.message || "Something went wrong!" });
        console.error(error);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  handleUpdateData = () => {
    updateData(this.state.currentStudent.id, this.state.currentStudent)
      .then((res) => {
        this.toogleModalForm();
        this.setState({
          currentStudent: {
            name: "",
            class: "",
            year: "",
            nim: "",
            guardian_name: "",
            address: "",
            gender: "",
          },
        });
        this.hanldeGetAllStudents();
      })
      .catch((error) => {
        this.setState({ error: error.message || "Something went wrong!" });
        console.error(error);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  handleFormStudent = () => {
    this.setState({ loading: true, error: null });
    if (this.state.isEdit) {
      this.handleUpdateData();
    } else {
      this.handleAddStudent();
    }
  };

  render() {
    return (
      <>
        <div className="container">
          <StudentHeaderContainer toogleModalForm={this.toogleModalForm} />
          <StudentListContainer
            toogleModalForm={this.toogleModalForm}
            toogleModalDetail={this.toogleModalDetail}
            students={this.state.students}
            loading={this.state.loading}
            error={this.state.error}
            getAllData={this.hanldeGetAllStudents}
          />
        </div>
        {this.state.modalDetail && (
          <StudentDetail
            toogleModalDetail={this.toogleModalDetail}
            student={this.state.currentStudent}
          />
        )}
        {this.state.modalForm && (
          <StudentForm
            toogleModalForm={this.toogleModalForm}
            student={this.state.currentStudent}
            onChange={this.handleInputChange}
            formStudent={this.handleFormStudent}
            isEdit={this.state.isEdit}
          />
        )}
      </>
    );
  }
}
