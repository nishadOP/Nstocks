import { useEffect, useState } from "react";

function useUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://nstocks.onrender.com/me", { credentials: "include" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data) setUser(data.user);
      })
      .catch(() => {});
  }, []);

  return user;
}

export default useUser;