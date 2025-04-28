import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Corrected import

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer /> {/* Updated footer usage */}
      </body>
    </html>
  );
}
