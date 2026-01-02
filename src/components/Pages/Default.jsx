import Logo from "../../assets/logo.png";

export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-screen flex flex-col text-gray-800">
      <header className="flex flex-col items-center text-center px-6 pt-20 pb-16">
        <img src={Logo} alt="Travel Resolution Logo" className="w-40 mb-8" />

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
          Make Travel Your Resolution
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-xl">
          Plan smarter. Travel deeper. Turn dreams into destinations.
        </p>
      </header>

      <section className="flex-1 px-6 max-w-3xl mx-auto space-y-6 text-center">
        <p className="text-gray-600 text-base md:text-lg">
          Travel Resolution helps you set meaningful travel goals, track your
          journeys, and stay motivated throughout the year.
        </p>

        <p className="text-gray-600 text-base md:text-lg">
          Whether it’s exploring new countries or rediscovering nearby places,
          your next adventure starts here.
        </p>

        <p className="text-gray-800 font-medium">
          Simple planning. Clear goals. Unforgettable experiences.
        </p>
      </section>

      <footer className="mt-16 py-6 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-500">
          © {currentYear} Travel Resolution. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
