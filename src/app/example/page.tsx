import { createClient } from "@/utils/supabase/server";

export default async function ExamplePage() {
  const supabase = await createClient();

  // Example: Fetch data from a 'todos' table
  // Replace 'todos' with your actual table name
  const { data: todos, error } = await supabase.from("todos").select();

  if (error) {
    console.error("Error fetching data:", error);
    return (
      <div className="p-8" data-oid="83gq4uc">
        <h1 className="text-2xl font-bold mb-4" data-oid="zx0ft.j">
          Supabase SSR Example
        </h1>
        <p className="text-red-500" data-oid="__ay-2s">
          Error loading data: {error.message}
        </p>
        <p className="text-sm text-gray-600 mt-2" data-oid="rn88wf-">
          Make sure you have a 'todos' table in your Supabase database, or
          update the table name in this component.
        </p>
      </div>
    );
  }

  return (
    <div className="p-8" data-oid="wiarz9-">
      <h1 className="text-2xl font-bold mb-4" data-oid="_y009ci">
        Supabase SSR Example
      </h1>
      <p className="mb-4" data-oid="ezv9jik">
        Data fetched server-side from Supabase:
      </p>

      {todos && todos.length > 0 ? (
        <ul className="space-y-2" data-oid="15mtqjd">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="p-2 bg-gray-100 rounded"
              data-oid="4i4i6fb"
            >
              {JSON.stringify(todo)}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500" data-oid="3jiwpn5">
          No data found. Make sure your 'todos' table has some data, or update
          the table name in this component.
        </p>
      )}
    </div>
  );
}
