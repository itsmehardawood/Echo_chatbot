'use client';

import { useRouter, useParams } from 'next/navigation';
import { useTranslation } from '@/lib/translations'; // your translation hook

const LogoutButton = () => {
  const router = useRouter();
  const { locale } = useParams(); // get locale from the URL
  const t = useTranslation(locale); // get translated text

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    router.push(`/${locale}/login`);
  };

  return (
    <button
      onClick={handleLogout}
      className="fixed top-4 right-27 px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition z-50"
    >
      {t('logout')}
    </button>
  );
  
};

export default LogoutButton;
