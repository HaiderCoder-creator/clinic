# مجمع ميلا نجد الطبي | Mila Najd Medical Complex
**Arabic-First Healthcare Web Platform & Commercial Appointment Management Demo**  
*Location: King Abdulaziz Road, Al Aarid District, Riyadh 13342, Saudi Arabia*

---

## 🌟 Executive Overview
This project is a high-fidelity, Arabic-first web application and appointment-management demo built for **Mila Najd Medical Complex (مجمع ميلا نجد الطبي)** in Riyadh. It is architected for presentation to the clinic owner to demonstrate the commercial and operational return on investment (ROI) of launching a modern patient acquisition and triage platform.

---

## 🚀 Key Features

### 1. Public Clinic Experience
- **Arabic-First Design with Bi-directional i18n:** Built with natural, professional Arabic copy as default, paired with complete English localization and instant direction switching (`dir="rtl" | "ltr"`).
- **Verified Clinical Scope:** Highlights the 6 verified medical departments (Internal Medicine, Dentistry, Dermatology & Aesthetics, Paediatrics, Obstetrics & Gynaecology, General Medicine & Emergency).
- **Verified Doctor Profiles:** Features verified medical practitioners (Senior Specialist Abdullah Mokhtar and Dr. Yasser Abu El-Khair) with official Tebcan directory citations and portraits.
- **Location & Arrival Hub:** Integrates Google Maps directions, exact GPS coordinates (24.8859° N, 46.6106° E), and click-to-call direct line (`050 462 7601`).
- **Accessible & Responsive:** Clean typography (Tajawal & Manrope), accessible accordions and modals, and zero layout shift.

### 2. Interactive Appointment Request System
- **15-Second Booking Flow:** Specialty selection, optional physician choice, past-date prevention, and Saudi mobile number validation (`05xxxxxxxx`).
- **Instant Reference Tracking:** Issues demo confirmation reference numbers (e.g. `MN-8492`).
- **Illustrative Disclaimers:** Explicitly communicates that slot times are demo-based to protect patient expectations during the pitch.

### 3. Clinic Management & Reception Dashboard (`/demo-admin`)
- **Real-Time Request Metrics:** Live breakdown of total requests, pending triage, confirmed bookings, and completed appointments.
- **Search & Multi-Filter Toolbar:** Filter by date, medical department, and booking status, or search by patient name/phone.
- **Interactive Status Triage:** Allows receptionists to review notes and toggle statuses (`Pending` ➔ `Confirmed` / `Completed` / `Cancelled`) with instant UI updates.
- **Demo Controls:** Seeded with realistic patient records, with one-click data reset.

---

## 🛠️ Technology Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4 with custom healthcare palette
- **Icons:** Lucide React
- **State Management:** React Context + LocalStorage persistence (structured for seamless Laravel REST API swap)
- **Typography:** Next.js Google Fonts (`Tajawal` for Arabic, `Manrope` for English)

---

## 📋 Verified Facts vs. Unconfirmed Roadmap

### ✅ Verified & Included
- **Clinic Official Name:** مجمع ميلا نجد الطبي / Mila Najd Medical Complex
- **Location:** King Abdulaziz Road, Al Aarid District, Riyadh 13342
- **Direct Phone:** `050 462 7601` (`+966504627601`)
- **Tebcan Registry ID:** 100517
- **Google Maps CID:** `4274182766491625190`
- **Departments (6):** Internal Medicine, Dentistry, Dermatology & Aesthetics, Paediatrics, ObGyn, Emergency
- **Verified Public Doctors (2):** Senior Specialist Abdullah Mokhtar & Dr. Yasser Abu El-Khair

### ⚠️ Unconfirmed & Kept Safe
- **Opening Hours & 24/7 Claims:** Not claimed or fabricated; marked for confirmation during contract kickoff.
- **Insurance Networks:** Generic consultation guidance provided without false network claims.
- **Review Counts & Ratings:** Kept strictly factual without fake review widgets.

---

## 💻 How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Validation
```bash
npm run build
npm run start
```

---

## 📂 Documentation Links
- **[Image Sources & Verification Audit](docs/image-sources.md)**: Full asset verification log and license provenance.
- **[5-Minute Client Presentation Script](docs/client-demo-walkthrough.md)**: Structured pitch walkthrough for presenting to the clinic owner.
