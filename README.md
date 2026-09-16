# CARES & JOSAE Official Website
### Centre for Agricultural Research and Extension Services (CARES)
**Federal University Dutse (FUD), Jigawa State, Nigeria**  
**Subdomain:** `https://cares.fud.edu.ng`  
**Journal:** Journal of Smart Agriculture and Extension Services (JOSAE)  
**ISSN:** 1597-1686

---

## 📁 Repository & Website Structure

```
cares-josae/
├── index.html                  # CARES Main Portal (Mission, Pillars, JOSAE Spotlight, Contact)
├── about.html                  # About CARES (Mandate, Extension Services, Leadership)
├── josae.html                  # JOSAE Journal Portal (Volume 1 Issues 1 & 2 Articles & Downloads)
├── josae-archives.html         # Published Volumes & Journal Archives
├── josae-editorial.html        # Complete Editorial Advisory Board & Reviewers
├── josae-guidelines.html       # Author Guidelines, Call for Papers & GTBank Details
├── josae-submission.html       # Online Manuscript Submission Form & Checklist
├── contact.html                # Contact Information, Location & Inquiry Form
├── assets/
│   ├── css/
│   │   └── style.css           # Modern Academic Green & Gold Bootstrap 5.3 Theme
│   ├── js/
│   │   └── main.js             # Multi-issue real-time search, filter, abstract collapse, citation copy
│   ├── img/
│   │   ├── fud-logo.png        # Official Federal University Dutse Crest / Favicon
│   │   ├── logo-cares.svg      # CARES High-Resolution Vector Brand
│   │   ├── logo-josae.svg      # JOSAE High-Resolution Vector Brand
│   │   └── josae-call-for-papers.jpg # Original Call for Papers Flyer
│   └── docs/
│       ├── vol1-issue1/        # All 13 final PDF articles for Volume 1 Issue 1 (June 2023)
│       └── vol1-issue2/        # All 12 accepted manuscripts for Volume 1 Issue 2 (Dec 2023)
└── README.md
```

---

## 🚀 How to Deploy to cPanel (Step-by-Step)

1. **Compress the Repository Files**:
   - Select all files inside `/Users/khalil/Documents/GitHub/cares-josae/` (`index.html`, `about.html`, `josae.html`, `assets/`, etc.).
   - Compress them into a single `.zip` file (e.g., `cares-website.zip`).

2. **Log in to cPanel**:
   - Open your university cPanel: `https://fud.edu.ng:2083` (or your specific cPanel hosting URL).
   - Go to **File Manager**.

3. **Navigate to the Subdomain Root Directory**:
   - If `cares.fud.edu.ng` points to `public_html/cares/` or `cares.fud.edu.ng/`, double-click to open that directory.

4. **Upload and Extract**:
   - Click the **Upload** button at the top toolbar.
   - Select and upload `cares-website.zip`.
   - Once uploaded, right-click the zip file in File Manager and choose **Extract**.
   - Make sure `index.html` is directly inside the root folder of the subdomain.

5. **Test Your Site**:
   - Visit `https://cares.fud.edu.ng` in your browser!

---

## 📄 Key Features Included

- **No Database / PHP Backend Required**: Ultra-fast, lightweight, pure Bootstrap 5.3 + Vanilla JS.
- **Dedicated Multi-Issue JOSAE Journal Portal**:
  - **Volume 1 Issue 2 (December 2023)**: 12 research papers with abstracts, citations, and download links.
  - **Volume 1 Issue 1 (June 2023)**: 12 research papers with direct PDF download links.
  - Interactive **real-time search bar & issue switcher** (switch between All Issues, Vol 1 No 2, and Vol 1 No 1).
  - Discipline filter pills (Extension, Soils/Crops, Livestock, Climate, Fisheries).
  - One-click APA 7th edition citation copier.
- **Editorial Board**: Full advisory council, Editor-in-Chief (Assoc. Prof. Bashir Garba Muktar), Deputy Editors, and international/national editors.
- **Author Guidelines & Banking**: Explicit formatting guidelines, APA 7th referencing examples, handling fee (₦5,000 / $25), publication fee (₦20,000), and GTBank details (`0835783652`).
- **Interactive Submission**: Online intake form generating structured submission packets sent to `josaecares@fud.edu.ng` and `cares.fudng@gmail.com`.
