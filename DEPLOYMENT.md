# Deployment Guide - Portfolio Next.js

## Masalah yang Sudah Diperbaiki

### 1. Layout.js Issues
- ✅ Menghapus "use client" dari root layout
- ✅ Mengganti Head component dengan metadata export
- ✅ Memindahkan ThemeProvider ke client component terpisah

### 2. Environment Variables
- ✅ Menambahkan fallback untuk NEXT_PUBLIC_API_URL
- ✅ Menambahkan error handling untuk API calls
- ✅ Mengkonfigurasi next.config.mjs

### 3. Deprecated Components
- ✅ Menghapus Head component dari semua halaman
- ✅ Memperbaiki syntax errors di JSX

## Langkah Deployment di Vercel

### 1. Environment Variables
Pastikan Anda menambahkan environment variable berikut di Vercel:

```
NEXT_PUBLIC_API_URL=https://your-api-url.vercel.app
```

**Cara menambahkan:**
1. Buka project di Vercel Dashboard
2. Klik tab "Settings"
3. Pilih "Environment Variables"
4. Tambahkan:
   - Name: `NEXT_PUBLIC_API_URL`
   - Value: URL API Anda (contoh: `https://porto-next-api.vercel.app`)
   - Environment: Production, Preview, Development

### 2. Build Settings
Pastikan build settings di Vercel sudah benar:

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### 3. Deploy ulang
Setelah menambahkan environment variables:

1. Commit dan push perubahan ke GitHub
2. Vercel akan otomatis deploy ulang
3. Atau bisa manual trigger di Vercel Dashboard

## Troubleshooting

### Error: "Application error: a server-side exception has occurred"
**Penyebab:** Biasanya karena:
- Environment variable tidak dikonfigurasi
- API endpoint tidak bisa diakses
- Syntax error di kode

**Solusi:**
1. Periksa environment variables di Vercel
2. Pastikan API sudah deploy dan bisa diakses
3. Periksa build logs di Vercel untuk error detail

### Error: "Module not found"
**Penyebab:** Dependencies tidak terinstall dengan benar

**Solusi:**
1. Periksa package.json
2. Pastikan semua dependencies terinstall
3. Coba clear cache dan rebuild

### API Connection Issues
**Penyebab:** CORS atau network issues

**Solusi:**
1. Pastikan CORS di API sudah dikonfigurasi untuk domain Vercel
2. Periksa apakah API endpoint bisa diakses dari browser
3. Test dengan Postman atau curl

## Struktur File yang Diperbaiki

```
porto-next-app/
├── app/
│   ├── layout.js ✅ (Fixed)
│   ├── page.js ✅ (Fixed)
│   ├── about/page.js ✅ (Fixed)
│   ├── project/page.js ✅ (Fixed)
│   ├── contact/page.js ✅ (Fixed)
│   └── components/
│       ├── Providers.js ✅ (New)
│       ├── HomeClient.js ✅ (Fixed)
│       └── ...
├── next.config.mjs ✅ (Updated)
└── package.json ✅ (Checked)
```

## Testing Setelah Deploy

1. **Homepage**: Pastikan loading tanpa error
2. **Projects**: Cek apakah data project muncul
3. **About**: Pastikan profile, experience, education load
4. **Contact**: Test form submission
5. **Navigation**: Pastikan semua link berfungsi

## Monitoring

Setelah deploy berhasil, monitor:
- Build logs di Vercel
- Function logs untuk server-side errors
- Analytics untuk user behavior
- Performance metrics

## Support

Jika masih ada masalah:
1. Periksa Vercel Function Logs
2. Test API endpoints secara terpisah
3. Periksa browser console untuk client-side errors
4. Pastikan database connection berfungsi 