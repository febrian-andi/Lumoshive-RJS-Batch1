import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import StudentTable from "../components/StudentTable";
import useFetchData from "../hooks/useFetchData";
import StudentHeader from "../components/StudentHeader";

export default function StudentListPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [search, setSearch] = useState(params.get("find") || "");

  useEffect(() => {
    const searchParam = params.get("find") || "";
    if (search !== searchParam) {
      setSearch(searchParam);
    }
  }, [location]);

  const endpoint = search ? `/students?find=${search}` : "/students";
  const { fetchData, data: students, loading, error } = useFetchData(endpoint);

  return (
    <div>
      <StudentHeader search={search} setSearch={setSearch}/>
      <div className="card neo-shadow">
        <div className="card-body">
          <StudentTable students={students} loading={loading} error={error} fetchData={fetchData}/>
        </div>
      </div>
    </div>
  );
}
