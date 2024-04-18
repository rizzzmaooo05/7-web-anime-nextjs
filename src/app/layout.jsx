import "./globals.css";


export default function RootLayout({ children , title}) {
  return (
    <html lang="en">

      <body>{children}</body>
    </html>
  );
}
