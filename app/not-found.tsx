import Image from "next/image";
import Link from "next/link";


export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-2">Page Not Found</h2>
      <p className="text-gray-600 mt-2">Oops! The page you are looking for does not exist.</p>

      {/* <a
        href="/"
        className="mt-6 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary transition"
      >
        Go Back Home
      </a> */}

<Link
  href="/"
  className="mt-6 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary transition"
>
  Go Back Home
</Link>


      {/* <img
        src="https://illustrations.popsy.co/white/resistance-band.svg"
        alt="Not Found"
        className="w-64 mt-6"
      /> */}

     <Image src="https://illustrations.popsy.co/white/resistance-band.svg" alt="Not Found" width={100} height={100} className="w-64 mt-6" />

    </main>
  );
}
