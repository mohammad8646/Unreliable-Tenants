import { useState } from "react";
import api from "../services/api";

const Register = () => {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    password: "",
    user_type: "tenant" // ✅ send a valid default
  });
  
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Sending data:", form); // ✅ for debugging

    try {
      const res = await api.post("/auth/register", {
        full_name: form.full_name,
        email: form.email,
        password: form.password,
        user_type: form.user_type
      });
      console.log(res)
      

      setMessage("✅ Registration successful!");
    } catch (err) {
      console.error(err);
      const detail = err.response?.data?.detail || 'Unkonwn error' ;
      setMessage("❌ Registration failed: " + detail);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input
        name="full_name"
        placeholder="Full Name"
        value={form.full_name}
        onChange={(e) => setForm({ ...form, full_name: e.target.value })}
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        required
      />
      <select
  value={form.user_type}
  onChange={(e) => setForm({ ...form, user_type: e.target.value })}
>
  <option value="tenant">Tenant</option>
  <option value="landlord">Landlord</option>
</select>

      <button type="submit">Register</button>
      <p>{message}</p>
    </form>
  );
};

export default Register;
