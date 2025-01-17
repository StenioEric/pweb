export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body style={{ fontFamily: "Arial, sans-serif" }}>
        <header >
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
