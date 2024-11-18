import React from 'react';
import { useLocation } from 'react-router-dom';
import PortfolioForm from 'components/Portfolio/PortfolioForm';

const EditPortfolioFormPage = () => {
  const location = useLocation();
  const portfolio = location.state;

  return <PortfolioForm isEdit portfolio={portfolio} />;
};

export default EditPortfolioFormPage;
