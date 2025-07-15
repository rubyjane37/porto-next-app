# Deployment Guide - Portfolio Next.js

## ✅ Masalah yang Sudah Diperbaiki

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

### 4. CORS Issues
- ✅ Update semua endpoint API dengan prefix `/api`
- ✅ Perbaikan CORS configuration di backend
- ✅ Update service layer dengan error handling yang lebih baik

## 🚀 Langkah Deployment di Vercel

### 1. Environment Variables
Pastikan Anda menambahkan environment variable berikut di Vercel:

```
NEXT_PUBLIC_API_URL=https://porto-natsrululum37-api.vercel.app
```

**Cara menambahkan:**
1. Buka project di Vercel Dashboard
2. Klik tab "Settings"
3. Pilih "Environment Variables"
4. Tambahkan:
   - Name: `NEXT_PUBLIC_API_URL`
   - Value: `https://porto-natsrululum37-api.vercel.app`
   - Environment: Production, Preview, Development

### 2. Backend Environment Variables
Pastikan backend juga sudah dikonfigurasi dengan benar:

```env
DATABASE_URL=your-neon-database-url
CORS_ORIGIN=https://natsrululum37.vercel.app
NODE_ENV=production
```

### 3. Build Settings
Pastikan build settings di Vercel sudah benar:

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### 4. Deploy ulang
Setelah menambahkan environment variables:

1. Commit dan push perubahan ke GitHub
2. Vercel akan otomatis deploy ulang
3. Atau bisa manual trigger di Vercel Dashboard

## 🔧 API Endpoints yang Diperbaiki

Semua endpoint sekarang menggunakan prefix `/api`:

- `GET /api/projects/featured` - Project unggulan
- `GET /api/projects` - Semua project
- `GET /api/profile` - Data profile
- `GET /api/experiences` - Data pengalaman
- `GET /api/education` - Data pendidikan
- `POST /api/contact` - Kirim pesan

## 🛠️ Troubleshooting

### Error: "CORS policy: No 'Access-Control-Allow-Origin' header"
**Penyebab:** CORS belum dikonfigurasi dengan benar di backend

**Solusi:**
1. Pastikan backend sudah deploy dengan CORS configuration yang benar
2. Periksa environment variable `CORS_ORIGIN` di backend
3. Pastikan domain frontend sudah ditambahkan ke allowed origins

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

## 📁 Struktur File yang Diperbaiki

```
porto-next-app/
├── app/
│   ├── layout.js ✅ (Fixed)
│   ├── page.js ✅ (Updated API endpoints)
│   ├── about/page.js ✅ (Updated API endpoints)
│   ├── project/page.js ✅ (Updated API endpoints)
│   ├── contact/page.js ✅ (Updated API endpoints)
│   ├── services/
│   │   └── portfolioService.js ✅ (Updated with /api prefix)
│   └── components/
│       ├── Providers.js ✅ (New)
│       ├── ClientHeader.js ✅ (New)
│       ├── ClientFooter.js ✅ (New)
│       ├── HomeClient.js ✅ (Updated)
│       └── ...
├── next.config.mjs ✅ (Updated with security headers)
└── package.json ✅ (Checked)
```

## 🧪 Testing Setelah Deploy

1. **Homepage**: Pastikan loading tanpa error
2. **Projects**: Cek apakah data project muncul
3. **About**: Pastikan profile, experience, education load
4. **Contact**: Test form submission
5. **Navigation**: Pastikan semua link berfungsi

## 📊 Monitoring

Setelah deploy berhasil, monitor:
- Build logs di Vercel
- Function logs untuk server-side errors
- Analytics untuk user behavior
- Performance metrics

## 🔒 Security

- ✅ CORS protection
- ✅ Input validation
- ✅ Error handling yang aman
- ✅ Security headers
- ✅ Rate limiting (via Vercel)

## 📞 Support

Jika masih ada masalah:
1. Periksa Vercel Function Logs
2. Test API endpoints secara terpisah
3. Periksa browser console untuk client-side errors
4. Pastikan database connection berfungsi 