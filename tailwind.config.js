# Bloom Agency — Guía de Deploy

## Pasos para publicar la web

### 1. Conectar Formspree (5 min)
1. Ve a https://formspree.io → Sign up gratis
2. Clic en **"New Form"** → ponle nombre "Bloom Agency Contact"
3. Copia el endpoint que te da (ej: `https://formspree.io/f/xabcdefg`)
4. Abre `src/components/Contact.jsx` línea 7
5. Reemplaza `YOUR_FORM_ID` con tu ID real

### 2. Subir a GitHub (5 min)
1. Ve a https://github.com → New repository → Privado → "bloom-agency"
2. En tu terminal local:
```bash
git init
git add .
git commit -m "Initial commit - Bloom Agency"
git remote add origin https://github.com/TU_USUARIO/bloom-agency.git
git push -u origin main
```

### 3. Deploy en Vercel (3 min)
1. Ve a https://vercel.com → Sign up con GitHub
2. **"Add New Project"** → importa el repo `bloom-agency`
3. Vercel detecta Vite automáticamente → clic **Deploy**
4. En ~1 minuto tienes la web en `bloom-agency.vercel.app`

### 4. Conectar tu dominio (10 min)
1. En Vercel → tu proyecto → **Settings → Domains**
2. Añade tu dominio (ej: `bloomagency.io`)
3. Vercel te da 2 registros DNS que tienes que añadir en Namecheap:
   - Tipo `A` → valor que da Vercel
   - Tipo `CNAME` → `cname.vercel-dns.com`
4. En 5-10 min el dominio ya apunta a tu web

### 5. Email con Zoho Mail (gratis)
1. Ve a https://zoho.com/mail → Free plan
2. Añade tu dominio → sigue los pasos para verificarlo
3. Crea `hola@bloomagency.io` o la cuenta que quieras
4. En Formspree → Settings → pon ese email para recibir los formularios

---

✅ Resultado: web profesional con dominio propio, formulario real y email corporativo.
💰 Coste total: ~$12/año (solo el dominio). Todo lo demás es gratis.
