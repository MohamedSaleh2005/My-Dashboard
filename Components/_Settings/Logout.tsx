import { useTranslation } from "react-i18next";
import { useClerk, useUser } from "@clerk/nextjs";

export default function Logout() {
  const { t } = useTranslation();
  const clerk = useClerk();
  const { isSignedIn } = useUser();

  if (!isSignedIn) return null;

  const handleLogout = () => {
    clerk.signOut();
  };

  return (
    <button onClick={handleLogout} className='cursor-pointer transition-all duration-300 hover:scale-95 bg-[#4daca767] shadow-sm py-1 px-8 rounded-sm mt-5 MyFont'>
      {t("logout")}
    </button>
  );
}