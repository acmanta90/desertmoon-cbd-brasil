# Desertmoon CBD Brasil — Site Institucional

Next.js 14 (App Router) + TypeScript + TailwindCSS. Sem e-commerce. Conteúdo educativo, CTAs para WhatsApp/Calendly e páginas institucionais.

## Rodar localmente
```bash
npm install
npm run dev
```
Abra http://localhost:3000

## Variáveis (.env.local)
```
WHATSAPP_URL=
CALENDLY_URL=
SUPPORT_EMAIL=contato@desertmoon.com.br
```

## Deploy (Vercel)
- Crie um projeto na Vercel e importe este repositório.
- Configure as variáveis acima no painel da Vercel.
- Faça deploy.

## APIs leves
- `POST /api/contact` → { name, email, message }
- `POST /api/doctor-apply` → { name, email, crm, message }
Atualmente fazem `console.log`. Conecte SendGrid/SES conforme desejar.

© 2025 Desertmoon.
