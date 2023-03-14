import { Routes, Route } from "react-router-dom";
import {CreateEmployee,Home,Login,EditEmployee,Profile,CreateWorkHistory,EditWorkHistory,CreateCertificate,EditCertificate,CreateEducation,EditEducation} from "./pages/user";
import {LoginAdmin,HomeAdmin,Level,CreateLevel,EditLevel,TitleName,CreateTitleName,EditTitleName,Gender,CreateGender,EditGender,Department,CreateDepartment,EditDepartment,Position,CreatePosition,EditPosition} from "./pages/admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/employee" element={<CreateEmployee />} />
      <Route path="/edit_employee" element={<EditEmployee />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/work_history" element={<CreateWorkHistory />} />
      <Route path="/edit_work_history" element={<EditWorkHistory />} />
      <Route path="/certificate" element={<CreateCertificate />} />
      <Route path="/edit_certificate" element={<EditCertificate />} />
      <Route path="/education" element={<CreateEducation />} />
      <Route path="/edit_education" element={<EditEducation />} />

      <Route path="/admin_login" element={<LoginAdmin />} />
      <Route path="/admin_home" element={<HomeAdmin />} />
      <Route path="/level" element={<Level />} />
      <Route path="/edit_level" element={<EditLevel />} />
      <Route path="/create_level" element={<CreateLevel />} />
      <Route path="/title_name" element={<TitleName />} />
      <Route path="/create_title_name" element={<CreateTitleName />} />
      <Route path="/edit_title_name" element={<EditTitleName />} />
      <Route path="/gender" element={<Gender />} />
      <Route path="/create_gender" element={<CreateGender />} />
      <Route path="/edit_gender" element={<EditGender />} />
      <Route path="/department" element={<Department />} />
      <Route path="/create_department" element={<CreateDepartment />} />
      <Route path="/edit_department" element={<EditDepartment />} />
      <Route path="/position" element={<Position />} />
      <Route path="/create_position" element={<CreatePosition />} />
      <Route path="/edit_position" element={<EditPosition />} />
    </Routes>
  );
}

export default App;
