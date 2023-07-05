import './globals.css';
import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/modals/RegisterModal';

const font = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
};

const RootLayout = ({ children }: {
  children: React.ReactNode;
}) => (
  <html lang='en'>
    <body className={font.className}>
      <ClientOnly>
        <RegisterModal />
        <Navbar />
      </ClientOnly>
      {children}
    </body>
  </html>
);

export default RootLayout;
