import React, { Component } from "react";
import StudentSearch from "../components/StudentSearch";
import AddStudentButton from "../components/AddStudentButton";

export default class StudentHeaderContainer extends Component {

  render() {
    return (
      <>
        <header>
          <div className="search-container neo-shadow">
            <div className="row align-items-center g-3">
              <div className="col-md-8">
                <StudentSearch />
              </div>
              <div className="col-md-4 text-end">
                <AddStudentButton toogleModalForm={this.props.toogleModalForm} />
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
