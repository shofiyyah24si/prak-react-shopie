import { useState } from "react";
import InputField from "./components/InputField";
import SelectField from "./components/SelectField";

export default function FormPendaftaran() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [umur, setUmur] = useState("");
  const [jenjang, setJenjang] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [submitted, setSubmitted] = useState(false);

  //3 validasi per inputan
  const errorNama =
    !nama ? "" :
    nama.length < 3 ? "Nama minimal 3 karakter." :
    /\d/.test(nama) ? "Nama tidak boleh mengandung angka." :
    /[^a-zA-Z\s]/.test(nama) ? "Nama tidak boleh mengandung simbol." : "";

  const errorEmail =
    !email ? "" :
    !email.includes("@") ? "Email harus mengandung @." :
    !email.includes(".") ? "Format email tidak valid (contoh: nama@email.com)." :
    email.length < 12 ? "Email terlalu pendek." : "";

  const errorUmur =
    !umur ? "" :
    isNaN(umur) ? "Umur harus berupa angka." :
    Number(umur) < 15 ? "Umur minimal 15 tahun." :
    Number(umur) > 60 ? "Umur maksimal 60 tahun." : "";

  const bisaSubmit = nama && email && umur && jenjang && jurusan
    && !errorNama && !errorEmail && !errorUmur;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-8">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-1">
          📝 Form Pendaftaran Peserta
        </h2>
        <p className="text-center text-gray-400 text-sm mb-6">Isi data diri kamu dengan benar</p>

        <InputField 
        label="Nama Lengkap" 
        placeholder="Contoh: Budi Santoso"
        value={nama} 
        onChange={(e) => setNama(e.target.value)} 
        error={errorNama} />

        <InputField 
        label="Email" 
        placeholder="Contoh: budi@email.com"
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        error={errorEmail} />

        <InputField 
        label="Umur" 
        type="number" 
        placeholder="Contoh: 20"
        value={umur} 
        onChange={(e) => setUmur(e.target.value)} 
        error={errorUmur} />

        <SelectField 
        label="Jenjang" 
        value={jenjang} 
        onChange={(e) => setJenjang(e.target.value)}
        options={[{ value: "D3", label: "D3" }, { value: "D4", label: "D4" }, { value: "S1", label: "S1" }]} />

        <SelectField 
        label="Jurusan" 
        value={jurusan} 
        onChange={(e) => setJurusan(e.target.value)}
        options={[
            { value: "Teknik Informatika", label: "Teknik Informatika" },
            { value: "Sistem Informasi", label: "Sistem Informasi" },
            { value: "Teknik Elektro", label: "Teknik Elektro" },
          ]} />

        {/* Conditional Rendering */}
        {!bisaSubmit ? (
          <p className="text-gray-400 text-sm text-center mt-4">Lengkapi semua data dengan benar untuk melanjutkan.</p>
        ) : !submitted ? (
          <button onClick={() => setSubmitted(true)}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition mt-2">
            Daftar Sekarang
          </button>
        ) : (
          <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
            <p className="font-bold text-green-700 mb-1">✅ Pendaftaran Berhasil!</p>
            <p className="text-gray-700 text-sm">Nama: <b>{nama}</b></p>
            <p className="text-gray-700 text-sm">Email: <b>{email}</b></p>
            <p className="text-gray-700 text-sm">Umur: <b>{umur} tahun</b></p>
            <p className="text-gray-700 text-sm">Jenjang: <b>{jenjang}</b></p>
            <p className="text-gray-700 text-sm">Jurusan: <b>{jurusan}</b></p>
          </div>
        )}
      </div>
    </div>
  );
}
