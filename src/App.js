import React from 'react';
import { Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import StudentsList from "./pages/StudentsList";
import TeachersList from "./pages/TeachersList";
import InterviewNotes from "./pages/InterviewNotes";
import Profile from "./pages/Profile";
import Nopage from "./pages/Nopage";
import AddStudents from "./Components/AddStudents.js";
import EditStudents from "./Components/EditStudents.js";
import AddTeachers from "./Components/AddTeachers.js";
import EditTeachers from "./Components/EditTeachers.js";
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<DashBoard />} />
        <Route path="/addStudents" element={<AddStudents />} /> 
        <Route path="/editStudents/:id" element={<EditStudents />} />
        <Route path="/addTeachers" element={<AddTeachers />} />
        <Route path="/editTeachers/:id" element={<EditTeachers />} />
        <Route path="/students/all" element={<StudentsList />} />
        <Route path="/teachers/all" element={<TeachersList />} />
        <Route path="/interview/notes" element={<InterviewNotes />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
    </div>
  );
}

//github.com/Shyam2397/Crud-management-2/blob/master/src/App.js

 export default App;
