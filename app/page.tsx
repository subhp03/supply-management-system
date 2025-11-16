import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white-900 mb-6">
            Supply Management System
          </h1>
          <p className="text-xl text-white-600 mb-8 max-w-2xl justify-center mx-auto">
            Streamline your supply operations with our powerful, easy-to-use management system. 
            Manage procurement, monitor stock movement, and keep every item accounted for with
            real-time visibility.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/sign-in"
              className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="#"
              className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}