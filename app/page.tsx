"use client";

export default function Home() {
  const username = "Corey";
  console.log("Hello World");
  console.log(`Hello ${username}`);
  return (
    <main className="flex min-h-screen border-dashed border-2 border-sky-500">
      <section className="border-dashed border-2 border-orange-600">
        <h1 className="text-pretty blur-xl">Hello</h1>
        <h4>Stuff</h4>
      </section>
      <section className="bg-slate-500 h-[20vh] w-[100vw]">2nd section</section>
    </main>
  );
}
