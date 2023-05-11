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
    // if (user) {
    //   axios
    //     .get(
    //       `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
    //       {
    //         headers: {
    //           Authorization: `Bearer ${user.access_token}`,
    //           Accept: "application/json",
    //         },
    //       }
    //     )
    //     .then((res) => {
    //       setProfile(res.data);
    //     })
    //     .catch((err) => console.log(err));
    // }
    localStorage.removeItem("tokenHeader");
    const token: string =
      "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc3NzBiMDg1YmY2NDliNzI2YjM1NzQ3NjQwMzBlMWJkZTlhMTBhZTYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI3MDY5MTE5MDEyNzQtNHJpdTJjOGk0MDEwa3Y3amRudnVsZDhxb2FwZHM3aDEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI3MDY5MTE5MDEyNzQtNHJpdTJjOGk0MDEwa3Y3amRudnVsZDhxb2FwZHM3aDEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTU3ODY0NTU0MzEwMzEyMjE4NjMiLCJlbWFpbCI6ImFtYXJlZG9rNjAwQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoidUx2ekZWQlJsa0FyRnB5TldJekotQSIsIm5vbmNlIjoiLUdaaEU0TUFSQWs5MHVHclV4bjNBdDlFYlhWNk5KZWkxR1FCVUFtQmd2cyIsIm5hbWUiOiJNQU5HTyBLVU5HIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FHTm15eGJzY2IyRGFRSGppM2VGYUhXUktNNmZQVlR4ZjR0WGtPb09kTzRLPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6Ik1BTkdPIiwiZmFtaWx5X25hbWUiOiJLVU5HIiwibG9jYWxlIjoidGgiLCJpYXQiOjE2ODM3MzYxNzAsImV4cCI6MTY4MzczOTc3MH0.XtFzvCcBvlccAbCh4pzsq1b9YC6DclDmeW-mnMKb2us5oDbhFNtBCWPDusanLI-SagOL7jtwGsiikKGFPy0ual8GzHYQmSmQgmhqlhYnoqen_zdlmd6iWgEErfh1FCz2ffyfQ6p3qIdSbZO7qqCm1Vt9DeznbET1CFBjZDk93yTkg-lF1iDzodrAUGw_vCj0MnY8C8TvBsm8yHkWYx9uckCthJmV417D0nmUNuaiVZmWTAdx9sIylwfmNxcSpmXvk14Lx5vVgwjPqyaEz7qn_hmphXqHI4Ess5ee9pDr12yN5F8oCsnMQG-sPPR_rNtf0GPPGpZ30do5pyYhnt-u7Q";
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
