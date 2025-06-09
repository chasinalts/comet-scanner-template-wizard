export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased futuristic-theme">
        <main className="min-h-screen futuristic-grid-bg">{children}</main>
      </body>
    </html>
  );
}
