import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ViewPDF from './pages/ViewPDF';
import CreatePDF from './pages/CreatePDF';
import EditPDF from './pages/EditPDF';
import Cover from './pages/Cover';
import LoginForm from './pages/Login';





function App() {
  return (
    <>
      <Navbar />
      <Routes>
        
          <Route path="/" element={<ViewPDF/>} />
          <Route path="/add" element={<CreatePDF/>} />
          <Route path="/pdf/:id" element={<EditPDF/>} />
          <Route path="/pdf/upload" element={<Cover/>} />
          <Route path="/register" element={<LoginForm/>} />
      </Routes>
    </>
  );
}

export default App;
