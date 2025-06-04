export default function AdminPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
      <div className="p-8 futuristic-container w-auto max-w-xl text-center">
        <h1 className="mb-6 holographic-title" data-text="Admin Dashboard">Admin Dashboard</h1>
        <p className="holographic-text text-lg" data-text="This is the placeholder for the admin dashboard.">
          This is the placeholder for the admin dashboard.
        </p>
        <p className="mt-4">Future admin controls will go here.</p>
        <a href="/" className="mt-8 inline-block futuristic-button px-6 py-3 text-lg">
          Go to Home Page
        </a>
      </div>
    </main>
  );
}
