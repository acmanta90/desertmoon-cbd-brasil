# Desertmoon CBD Brasil — Site Institucional

Site educativo desenvolvido com [Next.js 14](https://nextjs.org/) (App Router), TypeScript e TailwindCSS para apresentar os serviços da Desertmoon CBD Brasil sem fins comerciais. O projeto destaca orientação médica, suporte ao paciente e materiais para profissionais de saúde.

## 🚀 Tecnologias

- Next.js 14 (App Router)
- TypeScript
- TailwindCSS + PostCSS
- ESLint + Prettier
- Integração mock com SendGrid e reCAPTCHA v3

## 📦 Instalação

1. Certifique-se de utilizar **Node.js 18** ou superior.
2. Clone este repositório e instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente (ver seção abaixo).
4. Execute o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

   A aplicação ficará disponível em `http://localhost:3000`.

## 🧪 Scripts disponíveis

- `npm run dev` — inicia o servidor de desenvolvimento.
- `npm run build` — gera a build de produção.
- `npm run start` — executa a aplicação em modo produção.
- `npm run lint` — roda as verificações de lint.

## 🔐 Variáveis de ambiente

Crie um arquivo `.env` com base no template `.env.example`:

```env
WHATSAPP_URL=https://wa.me/...
CALENDLY_URL=https://calendly.com/...
SUPPORT_EMAIL=contato@desertmoon.com.br
SENDGRID_KEY= # chave API SendGrid (opcional em desenvolvimento)
RECAPTCHA_KEY= # chave secreta do reCAPTCHA v3 (opcional em desenvolvimento)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY= # chave pública do reCAPTCHA v3
```

- Os formulários de contato e cadastro médico consomem as rotas `/api/contact` e `/api/doctor-apply`.
- Caso as chaves reCAPTCHA não sejam informadas, a validação é ignorada apenas em ambiente local.
- Se `SENDGRID_KEY` não estiver definida, as mensagens são apenas registradas no console (modo mock).

## 🌐 SEO & Deploy

- Configurações automáticas de `robots.txt` e `sitemap.xml` via App Router.
- Metadados padrão configurados em `src/app/layout.tsx`.
- Pronto para deploy na [Vercel](https://vercel.com/new/clone?repository-url=https://github.com/usuario/desertmoon-cbd-brasil) ou Netlify.

## 🧭 Estrutura de rotas

- `/` — Home com hero, etapas, catálogo informativo, área médica e newsletter.
- `/sobre-o-cbd`
- `/como-funciona`
- `/produtos`
- `/area-medica`
- `/pacientes`
- `/blog` e `/blog/[slug]`
- `/contato`
- `/legal/privacidade`
- `/legal/termos`

## 📄 Conformidade LGPD

A Desertmoon CBD Brasil trata dados pessoais e sensíveis com base legal adequada e consentimento informado. Para exercer seus direitos como titular de dados, contate nosso DPO pelo e-mail **privacidade@desertmoon.com.br**.

---

Feito com foco em educação, transparência e suporte clínico responsável.
