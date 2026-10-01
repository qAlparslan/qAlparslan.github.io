export const site = {
  name: 'Alparslan Tuna Şen',
  title: 'Bilgisayar Programcılığı Öğrencisi · Full-Stack Geliştirici',
  tagline:
    'Sıfırdan geliştirip yayına aldığım uçtan uca web projeleriyle yazılım yaşam döngüsünü pratik ediyorum; staj ile kurumsal deneyime geçmek istiyorum.',
  location: 'Üsküdar, İstanbul',
  email: 'alparslansen5757@gmail.com',
  availability: 'Yalova Üniversitesi 2. sınıf',
  about: [
    'Yalova Üniversitesi Bilgisayar Programcılığı 2. sınıf öğrencisiyim. Maltepe Kayra MTAL Bilişim Teknolojileri mezunuyum; teorik eğitimi, canlıya alınmış full-stack projelerle birleştiriyorum.',
    'Acıbadem Sağlık Grubu’nda Bilişim Sistemleri yardım masası stajında teknik destek ve operasyon süreçlerini deneyimledim. Takım çalışmasına yatkınım; analitik düşünüp yeni teknolojileri hızlı öğrenmeyi seviyorum.',
    'Bu sitede vitrin olarak öne çıkardığım işler, gerçek kullanıcı ve operasyon ihtiyaçlarına göre tasarlanmış ürünler — ödeme, kargo, stok ve uyum (KVKK) gibi uçtan uca konulara odaklanıyorum.',
  ],
  nav: [
    { id: 'about', label: 'Hakkımda' },
    { id: 'projects', label: 'Projeler' },
    { id: 'skills', label: 'Yetenekler' },
    { id: 'contact', label: 'İletişim' },
  ],
  social: [
    { label: 'GitHub', href: 'https://github.com/qAlparslan' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alparslan-%C5%9Fen-039062268/' },
  ],
  projects: [
    {
      title: 'Asta Shop — E-Ticaret Platformu',
      description:
        'Asta Ticaret için cilt bakımı ve kozmetik odaklı B2C e-ticaret: tek monorepoda React (Vite) vitrin, JWT korumalı admin paneli ve Express + MySQL API. PayTR iFrame ödemesi (sunucu webhook + HMAC), sipariş–stok yaşam döngüsü, kupon ve çoklu depo; MNG/DHL ile kargoya verme, ZPL etiket ve takip; Paraşüt taslak fatura, Nodemailer, KVKK rıza/yasal metin altyapısı, Recharts dashboard ve GitHub Actions CI. Üretimde astaticaret.com.',
      tags: [
        'React',
        'Vite',
        'Node.js',
        'Express',
        'MySQL',
        'PayTR',
        'Tailwind CSS',
      ],
      demoUrl: 'https://astaticaret.com',
      repoUrl: 'https://github.com/qAlparslan/asta-shop',
      highlight: true,
    },
  ],
  skillGroups: [
    {
      title: 'Web & Frontend',
      items: ['JavaScript', 'React', 'HTML', 'CSS', 'Vite', 'Tailwind CSS'],
    },
    {
      title: 'Backend & Veri',
      items: ['Node.js', 'Express', 'MySQL', 'REST API', 'JWT'],
    },
    {
      title: 'Diller & Araçlar',
      items: ['C#', 'Java', 'C++', 'Python', 'Git', 'GitHub'],
    },
  ],
} as const

export type SiteContent = typeof site
