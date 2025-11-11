import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './home';
import BlogDetail from './components/BlogDetail';
import './App.css';
import Login from './login';
import Register from './registration';
import ProtectedLayout from './utils/ProtectedLayout';
import ResetPassword from "./resetpassword";




function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedLayout />}>
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/home" element={< Home />} />
      </Route>
      <Route path="/resetpassword" element={<ResetPassword />} />
    </Routes>
  );
}

export default App;


