import React, { useEffect, useState } from "react";

function RequireAuth({ children }) {
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3002/me", { credentials: "include" })
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