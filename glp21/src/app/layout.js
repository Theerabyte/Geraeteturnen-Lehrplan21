import "@/app/[styles]/globals.css";
import NavL from "@/components/navL";

export const metadata = {
  title: "Geräteturnen leichtgemacht",
  description: "Maturarbeit von Sophie Hafner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', gap: '3rem' }}>
        <NavL />
        <main style={{ flex: 1 }}>
          {children}
        </main>
      </body>
    </html >
  );
}
