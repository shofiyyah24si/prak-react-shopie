const skills = [
  "React (Library UI)",
  "JavaScript (Bahasa Pemrograman)",
  "HTML (Struktur Halaman)",
  "CSS (Tampilan/Desain)",
  "Git (Version Control)",
  "Node.js (Backend JS)",
  "Tailwind CSS (Framework CSS)",
];

export default function TechStack() {
  return (
    <div className="tech-stack">
      <h3>Keahlian</h3>
      <div className="tags">
        {skills.map((skill) => (
          <span key={skill} className="tag">{skill}</span>
        ))}
      </div>
    </div>
  );
}
