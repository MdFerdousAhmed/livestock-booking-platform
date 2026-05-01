
export default function QurbaniBanner() {
  return (
    <section
      className="relative h-[400px] rounded-2xl overflow-hidden bg-cover bg-center mt-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1596733430284-f7437764b1a9')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative h-full flex items-center justify-center">
        <div className="backdrop-blur-md bg-white/20 p-8 rounded-xl text-center text-white max-w-lg">
          <h2 className="text-3xl font-bold mb-3">
            Qurbani Tips & Top Breeds
          </h2>
          <p className="mb-4">
            Choose the best healthy animals and make your Qurbani meaningful.
          </p>
          <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg">
            View Guide
          </button>
        </div>
      </div>
    </section>
  );
}