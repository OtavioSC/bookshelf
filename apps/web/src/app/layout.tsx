import "./styles.css";
import { Roboto_Slab } from "next/font/google";

const roboto = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>{children}</body>
    </html>
  );
}
