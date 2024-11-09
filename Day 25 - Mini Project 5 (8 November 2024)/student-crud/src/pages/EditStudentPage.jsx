import React from "react";
import { useParams } from "react-router-dom";
import StudentForm from "../components/StudentForm";
import useFetchData from "../hooks/useFetchData";
import { useLanguage } from "../contexts/LanguageContext";

export default function EditStudentPage() {
  const { language } = useLanguage();

  const { id } = useParams();
  const { data: student, loading, error } = useFetchData(`/students/${id}`);

  if (loading)
    return (
      <p className="text-center">
        {language === "english" ? "Loading..." : "Sedang memuat..."}
      </p>
    );

  if (error)
    return (
      <p className="text-center text-danger">
        {language === "english" ? "Error: " : "Bermasalah:"} {error}
      </p>
    );

  return (
    <div>
      <StudentForm isEdit={true} studentData={student} />
    </div>
  );
}
