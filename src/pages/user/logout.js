import { useEffect } from "react";

const Logout = () => {
  const rewriteCookie = async () => {
    await fetch("http://localhost:8080/user/logout", {
      credentials: "include",
    });
  };
  useEffect(() => {
    rewriteCookie();
  }, []);
  return <div>ログアウトしました</div>;
};

export default Logout;
