import { Routes, Route } from "react-router-dom";
import { CreateEmployee, Home, Login ,EditEmployee ,Profile ,CreateWorkHistory ,EditWorkHistory ,CreateCertificate ,EditCertificate ,CreateEducation ,EditEducation} from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/employee" element={<CreateEmployee />} />
      <Route path="/edit_employee" element={<EditEmployee />} />
      <Route path="/profile" element={<Profile />}/>
      <Route path="/work_history" element={<CreateWorkHistory />}/>
      <Route path="/edit_work_history" element={<EditWorkHistory />}/>
      <Route path="/certificate" element={<CreateCertificate />}/>
      <Route path="/edit_certificate" element={<EditCertificate />}/>
      <Route path="/education" element={<CreateEducation />}/>
      <Route path="/edit_education" element={<EditEducation />}/>
    </Routes>
  );
}

export default App;
