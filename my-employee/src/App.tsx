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

function App() {
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
    </Routes>
  );
}

export default App;
