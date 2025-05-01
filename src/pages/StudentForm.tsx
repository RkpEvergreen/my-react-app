import { useState } from "react";
import axios from "axios";

const StudentForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/students", form);
      alert("Student registered! ID: " + res.data.studentId);
    } catch (err) {
      console.error("Error:", err);
      alert("Registration failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Student Registration</h2>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input name="course" placeholder="Course" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default StudentForm;
