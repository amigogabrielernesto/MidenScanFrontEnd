function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Maiden Explorer</h1>
      </header>
      <main className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <section className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Buscar bloque</h2>
            <input
              type="text"
              className="border p-2 rounded w-full"
              placeholder="ID del bloque o hash"
            />
          </section>
          <section className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Últimos bloques</h2>
            <ul className="space-y-2">
              <li className="bg-gray-50 p-2 rounded">Bloque #1 - Hash XYZ</li>
              <li className="bg-gray-50 p-2 rounded">Bloque #2 - Hash ABC</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
export default App;
