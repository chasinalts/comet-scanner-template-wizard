import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function ExamplePage() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  // Example: Fetch data from a 'todos' table
  // Replace 'todos' with your actual table name
  const { data: todos, error } = await supabase.from('todos').select()

  if (error) {
    console.error('Error fetching data:', error)
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Supabase SSR Example</h1>
        <p className="text-red-500">Error loading data: {error.message}</p>
        <p className="text-sm text-gray-600 mt-2">
          Make sure you have a 'todos' table in your Supabase database, or update the table name in this component.
        </p>
      </div>
    )
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Supabase SSR Example</h1>
      <p className="mb-4">Data fetched server-side from Supabase:</p>
      
      {todos && todos.length > 0 ? (
        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <li key={index} className="p-2 bg-gray-100 rounded">
              {JSON.stringify(todo)}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">
          No data found. Make sure your 'todos' table has some data, or update the table name in this component.
        </p>
      )}
    </div>
  )
}