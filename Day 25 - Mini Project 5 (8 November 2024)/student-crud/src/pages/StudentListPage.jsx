import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import StudentTable from "../components/StudentTable";
import useFetchData from "../hooks/useFetchData";
import StudentHeader from "../components/StudentHeader";

export default function StudentListPage() {
  const { fetchData, data: students, loading, error } = useFetchData("/students");

  return (
    <div>
      <StudentHeader />
      <div className="card neo-shadow">
        <div className="card-body">
          <StudentTable students={students} loading={loading} error={error} fetchData={fetchData}/>
        </div>
      </div>
    </div>
  );
}
