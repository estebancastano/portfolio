import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/organisms/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Esteban Castaño | Portafolio",
  description: "Desarrollador web especializado en React y Spring Boot",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-background text-foreground overflow-x-hidden`}>
        <Navbar />
        {/* Hero y otras secciones full width */}
        <div className="w-screen">{children}</div>
        {/* Footer con mismo ancho que main */}
        <footer className="text-center py-6 border-t mt-16 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Esteban Castaño. Todos los derechos reservados.
        </footer>
      </body>
    </html>
  );
}
