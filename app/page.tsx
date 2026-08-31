import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 py-12">
      <section className="flex w-full max-w-sm flex-col items-center text-center">
        <Image
          src="/profile.jpg"
          alt="Mountain landscape beside a lake"
          width={180}
          height={180}
          priority
          className="h-44 w-44 rounded-full object-cover ring-4 ring-gray-800 transition-transform duration-300 hover:scale-105"
        />

        <h1 className="mt-6 text-2xl font-bold text-brand">
          Tailwind CSS Practice
        </h1>

        <p className="mt-5 rounded-lg bg-gray-800 px-5 py-4 text-sm leading-6 text-gray-300 shadow-lg">
          Tailwind CSS is a utility-first CSS framework for rapidly building
          custom user interfaces.
        </p>
      </section>
    </main>
  );
}