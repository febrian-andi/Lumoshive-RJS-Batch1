import React from 'react';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import ProtectedRoute from 'components/Shared/ProtectedRoute';
import DashboardLayout from 'layouts/DashboardLayout';
import AboutUsPage from 'pages/AboutUs/AboutUsPage';
import LoginPage from 'pages/Auth/LoginPage';
import RegisterPage from 'pages/Auth/RegisterPage';
import ExpertisePage from 'pages/ExpertisePage';
import OverviewPage from 'pages/OverviewPage';
import PortfolioPage from 'pages/Portfolio/PortfolioPage';
import SubscribePage from 'pages/SubscribePage';
import TeamPage from 'pages/TeamPage';
import TestimonialPage from 'pages/TestimonialPage';
import WhatWeDoPage from 'pages/WhatWeDoPage';

<<<<<<< HEAD
import AddAboutUsFormPage from './pages/AboutUs/AddAboutUsFormPage';
import EditAboutUsFormPage from './pages/AboutUs/EditPortfolioFormPage';
import AddArticleFormPage from './pages/Article/AddArticleFormPage';
import EditArticleFormPage from './pages/Article/EditArticleFormPage';
import ArticlePage from './pages/Article/ArticlePage';
=======
import AddAboutUsFormPage from 'pages/AboutUs/AddAboutUsFormPage';
import EditAboutUsFormPage from 'pages/AboutUs/EditPortfolioFormPage';
import ArticleFormPage from './pages/ArticleFormPage';
import ArticlePage from './pages/ArticlePage';
>>>>>>> 6879aad10b3ff39781943c4c55fe2caec11686ca
import ContactPage from './pages/ContactPage';
import ExpertiseFormPage from './pages/ExpertiseFormPage';
import AddPortfolioFormPage from 'pages/Portfolio/AddPortfolioFormPage';
import EditPortfolioFormPage from 'pages/Portfolio/EditPortfolioFormPage';
import TeamFormPage from './pages/TeamFormPage';
import TestimonialFormPage from './pages/TestimonialFormPage';
import WhatWeDoFormPage from './pages/WhatWeDoFormPage';

import ArticleDetailPage from 'pages/Article/ArticleDetailPage';
import PortfolioDetailPage from 'pages/Portfolio/PortfolioDetailPage';

const App = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        {/* Public Routes */}
        <Route element={<LoginPage />} path="/" />
        <Route element={<RegisterPage />} path="/register" />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route element={<OverviewPage />} path="/dashboard" />
            <Route element={<AboutUsPage />} path="/dashboard/about-us" />
            <Route
              element={<AddAboutUsFormPage />}
              path="/dashboard/about-us/add"
            />
            <Route
              element={<EditAboutUsFormPage />}
              path="/dashboard/about-us/edit"
            />
            <Route element={<ArticlePage />} path="/dashboard/articles" />
            <Route element={<ArticleDetailPage />} path="/dashboard/articles/:id" />
            <Route
              element={<AddArticleFormPage />}
              path="/dashboard/articles/add"
            />
            <Route
              element={<EditArticleFormPage />}
              path="/dashboard/articles/edit/:id"
            />
            <Route element={<ContactPage />} path="/dashboard/contact" />
            <Route element={<ExpertisePage />} path="/dashboard/expertise" />
            <Route
              element={<ExpertiseFormPage />}
              path="/dashboard/expertise/add"
            />
            <Route
              element={<ExpertiseFormPage />}
              path="/dashboard/expertise/edit/:id"
            />
            <Route element={<PortfolioPage />} path="/dashboard/portfolio" />
            <Route element={<PortfolioDetailPage />} path="/dashboard/portfolio/:id" />
            <Route
              element={<AddPortfolioFormPage />}
              path="/dashboard/portfolio/add"
            />
            <Route
              element={<EditPortfolioFormPage />}
              path="/dashboard/portfolio/edit/:id"
            />
            <Route element={<SubscribePage />} path="/dashboard/subscribe" />
            <Route element={<TeamPage />} path="/dashboard/team" />
            <Route element={<TeamFormPage />} path="/dashboard/team/add" />
            <Route element={<TeamFormPage />} path="/dashboard/team/edit/:id" />
            <Route
              element={<TestimonialPage />}
              path="/dashboard/testimonials"
            />
            <Route
              element={<TestimonialFormPage />}
              path="/dashboard/testimonials/add"
            />
            <Route
              element={<TestimonialFormPage />}
              path="/dashboard/testimonials/edit/:id"
            />
            <Route element={<WhatWeDoPage />} path="/dashboard/what-we-do" />
            <Route
              element={<WhatWeDoFormPage />}
              path="/dashboard/what-we-do/add"
            />
            <Route
              element={<WhatWeDoFormPage />}
              path="/dashboard/what-we-do/edit/:id"
            />
          </Route>
        </Route>

        {/* Fallback */}
        <Route element={<LoginPage />} path="*" />

      </Routes>
    </Router>
  );
};

export default App;
