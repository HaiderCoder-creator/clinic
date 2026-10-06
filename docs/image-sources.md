# Image Sources & Asset Verification Audit
**Mila Najd Medical Complex (مجمع ميلا نجد الطبي) — Riyadh, Al Aarid**

This document records the exact provenance, verification status, and license/source notes for all visual assets utilized in this demo.

---

## 1. Verified Downloaded Clinic Assets

### A. Clinic Facility Profile Visual
- **File:** `public/images/clinic-tebcan-profile.jpg`
- **Source Platform:** Tebcan Healthcare Provider Network (Saudi Arabia)
- **Direct Source URL:** `https://tebcan.com/ar/Saudi/مركز/مجمع-ميلا-نجد-الطبي_100517`
- **Origin Storage:** `medicalentitystorage.blob.core.windows.net/719983/Profile/centered_ebfa56f2-a588-48d1-81db-ca67349af73c.jpg`
- **Verification Status:** **Verified Official Asset**. Listed in Tebcan's structured schema (`@type: "MedicalClinic"`) for Mila Najd Medical Complex.
- **Usage:** Hero presentation card, About page story showcase.

### B. Senior Specialist Abdullah Mokhtar Portrait
- **File:** `public/images/dr-abdullah-mokhtar.jpg`
- **Source Platform:** Tebcan Doctor Directory for Mila Najd Medical Complex
- **Direct Source URL:** `https://tebcan.com/ar/Saudi/dr/دكتور-عبد-الله-مختار-باطنية_12550`
- **Origin Storage:** `doctorstorage.blob.core.windows.net/720187/Profile/passport_631c5e02-c49c-418b-8370-0b97d794cd63.jpg`
- **Verification Status:** **Verified Official Portrait**. Matches public physician listing for Internal Medicine at Mila Najd Medical Complex.
- **Usage:** Doctor showcase, Internal Medicine department page, Doctor profile page.

### C. Dr. Yasser Abu El-Khair Portrait
- **File:** `public/images/dr-yasser-abu-elkhair.jpg`
- **Source Platform:** Tebcan Doctor Directory for Mila Najd Medical Complex
- **Direct Source URL:** `https://tebcan.com/ar/Saudi/dr/دكتور-ياسر-ابو-الخير-أسنان_12553`
- **Origin Storage:** `doctorstorage.blob.core.windows.net/720228/Profile/passport_e6598b4e-8cf7-4ba6-8080-4c18e2071143.jpg`
- **Verification Status:** **Verified Official Portrait**. Matches public physician listing for Dentistry at Mila Najd Medical Complex.
- **Usage:** Doctor showcase, Dentistry department page, Doctor profile page.

---

## 2. Missing Assets Requiring Clinic Confirmation

| Asset Type | Current State in Demo | Action Required Before Live Production |
| :--- | :--- | :--- |
| **Official Vector Logo** | Clean high-resolution SVG emblem with deep teal & lime palette | Request original AI/SVG brand guidelines from clinic management |
| **High-Res Exterior Building Signage** | Verified map location on King Abdulaziz Rd, Al Aarid with interactive embed | Request raw photoshoot photos of building facade & signage |
| **Interior Reception & Treatment Rooms** | Replaced with clean text-led cards, badges, and verified profile visual | Photo shoot session or high-res gallery package from clinic management |
| **Additional Doctor Portraits** | Only the 2 verified public doctors are published; others marked as pending roster update | Collect verified names, Saudi Commission for Health Specialties (SCFHS) licenses, and headshots from clinic HR |

---

## 3. Image Integrity & Attribution Rules
1. No competitor imagery has been copied or repurposed.
2. No fabricated doctor credentials or stock doctor names have been invented.
3. All image dimensions are explicitly specified in Next.js `next/image` to prevent layout shifts.
