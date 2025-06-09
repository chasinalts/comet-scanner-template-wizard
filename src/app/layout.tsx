export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-oid=":f:lnt4">
      <body className="antialiased futuristic-theme" data-oid="i.-44zv">
        <main className="min-h-screen futuristic-grid-bg" data-oid="xvcc7db">
          {children}
        </main>
      </body>
    </html>
  );
}
