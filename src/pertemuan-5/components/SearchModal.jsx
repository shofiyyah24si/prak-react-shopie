import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const allMenus = [
  "Dashboard", "Orders", "Customers", "Nasi Goreng", "Mie Ayam",
  "Soto Ayam", "Gado-Gado", "Rendang", "Total Revenue", "Total Delivered",
];

export default function SearchModal({ onClose }) {
  const [query, setQuery] = useState("");

  const results = query
    ? allMenus.filter((m) => m.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <div
      className="fixed inset-0 bg-black/40 z-50 flex items-start justify-center pt-24 px-4"
      onClick={onClose}
    >
      {/* Modal box */}
      <div
        className="bg-white rounded-xl shadow-xl w-full max-w-lg p-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input */}
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            autoFocus
            type="text"
            placeholder="Cari menu, halaman, atau pesanan..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-hijau text-sm"
          />
        </div>

        {/* Hasil pencarian */}
        {results.length > 0 && (
          <ul className="mt-3 divide-y divide-gray-100">
            {results.map((item) => (
              <li key={item} className="py-2 px-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer">
                🔍 {item}
              </li>
            ))}
          </ul>
        )}

        {query && results.length === 0 && (
          <p className="mt-3 text-sm text-gray-400 text-center">Tidak ada hasil untuk "{query}"</p>
        )}

        {!query && (
          <p className="mt-3 text-xs text-gray-400 text-center">Ketik untuk mulai mencari...</p>
        )}
      </div>
    </div>
  );
}
