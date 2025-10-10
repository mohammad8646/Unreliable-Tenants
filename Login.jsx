import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import api from "../services/api";


const Login = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [token, setToken] = useState(""); // optional state for debug

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const queryString = `?email=${encodeURIComponent(form.email)}&password=${encodeURIComponent(form.password)}`;
      const res = await api.post(`/users/login${queryString}`);

      const accessToken = res.data.access_token;
      const tokenType = res.data.token_type;

      if (accessToken && tokenType === "bearer") {
        // ✅ Store it for future authenticated requests
        localStorage.setItem("access_token", accessToken);
        setToken(accessToken); // just to display or debug if needed
        setMessage("✅ Login successful! Token received.");
        navigate('/dashboard');
      } else {
        setMessage("❌ Unexpected response format.");
      }

    } catch (err) {
      console.error("❌ Login failed:", err.response?.data);
      setMessage("❌ Login failed: " + (err.response?.data?.detail || "Error"));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
      <input
        placeholder="Password"
        type="password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        required
      />
      <button type="submit">Login</button>
      <p>{message}</p>

      {/* Optional Debug Output */}
      {/* {token && (
        <div>
          <strong>Access Token:</strong>
          <p style={{ wordBreak: "break-all" }}>{token}</p>
        </div>
      )} */}
      
    </form>
  );
};

export default Login;
