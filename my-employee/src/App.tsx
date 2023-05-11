import { Routes, Route } from "react-router-dom";
import {
  CreateEmployee,
  Home,
  Login,
  EditEmployee,
  Profile,
  CreateWorkHistory,
  EditWorkHistory,
  CreateCertificate,
  EditCertificate,
  CreateEducation,
  EditEducation,
  Search,
} from "./pages/user";
import {
  LoginAdmin,
  HomeAdmin,
  LevelPage,
  CreateLevel,
  EditLevel,
  TitleNamePage,
  CreateTitleName,
  EditTitleName,
  GenderPage,
  CreateGender,
  EditGender,
  DepartmentPage,
  CreateDepartment,
  EditDepartment,
  PositionPage,
  CreatePosition,
  EditPosition,
} from "./pages/admin";

import { getToken } from "./services/token";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { CheckLogin } from "./components";

function App() {
  useEffect(() => {
    localStorage.removeItem("tokenHeader");
    const token: string =
      "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc3NzBiMDg1YmY2NDliNzI2YjM1NzQ3NjQwMzBlMWJkZTlhMTBhZTYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI3MDY5MTE5MDEyNzQtNHJpdTJjOGk0MDEwa3Y3amRudnVsZDhxb2FwZHM3aDEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI3MDY5MTE5MDEyNzQtNHJpdTJjOGk0MDEwa3Y3amRudnVsZDhxb2FwZHM3aDEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTU3ODY0NTU0MzEwMzEyMjE4NjMiLCJlbWFpbCI6ImFtYXJlZG9rNjAwQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiTzJJbkdxcERMbEMtWVE4NHFjbDFmUSIsIm5vbmNlIjoiN1Q5QmJ4U3N4N09iWDYwRUVZM0liYnpMV29VTTl0M3lHQUl0dUlTMEVNcyIsIm5hbWUiOiJNQU5HTyBLVU5HIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FHTm15eGJzY2IyRGFRSGppM2VGYUhXUktNNmZQVlR4ZjR0WGtPb09kTzRLPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6Ik1BTkdPIiwiZmFtaWx5X25hbWUiOiJLVU5HIiwibG9jYWxlIjoidGgiLCJpYXQiOjE2ODM3OTczMDYsImV4cCI6MTY4MzgwMDkwNn0.UHVZzucd4PE9abYwPWh4A3IgArdZdkj8CyilIvn0qHW4HU1_Vn2_uGuhKSnGM1EiBLMNOUQKKH9CkUKod3SOlMNWUbzGrhS5EkRlU2BuD62tiiA2JSUjdQQXv2jlySZjOp9eRyDsJvi-iSu2v7hkf2PmBWCw_6PP_hW3eIGuLPokV3IdNXqf0h1d5w4XbjjdHhvwpGS7eYPah8HhdXnlER55GEgl6XvEooC8HJcQgGht2GWMPT0rLXRhV5wGaqc6FVYOzR4IYKzF5zeFGy-2Iapyus62UdJ1b3VNVYyn5We1-CzaTeZs4RAcoJYOy4YhvFR5rSUDLysA7v9IDw8EMQ";
    localStorage.setItem("tokenHeader", token);
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/employee" element={<CreateEmployee />} />
      <Route path="/search" element={<Search />} />
      <Route path="/profile/edit/:code" element={<EditEmployee />} />
      <Route path="/profile/:code" element={<Profile />} />
      <Route path="/work_history" element={<CreateWorkHistory />} />
      <Route path="/work_history/edit" element={<EditWorkHistory />} />
      <Route path="/certificate" element={<CreateCertificate />} />
      <Route path="/certificate/edit" element={<EditCertificate />} />
      <Route path="/education" element={<CreateEducation />} />
      <Route path="/education/edit" element={<EditEducation />} />
      <Route path="/admin/login" element={<LoginAdmin />} />
      <Route path="/admin/home" element={<HomeAdmin />} />
      <Route path="/admin/home/level" element={<LevelPage />} />
      <Route path="/admin/home/level/edit/:code" element={<EditLevel />} />
      <Route path="/admin/home/level/create" element={<CreateLevel />} />
      <Route path="/admin/home/title_name" element={<TitleNamePage />} />
      <Route
        path="/admin/home/title_name/create"
        element={<CreateTitleName />}
      />
      <Route
        path="/admin/home/title_name/edit/:code"
        element={<EditTitleName />}
      />
      <Route path="/admin/home/gender" element={<GenderPage />} />
      <Route path="/admin/home/gender/create" element={<CreateGender />} />
      <Route path="/admin/home/gender/edit/:code" element={<EditGender />} />
      <Route path="/admin/home/department" element={<DepartmentPage />} />
      <Route
        path="/admin/home/department/create"
        element={<CreateDepartment />}
      />
      <Route
        path="/admin/home/department/edit/:code"
        element={<EditDepartment />}
      />
      <Route path="/admin/home/position" element={<PositionPage />} />
      <Route path="/admin/home/position/create" element={<CreatePosition />} />
      <Route
        path="/admin/home/position/edit/:code"
        element={<EditPosition />}
      />
      <Route
        path="/profile/certificate/:code"
        element={<CreateCertificate />}
      />
      <Route
        path="/profile/certificate/edit/:code"
        element={<EditCertificate />}
      />

      <Route path="/profile/work/:code" element={<CreateWorkHistory />} />
      <Route path="/profile/work/edit/:code" element={<EditWorkHistory />} />

      <Route path="/profile/education/:code" element={<CreateEducation />} />
      <Route path="/profile/education/edit/:code" element={<EditEducation />} />
    </Routes>
  );
}

export default App;
