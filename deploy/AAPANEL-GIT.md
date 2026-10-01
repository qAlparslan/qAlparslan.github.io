# Ubuntu + aaPanel + GitHub (push/pull köprüsü)

GitHub **Pages değil**, sadece **kod senkronu ve deploy tetikleyici**. Site VDS’te, aaPanel ile yönetilir.

## Neden mantıklı?

- **aaPanel**: site ekleme, SSL, dosya yöneticisi, Nginx ayarı — SSH’a her seferinde girmek zorunda kalmazsın.
- **GitHub**: yerelde commit/push, sunucuda `git pull` (veya webhook) — “köprü” net ve yedekli.
- **VDS**: domain tamamen sende; profil vitrini sadece site URL’ine link verir.

## Kurulum sırası (özet)

1. VDS → **Ubuntu 22.04/24.04** temiz kurulum.
2. SSH ile güvenlik: anahtarlı giriş, `ufw` (22, 8888 panel?, 80, 443 — panel portunu aaPanel kurarken özelleştir).
3. [aaPanel resmi kurulum](https://www.aapanel.com/new/download.html) (Ubuntu script).
4. Panelde: **Nginx** (statik site için yeterli; Node gerekmez sürekli çalışsın diye).
5. **Website → Add site** → domain (veya önce IP / geçici alt domain).
6. **SSL → Let’s Encrypt** (domain DNS A kaydı sunucuya işaret etmeli).
7. GitHub’da **private** repo oluştur, projeyi push et.

## Sunucuda ilk clone

Panel **Terminal** veya SSH:

```bash
mkdir -p /www/wwwroot/portfolio-src
cd /www/wwwroot/portfolio-src
git clone git@github.com:KULLANICI/portfolio.git .
```

Deploy key: GitHub repo → Settings → Deploy keys → sunucunun `~/.ssh/id_ed25519.pub` (read-only yeterli).

## Build stratejisi (ikisi de olur)

### A) Sunucuda build (push/pull basit)

Sunucuya bir kez Node kur (aaPanel “App Store” veya `nvm`):

```bash
cd /www/wwwroot/portfolio-src
npm ci
npm run build
```

Site **root**’unu aaPanel’de **`/www/wwwroot/portfolio-src/dist`** yap  
(Website → site → Root directory / Nginx root).

Güncelleme script’i (`/www/wwwroot/portfolio-src/deploy.sh`):

```bash
#!/bin/bash
set -e
cd /www/wwwroot/portfolio-src
git pull origin main
npm ci
npm run build
# dist zaten root ise ek işlem gerekmez
```

Yerelde: değiştir → `git push` → sunucuda `./deploy.sh` (veya webhook ile otomatik).

### B) Yerelde build, sunucuya sadece `dist` (sunucuda Node yok)

Yerelde build + rsync/scp `dist/` → `/www/wwwroot/portfolio/`  
GitHub yine kaynak kod köprüsü; sunucu sadece statik dosya alır.  
Otomasyon için GitHub Actions + SSH rsync (isteğe bağlı).

Portfolyo için **A veya B** yeterli; aaPanel ile **A** çoğu kişiye daha rahat (“sunucuda pull + build”).

## SPA (React) Nginx kuralı

aaPanel → site → **Config** / Rewrite:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

`deploy/nginx-portfolio.conf` dosyasındaki mantık aynı.

## Güvenlik (aaPanel kullanan herkes için)

- Panel URL’sini **rastgele port** + güçlü şifre; mümkünse panel erişimini **sadece senin IP**’ne kısıtla.
- Panel ve sistem **güncel** kalsın.
- SSH: şifre yerine **anahtar**; root yerine sudo kullanıcı (tercihen).
- GitHub repo **private**; deploy key **read-only**.

## Yerel ↔ GitHub ↔ Sunucu akışı

```
[Laptop]  git push  →  [GitHub private repo]
                              ↓
                    [VDS] git pull + npm run build
                              ↓
                    [aaPanel Nginx] → domain HTTPS
```

## Domain

Domain satıcısında: `@` ve `www` → VDS IPv4.  
SSL’i aaPanel Let’s Encrypt ile al; DNS yayılmadan sertifika hata verir — önce A kaydını doğrula.

## aaPanel mi, sadece Nginx mi?

| | Sadece Nginx (CLI) | aaPanel |
|--|-------------------|---------|
| Öğrenme | Biraz Linux | Daha görsel |
| Risk | Daha az yüzey | Panel ek servis — güvenli kur |
| Git pull + build | Script sen yazarsın | Terminal + aynı script |

Senin tarifin (VDS + Ubuntu + aaPanel + GitHub köprüsü) **uygun ve yaygın** bir setup.
