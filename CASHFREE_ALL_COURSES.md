# SkillCert Hub — Cashfree for All Courses

This version uses the same Cashfree create-order Edge Function for every course in `COURSES`.
The selected course ID, course name, price and customer details are sent dynamically.

## Course payments
All course cards use:
`buy(courseId)` → `showPayment(course)` → `startCashfreePayment(courseId)`

The amount is taken from the selected course's `price`, not hardcoded to Power BI.

## Upload
Extract this ZIP and upload the files inside to the root of the `SkillCertHub` GitHub repository, replacing the existing website files. Commit to `main`.

## Important
Keep `skillcert-cashfree-config.js` with your real Supabase Edge Function URLs. Do not replace it with a version containing `YOUR_SUPABASE_PROJECT`.

Course payment gateway:
- create order: `cashfree-create-order`
- verification: `cashfree-verify-order`

Certificate unlock remains separate from course purchase.
