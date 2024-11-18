import React from 'react';
import { useLocation } from 'react-router-dom';
import AboutUsForm from 'components/AboutUs/AboutUsForm';

const EditAboutUsFormPage = () => {
  const location = useLocation();
  const data = location.state;

  return <AboutUsForm isEdit data={data} />;
};

export default EditAboutUsFormPage;
