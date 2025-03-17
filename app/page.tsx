
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white px-6">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-4">
          Welcome to Vicky&apos; Employee Clocking System
        </h1>
        <p className="text-lg max-w-xl mx-auto opacity-90">
          Streamline your workforce with our seamless clocking system. Track employee hours with ease and efficiency.
        </p>
        <button className="mt-6 bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}
