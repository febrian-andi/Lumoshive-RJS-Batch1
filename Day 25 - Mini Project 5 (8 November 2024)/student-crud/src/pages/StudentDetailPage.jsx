import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import StudentDetail from "../components/StudentDetail";
import { useLanguage } from "../contexts/LanguageContext";

export default function StudentDetailPage() {
  const { language } = useLanguage();

  const { id } = useParams();
  const { data: student, loading, error } = useFetchData(`/students/${id}`);

  return (
    <div className="modal-body mx-auto">
      {loading && (
        <div className="text-center">
          {language === "english" ? "Loading..." : "Sedang memuat..."}
        </div>
      )}
      {error && (
        <div className="text-center text-danger">
          {error}
          <br />
          {language === "english"
            ? "Please reload page"
            : "Silahkan muat ulang halaman"}
        </div>
      )}
      {!loading && !error && !student && (
        <div className="text-center">
          {language === "english" ? "Not found data" : "}Data tidak ditemukan"}
        </div>
      )}
      {student && <StudentDetail student={student} />}
    </div>
  );
}
