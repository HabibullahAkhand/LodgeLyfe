import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Oops!!! 😱</h2>
      <p style={styles.message}>Something went wrong</p>
      <Link to="/" style={styles.link}>Go back to home 🏠</Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
  },
  title: {
    fontSize: "36px",
    marginBottom: "20px",
    color: "#FF4500", // Orange color
  },
  message: {
    fontSize: "18px",
    marginBottom: "30px",
    color: "#555",
  },
  link: {
    fontSize: "20px",
    color: "#007bff",
    textDecoration: "none",
  },
};

export default Error;
