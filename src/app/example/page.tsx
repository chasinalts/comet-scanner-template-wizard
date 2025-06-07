import { createClient } from "@/utils/supabase/server";

export default async function ExamplePage() {
  const supabase = await createClient();

  // Example: Fetch data from a 'todos' table
  // Replace 'todos' with your actual table name
  const { data: todos, error } = await supabase.from("todos").select();

  if (error) {
    console.error("Error fetching data:", error);
    return (
      <div className="p-8" data-oid="z_--hw2">
        <h1 className="text-2xl font-bold mb-4" data-oid="cy75v6o">
          Supabase SSR Example
        </h1>
        <p className="text-red-500" data-oid="231oql4">
          Error loading data: {error.message}
        </p>
        <p className="text-sm text-gray-600 mt-2" data-oid="vzr3gbj">
          Make sure you have a 'todos' table in your Supabase database, or
          update the table name in this component.
        </p>
      </div>
    );
  }

  return (
    <div className="p-8" data-oid="yoha685">
      <h1 className="text-2xl font-bold mb-4" data-oid="ga8jada">
        Supabase SSR Example
      </h1>
      <p className="mb-4" data-oid="ml9lb2c">
        Data fetched server-side from Supabase:
      </p>

      {todos && todos.length > 0 ? (
        <ul className="space-y-2" data-oid="2um5d-v">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="p-2 bg-gray-100 rounded"
              data-oid="7fryymd"
            >
              {JSON.stringify(todo)}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500" data-oid=".7h:gh:">
          No data found. Make sure your 'todos' table has some data, or update
          the table name in this component.
        </p>
      )}
    </div>
  );
}
