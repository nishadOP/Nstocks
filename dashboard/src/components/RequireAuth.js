import React, { useEffect, useState } from "react";

function RequireAuth({ children }) {
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    fetch("https://nstocks.onrender.com/me", { credentials: "include" })
      .then((res) => {
        if (res.ok) {
          setChecking(false);
        } else {
          window.location.href = "http://localhost:3000/login";
        }
      })
      .catch(() => {
        window.location.href = "http://localhost:3000/login";
      });
  }, []);

  if (checking) return <p>Loading...</p>;
  return children;
}

export default RequireAuth;