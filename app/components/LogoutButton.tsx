"use client";
import { useRouter } from "next/navigation";
import { resetAuthCookies } from "../lib/actions"; // Ensure this function exists in the specified path
import MenuLink from "./navbar/MenuLink";

const LogoutButton: React.FC = () => {
  const router = useRouter();
  const submitLogout = async () => {
    await resetAuthCookies(); // Ensure this function is asynchronous if needed
    router.push("/");
  };

  return (
    <MenuLink
      label="logout"
      onClick={submitLogout}
    />
  );
};

export default LogoutButton;
