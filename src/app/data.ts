export const contact = {
  email: "gmasimuja@gmail.com",
  linkedin: "https://www.linkedin.com/in/gantangmasimuja/",
  github: "https://github.com/gmasimuja",
  cv: "/CV_Gantang_Masimuja.pdf",
  portfolioPdf:
    "https://drive.google.com/file/d/1Ldv6JTImdvt8BUOaXwKOI0rj4BSmcDyD/view?usp=sharing",
};

const rfqBody = [
  "Yth. Bapak Gantang Masimuja,",
  "",
  "Kami ingin meminta penawaran survei dengan rincian berikut:",
  "",
  "Perusahaan / instansi: ",
  "Nama proyek & lokasi: ",
  "Tujuan survei (mis. kelas situs, deteksi rongga, air tanah): ",
  "Perkiraan luas area / panjang lintasan: ",
  "Target kedalaman: ",
  "Jadwal yang diinginkan: ",
  "Dokumen pendukung (peta, layout, data bor) terlampir: ya / tidak",
  "",
  "Terima kasih.",
].join("\n");

export const rfqMailto = `mailto:${contact.email}?subject=${encodeURIComponent(
  "Permintaan penawaran survei geofisika",
)}&body=${encodeURIComponent(rfqBody)}`;

export type Service = {
  question: string;
  answer: string;
  methods: string[];
  deliverables: string;
  usedFor: string;
};

export const services: Service[] = [
  {
    question: "Berapa kelas situs dan parameter dinamik tanah di lokasi ini?",
    answer:
      "Profil kecepatan gelombang geser (Vs) dan gelombang P untuk analisis kegempaan dan desain fondasi.",
    methods: [
      "MASW",
      "Seismic downhole",
      "Seismic crosshole",
      "Seismik refraksi",
      "Mikroseismik",
    ],
    deliverables: "Profil Vs terhadap kedalaman, Vs30 dan kelas situs, modulus dinamik",
    usedFor: "Gedung tinggi, bendungan, PLTN, jalan tol",
  },
  {
    question: "Apakah ada rongga, sinkhole, atau anomali di bawah tapak?",
    answer:
      "Pemetaan resistivitas 2D dan radar tanah untuk menemukan rongga karst, zona lemah, dan objek tertanam sebelum konstruksi.",
    methods: ["Geolistrik / ERT 2D", "GPR"],
    deliverables: "Penampang resistivitas & radargram terinterpretasi, peta zona anomali",
    usedFor: "Kawasan karst, fondasi pabrik dan gedung, jalan akses",
  },
  {
    question: "Di mana dan seberapa dalam sumber air tanahnya?",
    answer:
      "Identifikasi lapisan akuifer untuk menentukan titik dan kedalaman sumur bor yang paling menjanjikan.",
    methods: ["Geolistrik 1D & 2D", "ADMT"],
    deliverables: "Penampang akuifer, rekomendasi titik dan kedalaman bor",
    usedFor: "Kawasan industri, pelabuhan, pembangkit, permukiman",
  },
  {
    question: "Berapa resistivitas tanah untuk grounding dan kabel?",
    answer:
      "Pengukuran resistivitas listrik dan termal tanah sebagai input desain sistem pentanahan dan rating kabel.",
    methods: ["Geolistrik", "Thermal resistivity"],
    deliverables: "Nilai resistivitas listrik & termal per titik dan kedalaman",
    usedFor: "PLTS, gardu, kabel tanah dan kabel laut",
  },
  {
    question: "Bagaimana sifat tanah dan batuan langsung di lubang bor?",
    answer:
      "Uji in-situ dan logging di lubang bor untuk melengkapi data penyelidikan tanah konvensional.",
    methods: ["Pressuremeter (PMT)", "Logging gamma ray"],
    deliverables: "Kurva tekanan–deformasi, log litologi",
    usedFor: "Bendungan, terowongan, fondasi dalam",
  },
];

export type Project = {
  year: string;
  name: string;
  place: string;
  methods: string[];
  note?: string;
};

export type Sector = { sector: string; items: Project[] };

