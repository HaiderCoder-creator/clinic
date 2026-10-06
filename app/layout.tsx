import type { Metadata } from 'next';
import { Tajawal, Manrope } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { AppointmentProvider } from '@/context/AppointmentContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AppointmentModal from '@/components/booking/AppointmentModal';

const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '700', '800'],
  variable: '--font-tajawal',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'مجمع ميلا نجد الطبي بالرياض | Mila Najd Medical Complex',
  description: 'الموقع الرسمي ومحاكاة حجز المواعيد لمجمع ميلا نجد الطبي في حي العارض بالرياض. رعاية صحية متقدمة في الباطنية، الأسنان، الجلدية والتجميل، الأطفال، والنساء والولادة.',
  keywords: ['مجمع ميلا نجد الطبي', 'عيادات الرياض', 'حي العارض', 'طريق الملك عبد العزيز', 'حجز موعد عيادة', 'Mila Najd Medical Complex', 'Riyadh Clinic'],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} ${manrope.variable}`}>
      <body className="antialiased min-h-screen flex flex-col font-sans bg-[#F7F9F8] text-[#183B43]">
        <LanguageProvider>
          <AppointmentProvider>
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <AppointmentModal />
          </AppointmentProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
