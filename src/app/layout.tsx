export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-oid="w06ykvh">
      <body className="antialiased futuristic-theme" data-oid="bmuhwyf">
        <main className="min-h-screen futuristic-grid-bg">
          {children}
        </main>
      </body>
    </html>
  );
}
