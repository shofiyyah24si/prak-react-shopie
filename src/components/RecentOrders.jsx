// IMPROVISASI: Komponen baru - tabel recent orders (tidak ada di modul)

const orders = [
  { id: "#ORD-001", customer: "Andi Saputra", menu: "Nasi Goreng", status: "Delivered", total: "Rp 45.000" },
  { id: "#ORD-002", customer: "Budi Santoso", menu: "Mie Ayam", status: "On Delivery", total: "Rp 32.000" },
  { id: "#ORD-003", customer: "Citra Dewi", menu: "Soto Ayam", status: "Canceled", total: "Rp 28.000" },
  { id: "#ORD-004", customer: "Dian Pratama", menu: "Gado-Gado", status: "Delivered", total: "Rp 25.000" },
  { id: "#ORD-005", customer: "Eka Putri", menu: "Rendang", status: "On Delivery", total: "Rp 55.000" },
];

const statusColor = {
  Delivered: "bg-green-100 text-green-700",
  "On Delivery": "bg-blue-100 text-blue-700",
  Canceled: "bg-red-100 text-red-700",
};

export default function RecentOrders() {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 mt-6">
      <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-400 border-b border-gray-100">
              <th className="pb-3">Order ID</th>
              <th className="pb-3">Customer</th>
              <th className="pb-3">Menu</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-3 font-medium text-gray-700">{order.id}</td>
                <td className="py-3 text-gray-600">{order.customer}</td>
                <td className="py-3 text-gray-600">{order.menu}</td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor[order.status]}`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-3 font-medium text-gray-700">{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
