import "@/app/[styles]/globals.css";
import NavL from "@/components/navL";
import Nav from "@/components/nav";
import Bav from "@/components/nav";

export const metadata = {
  title: "Geräteturnen leichtgemacht",
  description: "Maturarbeit von Sophie Hafner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body >
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <NavL />
          <div style={{ marginLeft: '15rem' }}>
            <main>
              {children}
            </main>
          </div>
          {/* <Bav /> */}
        </div>
      </body>
    </html>
  );
}
