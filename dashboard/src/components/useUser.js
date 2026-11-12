import { useEffect, useState } from "react";

function useUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3002/me", { credentials: "include" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data) setUser(data.user);
      })
      .catch(() => {});
  }, []);

  return user;
}

export default useUser;