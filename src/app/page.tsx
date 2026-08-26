"use client";

import React, { useState } from 'react';
import { 
  MapPin, 
  Briefcase, 
  Code, 
  Zap, 
  Download, 
  ExternalLink, 
  Mail, 
  Activity,
  Layers,
  Database
} from 'lucide-react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('geophysics');

  // Link to the CV file stored in the public folder
  const cvLink = "/CV_Gantang_Masimuja.pdf";
  // Link to the Portfolio PDF on Google Drive
  const gdriveLink = "https://drive.google.com/file/d/1Ldv6JTImdvt8BUOaXwKOI0rj4BSmcDyD/view?usp=sharing";
  const emailLink = "mailto:gmasimuja@gmail.com";

  const webProjects = [
    {
      title: "Ganesha Cendekia",
      role: "Founder & Developer",
      desc: "Platform pendidikan dan pengembangan akademik. Dirancang dengan fokus pada skalabilitas dan user experience.",
      link: "https://ganeshacendekia.com",
      tags: ["Web App", "Education", "Next.js"]
    },
    {
      title: "Qurbanku Online",
      role: "Lead Developer",
      desc: "Platform e-commerce musiman untuk manajemen dan pemesanan hewan kurban secara digital.",
      link: "https://qurbanku.online",
      tags: ["E-Commerce", "Payment Gateway"]
    },
    {
      title: "Solo Bangun Pratama",
      role: "Fullstack Developer",
      desc: "Website company profile dan katalog layanan konstruksi dengan desain profesional dan responsif.",
      link: "https://solobangunpratama.com",
      tags: ["Company Profile", "SEO Optimized"]
    },
    {
      title: "Finance Assistant Automation",
      role: "Automation Engineer",
      desc: "Sistem otomasi tingkat lanjut menggunakan n8n untuk asisten finansial, memangkas waktu rekonsiliasi data.",
      link: "#",
      tags: ["n8n", "Workflow Automation", "API"]
    }
  ];

  const geoProjects = [
    {
      sector: "Energi & Pembangkit Listrik",
      items: [
        { year: "2024-2025", name: "Proyek Geothermal Star Energy (Darajat & Gn. Salak)", method: "Seismic Downhole" },
        { year: "2025", name: "PLTS Pulau Bulan", method: "Geolistrik & Thermal Resistivity" },
        { year: "2024", name: "Proyek PLTN Kalimantan Barat", method: "Seismic Crosshole" },
        { year: "2021", name: "Bendungan PLTA Tapsel", method: "MASW, Seismic Refraction, Logging" },
      ]
    },
    {
      sector: "Infrastruktur Strategis",
      items: [
        { year: "2026", name: "Gedung DPR, DPD II, OIKN", method: "MASW" },
        { year: "2025", name: "RS Vertikal Riau & Jambi", method: "MASW" },
        { year: "2025", name: "Gedung Bank Indonesia", method: "Geolistrik & GPR" },
        { year: "2021", name: "Gedung Taspen Mandiri", method: "Seismic Downhole" },
      ]
    },
    {
      sector: "Transportasi & Sumber Daya Air",
      items: [
        { year: "2025", name: "Proyek Kabel Laut PLN Sultra", method: "Geolistrik 2D" },
        { year: "2021-2022", name: "Tol Semarang-Jogja & Solo-Jogja", method: "Seismic Downhole, MASW" },
        { year: "2019-2022", name: "Bendungan (Pulau Seram, Kebumen, Trenggalek, Tripa 3)", method: "PMT, Seismic Downhole/Refraction, MASW" },
      ]
    },
    {
      sector: "Industri & Pertambangan",
      items: [
        { year: "2024", name: "Proyek Timbunan PT. Ceri, Kolaka", method: "Seismic Downhole" },
        { year: "2022", name: "Smelter Freeport, Timika", method: "MASW" },
        { year: "2022", name: "Kawasan Industri Batang", method: "Geolistrik" },
        { year: "2019", name: "Smelter PT. Antam, Halmahera Timur", method: "Geolistrik & Seismic Downhole" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30">
      
      {/* HEADER / NAV */}
      <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter text-white">
            GM<span className="text-amber-500">.</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-amber-400 transition-colors">Profil</a>
            <a href="#expertise" className="hover:text-amber-400 transition-colors">Keahlian</a>
            <a href="#portfolio" className="hover:text-amber-400 transition-colors">Portofolio</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Kontak</a>
          </div>
          <a 
            href={cvLink}
            download="CV_Gantang_Masimuja.pdf"
            className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-medium transition-all"
          >
            <Download size={16} className="text-amber-500" />
            <span className="hidden sm:inline">Unduh CV</span>
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 max-w-6xl mx-auto flex flex-col justify-center min-h-[90vh]">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-sm font-medium mb-8">
            <Activity size={16} />
            M.T. in Geophysics & Software Engineering
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Gantang Masimuja
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">
              Expertise Meets Technology.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mb-10">
            Penyedia layanan investigasi bawah permukaan untuk infrastruktur strategis nasional, 
            sekaligus kreator solusi digital dan automasi bisnis. Menjembatani sains kebumian dan teknologi web modern.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#portfolio" className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-full transition-all">
              Lihat Portofolio
            </a>
            <a href="#contact" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all">
              Hubungi Saya
            </a>
          </div>
        </div>
      </section>

      {/* CAPABILITIES / EXPERTISE */}
      <section id="expertise" className="py-24 px-6 bg-slate-900/50 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Kapabilitas Utama</h2>
            <div className="h-1 w-20 bg-amber-500 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-amber-500/30 transition-colors group">
              <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Activity className="text-amber-500" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Metode Seismik</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Analisis dinamis tanah dengan akurasi tinggi menggunakan MASW, Seismic Refraction, Seismic Downhole, Seismic Crosshole, & Mikro Seismik.
              </p>
            </div>
            
            <div className="p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-amber-500/30 transition-colors group">
              <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Layers className="text-amber-500" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Elektrik & In-situ Test</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Investigasi komprehensif via Geolistrik 2D, Thermal Resistivity, GPR, Logging Gamma Ray, dan Pressure Meter Test (PMT).
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-amber-500/30 transition-colors group">
              <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code className="text-amber-500" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Web & Automation</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Pengembangan platform digital modern (Next.js, Tailwind), e-commerce, hingga otomasi alur kerja (n8n) untuk efisiensi bisnis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DUAL PORTFOLIO SECTION */}
      <section id="portfolio" className="py-24 px-6 max-w-6xl mx-auto">
        
        {/* Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Rekam Jejak Proyek</h2>
            <p className="text-slate-400 max-w-xl">Pilih kategori untuk melihat pengalaman komprehensif saya di bidang investigasi bawah permukaan maupun rekayasa perangkat lunak.</p>
          </div>
          <div className="flex bg-slate-900 p-1.5 rounded-full border border-white/5 w-fit">
            <button 
              onClick={() => setActiveTab('geophysics')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${activeTab === 'geophysics' ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20' : 'text-slate-400 hover:text-white'}`}
            >
              Geofisika & Geoteknik
            </button>
            <button 
              onClick={() => setActiveTab('webdev')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${activeTab === 'webdev' ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20' : 'text-slate-400 hover:text-white'}`}
            >
              Web & Software
            </button>
          </div>
        </div>

        {/* TAB CONTENT: GEOPHYSICS */}
        {activeTab === 'geophysics' && (
          <div className="grid md:grid-cols-2 gap-6 animate-in fade-in duration-500">
            {geoProjects.map((category, idx) => (
              <div key={idx} className="bg-slate-900/50 rounded-3xl p-8 border border-white/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 bg-amber-500 rounded-full"></div>
                  <h3 className="text-xl font-bold text-white">{category.sector}</h3>
                </div>
                <div className="space-y-4">
                  {category.items.map((item, i) => (
                    <div key={i} className="group flex flex-col sm:flex-row sm:items-start gap-4 p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all">
                      <div className="text-amber-500 font-mono text-sm pt-1 shrink-0">{item.year}</div>
                      <div>
                        <div className="text-white font-medium mb-1">{item.name}</div>
                        <div className="text-slate-400 text-sm flex items-center gap-2">
                          <Activity size={14} className="text-slate-500" />
                          {item.method}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB CONTENT: WEB DEV */}
        {activeTab === 'webdev' && (
          <div className="grid md:grid-cols-2 gap-6 animate-in fade-in duration-500">
            {webProjects.map((project, idx) => (
              <div key={idx} className="group bg-slate-900 rounded-3xl p-8 border border-white/5 hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">{project.title}</h3>
                    <div className="text-amber-500 text-sm font-medium">{project.role}</div>
                  </div>
                  {project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-amber-500/20 transition-all">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA / CONTACT */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-slate-950 rounded-[3rem] p-12 md:p-20 text-center border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[80px] rounded-full pointer-events-none"></div>
          
          <h2 className="text-4xl font-bold text-white mb-6">Mari Berkolaborasi</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Mencari partner untuk proyek investigasi bawah tanah atau membutuhkan solusi digital dan otomasi untuk perusahaan Anda?
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={emailLink} className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-full transition-all flex items-center justify-center gap-2">
              <Mail size={18} />
              Hubungi via Email
            </a>
            <a 
              href={gdriveLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Unduh Portofolio PDF
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Gantang Masimuja, M.T. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="https://linkedin.com/in/gantang-masimuja-b9a122173/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-500 transition-colors" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://github.com/gmasimuja" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-500 transition-colors" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}