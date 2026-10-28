import { Download, Mail } from "lucide-react";
import CrossSection from "./components/CrossSection";
import ProjectRecord from "./components/ProjectRecord";
import { contact, rfqMailto, services, steps, webProjects } from "./data";

const facts = [
  { value: "Sejak 2019", label: "survei lapangan bersama Laboratorium Fisika Bumi ITB" },
  { value: "25+ lokasi", label: "proyek energi, gedung, bendungan, tol, dan industri" },
  { value: "11 metode", label: "seismik, kelistrikan, radar, dan uji in-situ" },
  { value: "2 negara", label: "Indonesia dan Timor-Leste" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <a href="#main" className="skip-link">
        Langsung ke konten
      </a>

      <header className="site-header">
        <div className="wrap flex h-16 items-center justify-between gap-6">
          <a href="#" className="leading-tight">
            <span className="block font-bold display-tight text-[1.05rem]">
              Gantang Masimuja, M.T.
            </span>
            <span className="block text-xs text-ink-2">
              Konsultan geofisika dan geoteknik
            </span>
          </a>
          <nav aria-label="Navigasi utama" className="hidden md:flex gap-7 text-sm">
            <a href="#layanan" className="nav-link">Layanan</a>
            <a href="#proyek" className="nav-link">Proyek</a>
            <a href="#cara-kerja" className="nav-link">Cara kerja</a>
            <a href="#profil" className="nav-link">Profil</a>
          </nav>
          <a href={rfqMailto} className="btn btn-primary btn-sm">
            Minta penawaran
          </a>
        </div>
      </header>

      <main id="main">
        {/* HERO */}
        <section className="wrap pt-14 md:pt-20">
          <p className="text-ink-2 text-base md:text-lg">
            Konsultan geofisika dan geoteknik, Laboratorium Fisika Bumi ITB
          </p>
          <h1 className="display mt-4 max-w-[17ch] text-[2.6rem] leading-[1.02] sm:text-6xl md:text-[5.2rem]">
            Melihat ke bawah tanah sebelum Anda membangun di atasnya.
          </h1>
          <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-ink-2">
            Investigasi bawah permukaan untuk pembangkit listrik, gedung, bendungan,
            jalan tol, dan kawasan industri: parameter dinamik tanah, deteksi rongga,
            dan eksplorasi air tanah, dengan laporan yang siap dipakai tim desain.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={rfqMailto} className="btn btn-primary">
              <Mail size={18} aria-hidden="true" />
              Minta penawaran survei
            </a>
            <a href={contact.cv} download="CV_Gantang_Masimuja.pdf" className="btn btn-quiet">
              <Download size={18} aria-hidden="true" />
              Unduh CV (PDF)
            </a>
          </div>

          <div className="mt-14 md:mt-16">
            <CrossSection />
          </div>
        </section>

        {/* FACTS */}
        <section aria-label="Ringkasan pengalaman" className="wrap mt-16">
          <dl className="facts">
            {facts.map((f) => (
              <div key={f.value} className="fact">
                <dt className="display text-2xl md:text-3xl">{f.value}</dt>
                <dd className="mt-1 text-sm text-ink-2 leading-snug">{f.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* SERVICES */}
        <section id="layanan" className="wrap section">
          <div className="section-head">
            <h2 className="display text-3xl md:text-5xl">Layanan</h2>
            <p className="text-ink-2 max-w-[52ch] text-lg">
              Setiap survei dimulai dari pertanyaan proyek Anda, bukan dari alat. Ini
              pertanyaan yang paling sering saya bantu jawab.
            </p>
          </div>

          <div className="mt-10 border-t border-rule">
            {services.map((s) => (
              <article key={s.question} className="service-row">
                <div>
                  <h3 className="display text-xl md:text-2xl leading-snug">
                    {s.question}
                  </h3>
                  <p className="mt-3 text-ink-2 leading-relaxed max-w-[50ch]">
                    {s.answer}
                  </p>
                </div>
                <dl className="service-meta">
                  <div>
                    <dt>Metode</dt>
                    <dd>{s.methods.join(", ")}</dd>
                  </div>
                  <div>
                    <dt>Hasil</dt>
                    <dd>{s.deliverables}</dd>
                  </div>
                  <div>
                    <dt>Umum dipakai untuk</dt>
                    <dd>{s.usedFor}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="proyek" className="section-band">
          <div className="wrap section">
            <div className="section-head">
              <h2 className="display text-3xl md:text-5xl">Rekam jejak</h2>
              <p className="text-ink-2 max-w-[52ch] text-lg">
                Proyek yang saya kerjakan langsung, bersama Laboratorium Fisika Bumi
                ITB dan mitra kontraktor geoteknik. Saring berdasarkan metode yang
                Anda butuhkan.
              </p>
            </div>
            <div className="mt-10">
              <ProjectRecord />
            </div>
            <p className="mt-10 text-sm text-ink-2">
              Rincian proyek dan contoh laporan tersedia di{" "}
              <a
                href={contact.portfolioPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                portofolio PDF
              </a>
              .
            </p>
          </div>
        </section>

        {/* PROCESS */}
        <section id="cara-kerja" className="wrap section">
          <div className="section-head">
            <h2 className="display text-3xl md:text-5xl">Cara kerja</h2>
            <p className="text-ink-2 max-w-[52ch] text-lg">
              Lima tahap dari permintaan sampai laporan, dengan satu kontak teknis
              dari awal hingga akhir.
            </p>
          </div>
          <ol className="steps mt-10">
            {steps.map((s, i) => (
              <li key={s.title} className="step">
                <span className="step-num" aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* PROFILE */}
        <section id="profil" className="section-band">
          <div className="wrap section grid gap-10 md:grid-cols-[1fr_1.3fr]">
            <div>
              <h2 className="display text-3xl md:text-5xl">Profil</h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed max-w-[60ch]">
              <p>
                Saya Gantang Masimuja, konsultan geofisika di Laboratorium Fisika Bumi
                ITB sejak 2019. Latar belakang fisika dan geoteknik membuat saya
                menyajikan hasil survei dalam bahasa yang dipakai insinyur desain:
                parameter, kedalaman, dan rekomendasi, bukan sekadar gambar penampang.
              </p>
              <dl className="profile-list">
                <div>
                  <dt>Pendidikan</dt>
                  <dd>
                    Magister Teknik Geoteknik, ITB (2025)
                    <br />
                    Sarjana Fisika, ITB (2019)
                  </dd>
                </div>
                <div>
                  <dt>Afiliasi</dt>
                  <dd>Laboratorium Fisika Bumi, Institut Teknologi Bandung</dd>
                </div>
                <div>
                  <dt>Wilayah kerja</dt>
                  <dd>Seluruh Indonesia dan luar negeri, berbasis di Jawa Tengah</dd>
                </div>
                <div>
                  <dt>Bahasa</dt>
                  <dd>Indonesia, Inggris, Arab</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="kontak" className="wrap section">
          <div className="contact">
            <div>
              <h2 className="display text-3xl md:text-5xl max-w-[16ch]">
                Ceritakan proyek Anda.
              </h2>
              <p className="mt-5 text-lg leading-relaxed max-w-[48ch] contact-muted">
                Kirim lokasi, tujuan survei, perkiraan luas area atau panjang
                lintasan, target kedalaman, dan jadwal. Proposal teknis dan biaya akan
                saya siapkan berdasarkan data itu.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={rfqMailto} className="btn btn-invert">
                  <Mail size={18} aria-hidden="true" />
                  Kirim permintaan penawaran
                </a>
                <a
                  href={contact.portfolioPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-invert"
                >
                  <Download size={18} aria-hidden="true" />
                  Portofolio PDF
                </a>
              </div>
            </div>
            <dl className="contact-list">
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </dd>
              </div>
              <div>
                <dt>LinkedIn</dt>
                <dd>
                  <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/gantangmasimuja
                  </a>
                </dd>
              </div>
              <div>
                <dt>CV</dt>
                <dd>
                  <a href={contact.cv} download="CV_Gantang_Masimuja.pdf">
                    CV_Gantang_Masimuja.pdf
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* WEB */}
        <section aria-labelledby="web-title" className="wrap pb-20">
          <div className="border-t border-rule pt-10 grid gap-8 md:grid-cols-[1fr_2fr]">
            <div>
              <h2 id="web-title" className="font-semibold text-lg">
                Pengembangan web dan otomasi
              </h2>
              <p className="mt-2 text-sm text-ink-2 max-w-[36ch]">
                Selain geofisika, saya membangun situs dan alur kerja otomatis untuk
                usaha kecil dan menengah.
              </p>
            </div>
            <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {webProjects.map((w) => (
                <li key={w.title}>
                  {w.link ? (
                    <a
                      href={w.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link font-semibold"
                    >
                      {w.title}
                    </a>
                  ) : (
                    <span className="font-semibold">{w.title}</span>
                  )}
                  <p className="text-sm text-ink-2 mt-1">{w.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-rule">
        <div className="wrap py-8 flex flex-col gap-3 sm:flex-row sm:justify-between text-sm text-ink-2">
          <span>© {new Date().getFullYear()} Gantang Masimuja</span>
          <span className="flex gap-5">
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="nav-link">
              LinkedIn
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="nav-link">
              GitHub
            </a>
            <a href={`mailto:${contact.email}`} className="nav-link">
              Email
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
