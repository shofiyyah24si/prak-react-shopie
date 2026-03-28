export default function ContactInfo() {
  const email = "shofiyyah24si@mahasiswa.pcr.ac.id";

  return (
    <div className="contact-info">
      <h3>Kontak</h3>
      <ul>
        <li>
          <span className="icon">📧</span>
          <span>{email}</span>
        </li>
        <li>
          <span className="icon">📱</span>
          <span>+62 822-4459-2992</span>
        </li>
        <li>
          <span className="icon">📍</span>
          <span>Pekanbaru, Riau, Indonesia</span>
        </li>
      </ul>
    </div>
  );
}
