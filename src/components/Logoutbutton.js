// components/LogoutButton.js

import { useRouter } from "next/navigation";

function Logoutbutton() {
  const router = useRouter();

  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem("authToken");
    window.location.reload();

    // Redirect to the login page
    router.push("/");
  };

  return <button onClick={handleLogout}>Logout</button>;

 
}

export default Logoutbutton;
