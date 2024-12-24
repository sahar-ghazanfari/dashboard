import estedadFont from "@/constant/localFont";
import "../style/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${estedadFont.variable} font-sans`}>{children}</body>
    </html>
  );
}
