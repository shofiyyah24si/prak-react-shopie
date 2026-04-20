import { useState } from "react";
import PageHeader from "../components/PageHeader";
import customersData from "../data/customers.json";

const loyaltyColor = {
  Gold: "bg-yellow-100 text-yellow-700",
  Silver: "bg-gray-100 text-gray-600",
  Bronze: "bg-orange-100 text-orange-700",
};

export default function Customers() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", loyalty: "Bronze" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <PageHeader title="Customer" breadcrumb={["Dashboard", "Customer List"]}>
        <button onClick={() => setShowForm(true)} className="bg-hijau text-white px-4 py-2 rounded-lg">
          Add New Customer
        </button>
      </PageHeader>

      {/* Tabel */}
      <div className="mx-4 bg-white rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              {["Customer ID", "Name", "Email", "Phone", "Loyalty"].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {customersData.map((c) => (
              <tr key={c.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-700">{c.id}</td>
                <td className="px-4 py-3 text-gray-700">{c.name}</td>
                <td className="px-4 py-3 text-gray-500">{c.email}</td>
                <td className="px-4 py-3 text-gray-500">{c.phone}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${loyaltyColor[c.loyalty]}`}>
                    {c.loyalty}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4" onClick={() => setShowForm(false)}>
          <div className="bg-white rounded-xl p-6 w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg font-semibold mb-4">Add New Customer</h2>
            <div className="space-y-3">
              <input name="name" placeholder="Customer Name" value={form.name}
                onChange={handleChange} className="w-full border border-gray-200 rounded-lg p-2 text-sm outline-none" />
              <input name="email" placeholder="Email" value={form.email}
                onChange={handleChange} className="w-full border border-gray-200 rounded-lg p-2 text-sm outline-none" />
              <input name="phone" placeholder="Phone" value={form.phone}
                onChange={handleChange} className="w-full border border-gray-200 rounded-lg p-2 text-sm outline-none" />
              <select name="loyalty" value={form.loyalty} onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg p-2 text-sm outline-none bg-white">
                <option>Bronze</option>
                <option>Silver</option>
                <option>Gold</option>
              </select>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button onClick={() => setShowForm(false)} className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700">Batal</button>
              <button onClick={() => setShowForm(false)} className="px-4 py-2 bg-hijau text-white text-sm rounded-lg">Simpan</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
