# GitHub Pages ile yayınlama

## 1. Repoyu GitHub’a yükle

```bash
git remote add origin https://github.com/KULLANICI/REPO-ADİ.git
git add .
git commit -m "Portfolyo sitesi"
git push -u origin main
```

## 2. Pages ayarı (bir kez)

Repo → **Settings** → **Pages**

- **Build and deployment** → Source: **GitHub Actions** (branch/deploy değil)

**Boş sayfa görürsen:** Source hâlâ “Deploy from a branch” ise site ham `index.html` sunar (`/src/main.tsx` yüklenemez). Mutlaka **GitHub Actions** seç; sonra Actions sekmesinden workflow’u yeniden çalıştır.

`main`/`master`’a her push’ta `.github/workflows/deploy-pages.yml` build alır ve yayınlar.

## 3. Site adresi

| Repo adı | URL |
|----------|-----|
| `kullanici.github.io` | `https://kullanici.github.io/` |
| Başka isim (ör. `portfolio`) | `https://kullanici.github.io/portfolio/` |

Vite `base` yolu workflow’da otomatik ayarlanır.

## 4. Özel domain (istersen)

1. `public/CNAME` oluştur — tek satır: `www.sitein.com` (`CNAME.example` örneğe bak).
2. DNS: domain satıcısında **A** kayıtları GitHub IP’leri veya **CNAME** → `kullanici.github.io`.
3. Repo → Settings → Pages → **Custom domain** → aynı domain.
4. **Enforce HTTPS** işaretle.

Güncel IP listesi: [GitHub Docs – Configuring a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## 5. Profil vitrini

GitHub profilinde **Website** alanına canlı Pages URL’ini yaz.

## Yerelde test (proje reposu ise)

Proje kökünde `base` `/portfolio/` olmalı; yerelde:

```bash
npm run build
npx vite preview --base /portfolio/
```

Kullanıcı sitesi (`*.github.io` repo) için yerelde normal `npm run dev` yeterli.
