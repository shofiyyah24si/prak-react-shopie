export default function PageHeader({ title, breadcrumb, children }) {
  const crumbs = Array.isArray(breadcrumb)
    ? breadcrumb
    : (breadcrumb || "Dashboard").split("/").map((c) => c.trim());

  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex flex-col">
        <span className="text-3xl font-semibold">{title || "Dashboard"}</span>
        <div className="flex items-center space-x-2 mt-2 font-medium">
          {crumbs.map((crumb, i) => (
            <span key={i} className="flex items-center space-x-2">
              <span className="text-gray-500">{crumb}</span>
              {i < crumbs.length - 1 && <span className="text-gray-400">/</span>}
            </span>
          ))}
        </div>
      </div>
      
      <div>{children}</div>
    </div>
  );
}
