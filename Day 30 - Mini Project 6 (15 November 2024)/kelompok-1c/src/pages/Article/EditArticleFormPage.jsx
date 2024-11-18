import React from 'react';
import { useLocation } from 'react-router-dom';
import ArticleForm from 'components/Article/ArticleForm';

const EditArticleFormPage = () => {
  const location = useLocation();
  const article = location.state;

  return <ArticleForm isEdit article={article} />;
};

export default EditArticleFormPage;
