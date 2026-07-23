export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 shadow-md">
      <h1 className="text-xl font-bold text-blue-600">
        Accredian
      </h1>

      <div className="space-x-6 hidden md:block">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Contact</a>
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Login
      </button>
    </nav>
  );
}