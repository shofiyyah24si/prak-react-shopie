import { useState } from "react";
import PageHeader from "../components/PageHeader";
import ordersData from "../data/orders.json";

const statusColor = {
  Completed: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Cancelled: "bg-red-100 text-red-700",
};

export default function Orders() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ customerName: "", status: "Pending", totalPrice: "", orderDate: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <PageHeader title="Order" breadcrumb={["Dashboard", "Order List"]}>
        <button onClick={() => setShowForm(true)} className="bg-hijau text-white px-4 py-2 rounded-lg">
          Add New Order
        </button>
      </PageHeader>

      {/* Tabel */}
      <div className="mx-4 bg-white rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              {["Order ID", "Customer Name", "Status", "Total Price", "Order Date"].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {ordersData.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-700">{order.id}</td>
                <td className="px-4 py-3 text-gray-600">{order.customerName}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor[order.status]}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-700">Rp {order.totalPrice.toLocaleString("id-ID")}</td>
                <td className="px-4 py-3 text-gray-500">{order.orderDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4" onClick={() => setShowForm(false)}>
          <div className="bg-white rounded-xl p-6 w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg font-semibold mb-4">Add New Order</h2>
            <div className="space-y-3">
              <input name="customerName" placeholder="Customer Name" value={form.customerName}
                onChange={handleChange} className="w-full border border-gray-200 rounded-lg p-2 text-sm outline-none" />
              <select name="status" value={form.status} onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg p-2 text-sm outline-none bg-white">
                <option>Pending</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>
              <input name="totalPrice" type="number" placeholder="Total Price" value={form.totalPrice}
                onChange={handleChange} className="w-full border border-gray-200 rounded-lg p-2 text-sm outline-none" />
              <input name="orderDate" type="date" value={form.orderDate}
                onChange={handleChange} className="w-full border border-gray-200 rounded-lg p-2 text-sm outline-none" />
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
