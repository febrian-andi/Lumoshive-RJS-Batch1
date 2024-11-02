import React, { Component } from "react";
import StudentSearch from "../components/StudentSearch";
import AddStudentButton from "../components/AddStudentButton";
import { searchData } from "../utils/api";

export default class StudentHeaderContainer extends Component {
  state = {
    name: "",
  };

  handleInputChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleSearchStudent = () => {
    this.props.setLoading(true);
    this.props.setError(null);
    searchData(this.state.name)
      .then((res) => {
        this.props.setStudents(res.data);
      })
      .catch((error) => {
        this.props.setError(error);
        console.error(error);
      })
      .finally(() => {
        this.props.setLoading(false);
      });
  };

  render() {
    return (
      <>
        <header>
          <div className="search-container neo-shadow">
            <div className="row align-items-center g-3">
              <div className="col-md-8">
                <StudentSearch
                  name={this.state.name}
                  onChange={this.handleInputChange}
                  onSearch={this.handleSearchStudent}
                />
              </div>
              <div className="col-md-4 text-end">
                <AddStudentButton
                  toogleModalForm={this.props.toogleModalForm}
                />
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
