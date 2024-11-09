import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useDeleteData from "../hooks/useDeleteData";
import { useLanguage } from "../contexts/LanguageContext";

function Loading({ language }) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="spinner-border text-primary" role="status"></div>
      <p>{language === "english" ? "Loading..." : "Sedang memuat..."}</p>
    </div>
  );
}

function Error({ message }) {
  return (
    <div className="d-flex justify-content-center text-danger">{message}</div>
  );
}

function StudentRow({ student, index, fetchData }) {
  const { deleteData, loading } = useDeleteData();

  const handleDelete = () => {
    deleteData(`/students/${student.id}`, fetchData);
  };

  return (
    <tr>
      <td className="text-center">{index + 1}</td>
      <td>{student.nim}</td>
      <td>{student.name}</td>
      <td>{student.class}</td>
      <td className="text-center">
        <Link to={`/detail-student/${student.id}`}>
          <button className="neo-button btn-detail" disabled={loading}>
            <i className="bi bi-eye"></i>
          </button>
        </Link>
        <Link to={`/edit-student/${student.id}`}>
          <button className="neo-button btn-update mx-2 my-2 my-md-0" disabled={loading}>
            <i className="bi bi-pencil"></i>
          </button>
        </Link>
        <button onClick={handleDelete} className="neo-button btn-delete" disabled={loading}>
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  );
}

function StudentTableContent({ students, fetchData, language }) {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th className="text-center">NIM</th>
            <th className="text-center">
              {language === "english" ? "Name" : "Nama"}
            </th>
            <th className="text-center">
              {language === "english" ? "Class" : "Kelas"}
            </th>
            <th className="text-center">
              {language === "english" ? "Action" : "Aksi"}
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <StudentRow
              key={index}
              student={student}
              index={index}
              fetchData={fetchData}
              language={language}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function StudentTable({ students, loading, error, fetchData }) {
  const { language } = useLanguage();

  if (loading) return <Loading language={language}/>;
  if (error) return <Error message={error} />;
  if (students.length === 0)
    return language === "english" ? (
      <Error message="No data found" />
    ) : (
      <Error message="Data tidak ditemukan" />
    );
  return <StudentTableContent students={students} fetchData={fetchData} language={language}/>;
}

StudentTable.propTypes = {
  students: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  fetchData: PropTypes.func.isRequired,
};
