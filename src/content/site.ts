export const site = {
  name: 'Adın Soyadın',
  title: 'Yazılım Geliştirici',
  tagline: 'Web ve mobil için sade, hızlı ve kullanıcı odaklı ürünler tasarlıyorum.',
  location: 'Türkiye',
  email: 'hello@ornek.com',
  availability: 'Freelance & tam zamanlı projelere açığım',
  about: [
    'Merhaba — vitrin amaçlı bu sitede üzerinde çalıştığım projeleri ve yetkinliklerimi paylaşıyorum. Kaynak kodu her projede zorunlu değil; odak noktam canlı demo ve ürün hikâyesi.',
    'Frontend ağırlıklı çalışıyorum; performans, erişilebilirlik ve okunaklı arayüz benim için öncelik.',
  ],
  nav: [
    { id: 'about', label: 'Hakkımda' },
    { id: 'projects', label: 'Projeler' },
    { id: 'skills', label: 'Yetenekler' },
    { id: 'contact', label: 'İletişim' },
  ],
  social: [
    { label: 'GitHub', href: 'https://github.com/KULLANICI_ADIN' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/KULLANICI_ADIN' },
  ],
  projects: [
    {
      title: 'Proje Adı',
      description:
        'Kısa açıklama: hangi problemi çözdüğün, kimler için yaptığın ve senin katkın.',
      tags: ['React', 'TypeScript', 'API'],
      demoUrl: 'https://',
      repoUrl: undefined as string | undefined,
      highlight: true,
    },
    {
      title: 'İkinci Proje',
      description: 'Vitrin repolarında olduğu gibi sadece demo linki de yeterli.',
      tags: ['Vite', 'CSS'],
      demoUrl: 'https://',
      repoUrl: undefined,
      highlight: false,
    },
    {
      title: 'Üçüncü Proje',
      description: 'Ekran görüntüsü veya Figma linki README yerine burada da kullanılabilir.',
      tags: ['Mobile', 'UI'],
      demoUrl: 'https://',
      repoUrl: 'https://github.com/KULLANICI_ADIN/ornek-repo',
      highlight: false,
    },
  ],
  skillGroups: [
    {
      title: 'Frontend',
      items: ['React', 'TypeScript', 'HTML/CSS', 'Vite'],
    },
    {
      title: 'Araçlar',
      items: ['Git', 'GitHub', 'Figma', 'VS Code / Cursor'],
    },
    {
      title: 'Diğer',
      items: ['REST API', 'Responsive tasarım', 'Temel SEO'],
    },
  ],
} as const

export type SiteContent = typeof site
