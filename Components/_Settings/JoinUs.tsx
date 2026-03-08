import { SignInButton, useUser } from "@clerk/nextjs";
import { useTranslation } from "react-i18next";

export default function JoinUs() {
  const { t } = useTranslation();
  const { isSignedIn } = useUser();

  if (isSignedIn) return null;

  return (
    <div className='Special flex items-center justify-between mt-4 px-4 py-3 rounded-xl shadow-sm border border-white/10'>

      <span className="MyFont">{t("letsAccessAccount")}</span>

      <SignInButton mode="redirect">
        <button className='cursor-pointer transition-all duration-300 hover:scale-95'>{t("register")}</button>
      </SignInButton>

    </div>
  );
}