export default function Home() {
  const Button = () => (
    <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded">
      Button
    </button>
  );

  return (
    <main className="flex min-h-screen border-dashed border-2 border-sky-500">
      <section className="border-dashed border-2 border-orange-600">
        <h1>Hello</h1>
        <Button />
      </section>
    </main>
  );
}
