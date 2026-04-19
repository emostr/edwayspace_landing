# edway.space — project context for Claude

## What is this

edway.space is a school platform for students (ученик), teachers (учитель), class head teachers (КЛАССНЫЙ РУКОВОДИТЕЛЬ), zaved (завуч). Replaces messenger chats, paper journals and Google Forms. Each school gets the codebase, deploys on their own server with their own domain. No central server — full autonomy per school.

## Roles

student — reads homework, schedule, notes, announcements. No publishing.
trusted_student — same as student + publishes notes and homework. Assigned by class head teachers only.
teacher — publishes homework and notes only for their own subjects and classes they teach.
class head — same as teacher + manages class schedule + publishes announcements for their class + assigns trusted students.
zaved (завуч) — publishes announcements for entire school or selected classes.

## MVP features

- Schedule (per class, managed by class head)
- Homework (with file attachments)
- Notes / lesson summaries (with file attachments)
- Announcements (class-level and school-level)
- Built-in surveys (replaces Google Forms)


## Design system

Metro UI dark aesthetic. Typography-first, flat, zero decorative noise.

Colors:
--bg: #0a0a0a
--bg-card: #141414
--bg-secondary: #1e1e1e
--accent: #0078d4
--accent-dim: #005a9e
--text: #ffffff
--text-muted: #8a8a8a
--border: #2a2a2a

Typography:
Font: Racama, loaded via @font-face from assets/fonts/racama-regular.woff2
Fallback: system-ui, sans-serif

Spacing scale: 8px / 16px / 32px / 64px / 96px

Rules — absolute, never break:
- Zero comments in any file, ever
- Zero border-radius above 2px
- Zero shadows
- Zero gradients
- Racama font only
- All colors via CSS custom properties in :root
- Single breakpoint at 768px
- Senior-level code only

Components:
Button: background #0078d4, color #ffffff, padding 14px 36px, border-radius 2px, border 2px solid #0078d4, hover #005a9e
Card: background #141414, border 1px solid #2a2a2a, border-radius 2px, padding 32px
Card accent variant: border-left 3px solid #0078d4
Header: sticky, background #0a0a0a, border-bottom 1px solid #2a2a2a, height 64px
Footer: border-top 1px solid #2a2a2a, padding 32px 0


## Project structure

edwayspace_web/
├── index.html
├── сlaude.md
├── css/
│   └── style.css
├── js/
│   └── mainpage.js
├── pages/
│   ├── login.html
│   ├── change-temppassword.html
│   ├── support.html
│   ├── privacy.html
│   ├── about.html
└── assets/
    └── fonts/
        └── racama-regular.woff2



## Legal

Russian law 152-FZ compliance required. All data stored in Russia (Timeweb). Privacy policy required. User consent for personal data processing required. Minors under 14 require parental consent.

## CODE RULES

- Zero comments anywhere, in any file, ever
- Senior-level clean code only


## Frontend — current state

### index.html
- Header: logo "edway.space Alpha" left (.logo::after adds accent dot), nav: "О платформе" (→ pages/about.html) + "Войти" (→ pages/login.html)
- Hero: heading "Школьное пространство для [ticker]", vertical word ticker (js/mainpage.js), no decorative blocks, no CTA
- Features section (id="about"): 3 accent cards — Расписание, Домашние задания, Объявления
- "Как это работает" section: 3 steps with SVG arrow connectors
- Roles section: 4 flat cards — Ученик, Учитель, Классный руководитель, Завуч
- Alpha banner (aside.alpha-notice) before footer
- Footer: "© 2026 edway.space by emostrStudio" + О платформе (→ pages/about.html) / Поддержка (→ pages/support.html)

### pages/login.html
- Header: logo + "О платформе" nav link only (no Войти button — removed, you're already on login)
- body.page--login, main.login-main: centered card, footer pinned
- Card: heading "Добро пожаловать", login + password inputs, hint row, "Войти" button
- Form has novalidate — no browser validation popups
- No JS on this page

### pages/change-temppassword.html
- Shown after first login with temporary password
- Same card layout as login.html
- Card extras: .login-card__badge "Первый вход" label, .login-card__sub subtext
- Two password inputs (new + confirm), hint row, "Сохранить и войти" button
- Form has novalidate

### pages/support.html
- Small hero, 3 topic cards (features__grid), mailto section, 4-row checklist
- Alpha banner before footer

### pages/privacy.html
- Document page: label + heading + meta date, 8 content sections
- Layout: centered column max-width 720px via .privacy-main

### pages/about.html
- Same layout as privacy.html (reuses .privacy-main)
- Nav has no "О платформе" link (self-referential, removed)
- Content: 5 sections + 2-column .about-cards grid
- Alpha banner before footer
- External link to emostr.com uses .text-link class

### css/style.css
- Single :root, single 768px breakpoint, shared across all pages
- @font-face: Racama from assets/fonts/racama-regular.woff2, weight 400 700
- All page layout classes grouped: .page--login, .page--change-password, .page--support, .page--privacy, .page--about { flex column, min-height 100vh }
- .footer has border-top: 1px solid var(--border)
- .text-link: accent color, hover accent-dim — for inline text links
- .login-card__badge: 11px 700 accent label above card heading
- .login-card__sub: 14px muted subtext below heading

### js/mainpage.js
- Ticker: cycles учеников / учителей / родителей / администрации
- IIFE, vanilla JS, zero comments, interval 1800ms, transition 400ms