export const sectors: Sector[] = [
  {
    sector: "Energi dan pembangkit listrik",
    items: [
      {
        year: "2026",
        name: "Eksplorasi akuifer untuk proyek panas bumi Geo Dipa Energi",
        place: "Gunung Patuha, Jawa Barat",
        methods: ["Geolistrik"],
        note: "Koordinator lapangan, ERT 2D",
      },
      {
        year: "2024–2025",
        name: "Proyek panas bumi Star Energy",
        place: "Darajat & Gunung Salak, Jawa Barat",
        methods: ["Downhole"],
      },
      {
        year: "2025",
        name: "PLTS Pulau Bulan",
        place: "Kepulauan Riau",
        methods: ["Geolistrik", "Thermal resistivity"],
      },
      {
        year: "2024",
        name: "Proyek PLTN",
        place: "Kalimantan Barat",
        methods: ["Crosshole"],
      },
      {
        year: "2021",
        name: "Bendungan PLTA Tapanuli Selatan",
        place: "Sumatera Utara",
        methods: ["MASW", "Refraksi", "Logging"],
      },
    ],
  },
  {
    sector: "Gedung dan infrastruktur strategis",
    items: [
      {
        year: "2026",
        name: "Gedung DPR, DPD II, dan Otorita IKN",
        place: "Ibu Kota Nusantara, Kalimantan Timur",
        methods: ["MASW"],
      },
      {
        year: "2025",
        name: "Rumah Sakit Vertikal Riau & Jambi",
        place: "Riau dan Jambi",
        methods: ["MASW"],
      },
      {
        year: "2025",
        name: "Gedung Bank Indonesia",
        place: "",
        methods: ["Geolistrik", "GPR"],
      },
      {
        year: "2021",
        name: "Gedung Taspen Mandiri",
        place: "",
        methods: ["Downhole"],
      },
    ],
  },
  {
    sector: "Geohazard dan air tanah",
    items: [
      {
        year: "2026",
        name: "Deteksi rongga dan sinkhole di kawasan karst",
        place: "Baucau, Timor-Leste",
        methods: ["Geolistrik"],
        note: "ERT 2D, Wenner–Schlumberger",
      },
      {
        year: "2026",
        name: "Eksplorasi air tanah",
        place: "Cipada, Bandung",
        methods: ["Geolistrik", "ADMT"],
      },
    ],
  },
  {
    sector: "Transportasi dan sumber daya air",
    items: [
      {
        year: "2025",
        name: "Kabel laut PLN",
        place: "Sulawesi Tenggara",
        methods: ["Geolistrik"],
      },
      {
        year: "2021–2022",
        name: "Jalan Tol Semarang–Yogyakarta & Solo–Yogyakarta",
        place: "Jawa Tengah dan DIY",
        methods: ["Downhole", "MASW"],
      },
      {
        year: "2019–2022",
        name: "Bendungan Pulau Seram, Kebumen, Trenggalek, dan Tripa 3",
        place: "Maluku, Jawa, Aceh",
        methods: ["PMT", "Downhole", "Refraksi", "MASW"],
      },
    ],
  },
  {
    sector: "Industri dan pertambangan",
    items: [
      {
        year: "2024",
        name: "Timbunan PT Ceria",
        place: "Kolaka, Sulawesi Tenggara",
        methods: ["Downhole"],
      },
      {
        year: "2022",
        name: "Area PT Freeport Indonesia",
        place: "Tembagapura, Papua",
        methods: ["MASW"],
      },
      {
        year: "2022",
        name: "Kawasan Industri Batang",
        place: "Jawa Tengah",
        methods: ["Geolistrik"],
      },
      {
        year: "2019",
        name: "Smelter PT Antam",
        place: "Halmahera Timur, Maluku Utara",
        methods: ["Geolistrik", "Downhole"],
      },
    ],
  },
];

export const methodFilters = [
  "MASW",
  "Downhole",
  "Crosshole",
  "Refraksi",
  "Geolistrik",
  "GPR",
  "Thermal resistivity",
  "PMT",
  "Logging",
  "ADMT",
];

export const steps = [
  {
    title: "Kebutuhan dan data awal",
    body: "Kita bahas tujuan survei, kondisi lapangan, dan data yang sudah ada (peta, layout, data bor) agar metode yang dipilih tepat sasaran.",
  },
  {
    title: "Proposal teknis dan biaya",
    body: "Rencana lintasan atau titik ukur, spesifikasi alat, jadwal, dan RAB yang rinci, siap untuk proses pengadaan.",
  },
  {
    title: "Akuisisi lapangan",
    body: "Pengukuran dengan kontrol kualitas data harian dan laporan progres, mengikuti aturan K3 di lokasi klien.",
  },
  {
    title: "Pengolahan dan interpretasi",
    body: "Inversi dan analisis data, lalu dikorelasikan dengan data geologi dan bor yang tersedia.",
  },
  {
    title: "Laporan dan presentasi",
    body: "Laporan teknis dengan penampang, tabel parameter, dan rekomendasi desain, dipresentasikan kepada tim proyek.",
  },
];

export const webProjects = [
  {
    title: "Ganesha Cendekia",
    desc: "Platform bimbingan belajar daring. Pendiri dan pengembang.",
    link: "https://ganeshacendekia.com",
  },
  {
    title: "Qurbanku Online",
    desc: "Pemesanan dan pengelolaan hewan kurban secara daring.",
    link: "https://qurbanku.online",
  },
  {
    title: "Solo Bangun Pratama",
    desc: "Company profile dan katalog layanan kontraktor konstruksi.",
    link: "https://solobangunpratama.com",
  },
  {
    title: "Otomasi asisten keuangan",
    desc: "Alur kerja n8n untuk rekonsiliasi data keuangan.",
    link: "",
  },
];
