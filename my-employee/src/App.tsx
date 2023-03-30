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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/employee" element={<CreateEmployee />} />
      <Route path="/employee/edit" element={<EditEmployee />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/work_history" element={<CreateWorkHistory />} />
      <Route path="/work_history/edit" element={<EditWorkHistory />} />
      <Route path="/certificate" element={<CreateCertificate />} />
      <Route path="/certificate/edit" element={<EditCertificate />} />
      <Route path="/education" element={<CreateEducation />} />
      <Route path="/education/edit" element={<EditEducation />} />

      <Route path="/admin_login" element={<LoginAdmin />} />
      <Route path="/admin_home" element={<HomeAdmin />} />
      <Route path="/level" element={<LevelPage />} />
      <Route path="/level/edit" element={<EditLevel />} />
      <Route path="/level/create" element={<CreateLevel />} />
      <Route path="/title_name" element={<TitleNamePage />} />
      <Route path="/title_name/create" element={<CreateTitleName />} />
      <Route path="/title_name/edit" element={<EditTitleName />} />
      <Route path="/gender" element={<GenderPage />} />
      <Route path="/gender/create" element={<CreateGender />} />
      <Route path="/gender/edit" element={<EditGender />} />
      <Route path="/department" element={<DepartmentPage />} />
      <Route path="/department/create" element={<CreateDepartment />} />
      <Route path="/department/edit" element={<EditDepartment />} />
      <Route path="/position" element={<PositionPage />} />
      <Route path="/position/create" element={<CreatePosition />} />
      <Route path="/position/edit" element={<EditPosition />} />
    </Routes>
  );
}

export default App;
