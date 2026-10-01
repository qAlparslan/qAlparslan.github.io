# VDS üzerinde portfolyo yayını

Bu site **statik** (Vite build → `dist/`). VDS’te Node.js sürekli çalışmak zorunda değil; **Nginx** dosyaları sunar. Domain DNS’i VDS IP’sine yönlendirirsin.

## 1. VDS ne almalı?

Portfolyo için fazlasıyla yeterli:

| Özellik | Öneri |
|--------|--------|
| RAM | 1 GB (2 GB rahat) |
| CPU | 1 vCPU |
| Disk | 10–20 GB SSD |
| OS | **Ubuntu 22.04 veya 24.04 LTS** |
| Trafik | Aylık birkaç GB bile yeter |

Türkiye / Avrupa datacenter, ihtiyacına göre. Önemli olan: **root SSH**, **IPv4**, isteğe bağlı snapshot yedeği.

GitHub şart değil: projeyi **ZIP**, **SCP**, **SFTP** (FileZilla, WinSCP) veya sunucuda `git clone` (private repo başka yerde) ile taşıyabilirsin.

## 2. Sunucuyu ilk kurulum

SSH ile bağlan (Windows: PowerShell `ssh root@SUNUCU_IP`):

```bash
apt update && apt upgrade -y
apt install -y nginx certbot python3-certbot-nginx ufw
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw enable
```

## 3. Site dosyalarını yükle

**Bilgisayarında** (Windows, proje klasöründe):

```powershell
npm run build
```

`dist/` klasörünün tamamını sunucuya kopyala:

```powershell
scp -r dist/* root@SUNUCU_IP:/var/www/portfolio/
```

Sunucuda klasör:

```bash
mkdir -p /var/www/portfolio
chown -R www-data:www-data /var/www/portfolio
```

(Nginx `www-data` kullanıcısıyla okur.)

## 4. Nginx

`deploy/nginx-portfolio.conf` dosyasını sunucuya kopyala, `server_name` satırını kendi domain’inle değiştir:

```bash
nano /etc/nginx/sites-available/portfolio
# deploy/nginx-portfolio.conf içeriğini yapıştır, domain düzenle

ln -sf /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default   # isteğe bağlı
nginx -t && systemctl reload nginx
```

Tarayıcıda `http://SUNUCU_IP` veya domain ile site açılmalı.

## 5. Domain bağlama

Domain panelinde (Natro, GoDaddy, Cloudflare, …):

- **A kaydı**: `@` → `SUNUCU_IP`
- **A veya CNAME**: `www` → `SUNUCU_IP` veya `@`

DNS yayılması 5 dakika–48 saat sürebilir.

## 6. HTTPS (Let’s Encrypt, ücretsiz)

Domain sunucuya çözümlendikten sonra:

```bash
certbot --nginx -d ornek.com -d www.ornek.com
```

Otomatik yenileme genelde kurulu gelir: `certbot renew --dry-run`

## 7. Güncelleme (yeni deploy)

Her değişiklikten sonra yerelde `npm run build`, sonra tekrar:

```powershell
scp -r dist/* root@SUNUCU_IP:/var/www/portfolio/
```

İleride istersen sunucuda küçük bir script veya CI kullanırsın; portfolyo için SCP çoğu zaman yeter.

## 8. Güvenlik (kısa)

- SSH: mümkünse **anahtar** ile giriş, root şifre ile brute-force’a açık bırakma.
- Sadece 22, 80, 443 açık kalsın (`ufw`).
- VDS panelinden düzenli snapshot.

## GitHub vs VDS

| | Vercel / Pages | VDS |
|--|----------------|-----|
| Kurulum | Kolay | Sen kurarsın |
| Maliyet | Ücretsiz tier | Aylık ~$3–10+ |
| Kontrol | Az | Tam (nginx, başka site, mail vb.) |
| Bu proje | Build + upload | Build + `dist` → nginx |

Bu portfolyo için VDS “ağır” ama ileride aynı sunucuda API, blog, başka projeler barındırmak istiyorsan mantıklı.
