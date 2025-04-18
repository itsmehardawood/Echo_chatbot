// "use client";

// import { useRouter, useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { useTranslation } from "@/lib/translations";
// import Image from "next/image";
// import LogoutButton from "../components/LogoutButton";
// import ChatbotWidget from "../components/chatbot_widget";
// import WhatsAppButton from "../components/Whatspp";
// import Link from "next/link";

// export default function HomePage() {
//   const router = useRouter();
//   const params = useParams();
//   const locale = params?.locale || "he";
//   const t = useTranslation(locale);
//   const [loading, setLoading] = useState(true);
//   const [isChatOpen, setIsChatOpen] = useState(false); // State to manage chatbot visibility

//   useEffect(() => {
//     const token = localStorage.getItem("access_token");
//     if (!token) {
//       router.push(`/${locale}/login`);
//     } else {
//       setLoading(false);
//     }
//   }, [locale, router]);

//   if (loading) return <p>{t("loading")}</p>;

//   return (
//     <>
//       {/* 🔒 Floating logout button */}
//       <div className="fixed top-4 right-25 z-50">
//         <LogoutButton />
//       </div>

//       {/* 📄 Main content */}
//       <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 text-white flex flex-col justify-center items-center gap-6 p-6 relative">
//         <Image
//           src="/images/logo.png"
//           height={300}
//           width={300}
//           alt="this is our logo"
//           priority
//         />

//         {/* Floating button to toggle the chat widget */}
//         <div
//           onClick={() => setIsChatOpen(!isChatOpen)}
//           className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg cursor-pointer z-50"
//         >
//           <span className="text-2xl">💬</span>
//         </div>

//         {/* Conditionally render the chatbot widget */}
//         {isChatOpen && (
//           <ChatbotWidget
//             locale={locale}
//             isOpen={isChatOpen}
//             onClose={() => setIsChatOpen(false)}
//           />
//         )}

//         {/* whats app floating button */}

//         {/* <WhatsAppButton/> */}




//         <h1 className="text-4xl font-bold mb-6 drop-shadow">{t("welcome")}</h1>

//         <div className="flex flex-col gap-4 w-full max-w-xs">
//           <button
//             onClick={() => router.push(`/${locale}/admin-panel`)}
//             className="w-full px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-md"
//           >
//             {t("AdminPanel")}
//           </button>

//           <button
//             onClick={() => router.push(`/${locale}/business-service`)}
//             className="w-full px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-md"
//           >
//             {t("manageBusiness")}
//           </button>


//           <Link href="/generate-code">
//         <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//           Generate Widget Embed Code
//         </button>
//       </Link>



//         </div>
//       </div>
//     </>
//   );
// }









"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "@/lib/translations";
import Image from "next/image";
import LogoutButton from "../components/LogoutButton";
import ChatbotWidget from "../components/chatbot_widget";
import WhatsAppButton from "../components/Whatspp";
import Link from "next/link";

export default function HomePage() {
  const router = useRouter();
  const params = useParams();
  const locale = params?.locale || "he";
  const t = useTranslation(locale);
  const [loading, setLoading] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false); // State to manage chatbot visibility

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      router.push(`/${locale}/login`);
    } else {
      setLoading(false);
    }
  }, [locale, router]);

  if (loading) return <p>{t("loading")}</p>;

  return (
    <>
      {/* 🔒 Floating logout button */}
      <div className="fixed top-4 right-25 z-50">
        <LogoutButton />
      </div>

      {/* 📄 Main content */}
      <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 text-white flex flex-col justify-center items-center gap-6 p-6 relative">
        <Image
          src="/images/logo.png"
          height={300}
          width={300}
          alt="this is our logo"
          priority
        />

        {/* Floating button to toggle the chat widget */}
        <div
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg cursor-pointer z-50"
        >
          <span className="text-2xl">💬</span>
        </div>

        {/* Conditionally render the chatbot widget */}
        {isChatOpen && (
          <ChatbotWidget
            locale={locale}
            isOpen={isChatOpen}
            onClose={() => setIsChatOpen(false)}
          />
        )}

        {/* WhatsApp floating button */}
        <WhatsAppButton />

        <h1 className="text-4xl font-bold mb-6 drop-shadow">{t("welcome")}</h1>

        <div className="flex flex-col gap-4 w-full max-w-xs">
          <button
            onClick={() => router.push(`/${locale}/admin-panel`)}
            className="w-full px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-md"
          >
            {t("AdminPanel")}
          </button>

          <button
            onClick={() => router.push(`/${locale}/business-service`)}
            className="w-full px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-md"
          >
            {t("manageBusiness")}
          </button>

          <Link href="/generate-code">
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Generate Widget Embed Code
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

