# Body Studio Pilates – Website

Proiect realizat în cadrul cursului universitar, cu scopul de a prezenta și promova online afacerea **Body Studio Pilates** din Cluj-Napoca, inclusiv prin integrarea elementelor specifice promovării pe rețelele de socializare.

---

## Despre proiect

Site-ul web al studioului de Pilates **Body Studio Pilates** a fost creat ca proiect de facultate în scopul **promovării unei afaceri reale în mediul online și pe rețelele sociale**. Proiectul acoperă cerințele unui website modern de prezentare pentru o afacere din domeniul wellness & fitness.

### Funcționalități incluse

- **Arbore de conținut** complet (navigație multi-pagină)
- **Conținut text** – descrierea studioului, clase, instructori, articole de blog
- **Conținut video** – embed YouTube pentru demonstrații Pilates
- **Conținut audio** – playlist ambient al studioului (HTML5 audio)
- **Legături rețele sociale** – Facebook, Instagram, YouTube, TikTok
- **Chestionar de satisfacție** – 4 întrebări cu rating stele (1–5), scor NPS, fără salvare de date
- **Formular de feedback / contact** – câmpuri de contact cu validare
- **Blog asociat** – 4 articole cu pagini individuale și randare Markdown
- **Galerie foto** – imagini reale ale studioului, sălilor și activităților
- **Design responsive** – adaptat pentru mobil, tabletă și desktop

---

## Stack tehnologic

| Tehnologie                  | Rol                                       |
| --------------------------- | ----------------------------------------- |
| **Next.js 15** (App Router) | Framework React, routing, SSG             |
| **React 19**                | UI components (Server & Client)           |
| **Tailwind CSS v4**         | Stilizare utility-first, temă customizată |
| **JavaScript (ES2022+)**    | Limbaj principal, fără TypeScript         |
| **HTML5**                   | Audio, video, formulare semantice         |
| **Vercel**                  | Hosting & deployment continuu             |
| **Git / GitHub**            | Versionare cod                            |

### Paletă de culori personalizată (Tailwind v4 `@theme`)

```css
--color-cream: #fdf8f2 --color-beige: #f5e8d8 --color-sand: #e3cdb4
  --color-mink: #c4a07a --color-caramel: #967040 --color-bark: #6e4e28
  --color-espresso: #422c10;
```

---

## Structura proiectului

```
my-app/
├── app/
│   ├── _components/       # Navbar, Footer, StarRating
│   ├── _lib/              # Date statice (posts.js)
│   ├── page.js            # Homepage
│   ├── despre-noi/        # Pagina Despre Noi
│   ├── clase/             # Tipuri de clase & prețuri
│   ├── galerie/           # Galerie foto & video
│   ├── blog/              # Listă articole + pagini individuale
│   ├── contact/           # Formular de contact
│   ├── satisfactie/       # Chestionar de satisfacție
│   ├── globals.css        # Stiluri globale & tema Tailwind
│   └── layout.js          # Layout rădăcină
└── public/
    ├── images/            # Fotografii reale ale studioului
    └── audio/             # Playlist ambient
```

---

## Rulare locală

```bash
cd my-app
npm install
npm run dev
```

Aplicația pornește la `http://localhost:3000`.

---

## Deployment

Proiectul este publicat pe **Vercel** cu deployment automat la fiecare push pe branch-ul `main`.

---
