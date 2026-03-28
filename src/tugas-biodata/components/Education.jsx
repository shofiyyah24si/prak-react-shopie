import { useState } from "react";

const educationList = [
  {
    school: "Politeknik Caltex Riau",
    major: "D4 Sistem Informasi",
    year: "2024 – Sekarang",
    detail: "Fokus pada pengembangan web dan rekayasa perangkat lunak.",
  },
  {
    school: "SMAN 1 Padang Panjang",
    major: "MIPA",
    year: "2021 – 2023",
    detail: "Aktif di ekstrakulikuler sains dan olimpiade matematika.",
  },
];

export default function Education() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="education">
      <h3>Pendidikan</h3>
      {educationList.map((edu, index) => (
        <div key={index} className="edu-item">
          <div className="edu-header" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
            <div>
              <h4>{edu.school}</h4>
              <p>{edu.major} · {edu.year}</p>
            </div>
            <span className="edu-toggle">{openIndex === index ? "▲" : "▼"}</span>
          </div>
          {openIndex === index && (
            <p className="edu-detail">{edu.detail}</p>
          )}
        </div>
      ))}
    </div>
  );
}
