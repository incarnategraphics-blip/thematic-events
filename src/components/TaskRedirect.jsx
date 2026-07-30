import { useState } from "react";

export default function TaskRedirect() {
  const ADMIN_EMAIL = "thethematicevent@gmail.com";
  const ADMIN_PASSWORD = "Ashish_6166";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      email === ADMIN_EMAIL &&
      password === ADMIN_PASSWORD
    ) {
      window.location.href =
        "https://docs.google.com/spreadsheets/d/11PwiH7zeQgYmvytnX9wz-bgz-RLTfKmRLSLb_vUyki8/edit?gid=392192724#gid=392192724";
    } else {
      setError("Wrong email or password.");
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={styles.heading}>Tasks Panel Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            style={styles.input}
          />

          {error && <p style={styles.error}>{error}</p>}

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,.45)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99999,
  },

  modal: {
    width: "400px",
    maxWidth: "90%",
    background: "#ffffff",
    borderRadius: "15px",
    padding: "35px",
    boxShadow: "0 0 35px rgba(0,0,0,.35)",
  },

  heading: {
    color: "#000",
    textAlign: "center",
    marginBottom: "25px",
    fontWeight: "700",
  },

  input: {
    width: "100%",
    padding: "13px",
    marginBottom: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "15px",
    outline: "none",
    boxSizing: "border-box",
  },

  button: {
    width: "100%",
    padding: "13px",
    background: "#0dcaf0",
    color: "#000",
    border: "none",
    borderRadius: "8px",
    fontWeight: "700",
    fontSize: "16px",
    cursor: "pointer",
  },

  error: {
    color: "#dc3545",
    textAlign: "center",
    marginBottom: "15px",
    fontWeight: "600",
  },
};