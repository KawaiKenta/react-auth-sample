import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [loginUser, setLoginUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = document.cookie.includes("isLoggedIn=true");
    if (!isLoggedIn) {
      navigate("/user/login");
    }
    setLoginUser("test@gmail.com");
  }, [navigate]);

  return loginUser;
};

export default useAuth;
