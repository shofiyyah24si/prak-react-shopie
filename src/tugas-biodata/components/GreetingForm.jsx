import { useState } from "react";

export default function GreetingForm() {
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");

  const handleKirim = () => {
    if (!nama.trim()) {
      setPesan("⚠️ Nama tidak boleh kosong!");
      return;
    }
    setPesan(`👋 Halo, ${nama}! Terima kasih sudah berkunjung 😊`);
  };

  return (
    <div className="greeting-form">
      <h3>Tinggalkan Salam</h3>
      <div className="greeting-input-group">
        <input
          type="text"
          placeholder="Nama kamu..."
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="greeting-input"
        />
        <button className="greeting-btn" onClick={handleKirim}>Kirim</button>
      </div>
      {pesan && <p className="greeting-result">{pesan}</p>}
    </div>
  );
}
