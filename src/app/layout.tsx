export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-oid="s85gck5">
      <body className="antialiased futuristic-theme" data-oid="_h3v0lg">
        <main className="min-h-screen futuristic-grid-bg" data-oid="34cubdg">
          {children}
        </main>
      </body>
    </html>
  );
}
