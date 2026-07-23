export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 text-center">
      <h3 className="text-xl font-semibold mb-4">
        Accredian Enterprise
      </h3>

      <p className="text-gray-400 mb-4">
        © 2026 Accredian. All rights reserved.
      </p>

      <div className="space-x-4">
        <a href="#" className="hover:underline">Privacy</a>
        <a href="#" className="hover:underline">Terms</a>
        <a href="#" className="hover:underline">Contact</a>
      </div>
    </footer>
  );
}