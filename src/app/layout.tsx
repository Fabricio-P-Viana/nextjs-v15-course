import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "The Blog",
  description: "Blog about Nextjs v15",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
