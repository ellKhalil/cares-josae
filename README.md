# CARES & JOSAE Official Website
### Centre for Agricultural Research and Extension Services (CARES)
**Federal University Dutse (FUD), Jigawa State, Nigeria**  
**Subdomain:** `https://cares.fud.edu.ng`  
**Journal:** Journal of Smart Agriculture and Extension Services (JOSAE)  
**ISSN:** 1597-1686

---

## 📁 Website Structure

```
CARES/
├── index.html                  # CARES Main Portal (Mission, Pillars, JOSAE Spotlight, Contact)
├── about.html                  # About CARES (Mandate, Extension Services, Leadership)
├── josae.html                  # JOSAE Journal Portal & Volume 1 Number 1 Table of Contents
├── josae-archives.html         # Published Volumes & Journal Archives
├── josae-editorial.html        # Complete Editorial Advisory Board & Reviewers
├── josae-guidelines.html       # Author Guidelines, Call for Papers & GTBank Details
├── josae-submission.html       # Online Manuscript Submission Form & Checklist
├── contact.html                # Contact Information, Location & Inquiry Form
├── assets/
│   ├── css/
│   │   └── style.css           # Modern Academic Green & Gold Bootstrap 5.3 Theme
│   ├── js/
│   │   └── main.js             # Real-time search, filter, abstract collapse, citation copy
│   ├── img/
│   │   ├── logo-cares.svg      # CARES High-Resolution Vector Brand
│   │   ├── logo-josae.svg      # JOSAE High-Resolution Vector Brand
│   │   └── josae-call-for-papers.jpg # Original Call for Papers Flyer
│   └── docs/
│       └── (Place your full volume or paper PDFs here e.g. JOSAE-Vol1-No1.pdf)
└── README.md
```

---

## 🚀 How to Deploy to cPanel (Step-by-Step)

1. **Compress the Folder**:
   - Select all files inside `/Users/khalil/Desktop/CARES/` (`index.html`, `about.html`, `josae.html`, `assets/`, etc.).
   - Compress them into a single `.zip` file (e.g., `cares-website.zip`).

2. **Log in to cPanel**:
   - Open your university cPanel: `https://fud.edu.ng:2083` (or your specific cPanel URL).
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

- **No PHP/Database dependencies required**: Pure modern HTML5, Bootstrap 5.3, and lightweight Vanilla JS. Loads ultra-fast and zero maintenance.
- **Dedicated JOSAE Journal Portal**:
  - Contains all 12 published articles from **Volume 1 Number 1 (June 2023)**.
  - Interactive **real-time search bar** (search by author, title keyword, or topic).
  - Category filter buttons (Extension, Soils/Crops, Livestock, Climate).
  - Expandable abstracts for each article.
  - **One-click APA 7th Edition citation copier**.
  - Direct PDF download hooks.
- **Editorial Board**: Full advisory council, Editor-in-Chief (Assoc. Prof. Bashir Garba Muktar), Deputy Editors, and international/national editors.
- **Author Guidelines & Banking**: Explicit formatting guidelines, APA 7th referencing examples, handling fee (\(\text{₦}5,000\)), publication fee (\(\text{₦}20,000\)), and GTBank details (`0835783652`).
- **Interactive Submission**: Online intake form generating structured submission packets sent to `josaecares@fud.edu.ng` and `cares.fudng@gmail.com`.
