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
        <header>
          <h1>Header</h1>
        </header>

        {children}

        <footer>
          <h2>Footer</h2>
        </footer>
      </body>
    </html>
  );
}
