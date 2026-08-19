# SkillCert Hub + Cashfree setup

The website now uses Cashfree Web Checkout. The Cashfree Secret Key is NOT included in the website.

## 1. Supabase secrets

In Supabase Edge Function secrets, create:

- CASHFREE_CLIENT_ID = your Cashfree App ID
- CASHFREE_CLIENT_SECRET = your Cashfree Secret Key
- CASHFREE_MODE = sandbox (or production when live)

## 2. Deploy the two Edge Functions

Deploy:

- `cashfree-create-order`
- `cashfree-verify-order`

The source files are in `supabase/functions/` in this package.

## 3. Update the website config

Open `SkillCert_Hub/skillcert-cashfree-config.js` and replace:

`YOUR_SUPABASE_PROJECT`

with your Supabase project reference.

Do not put the Cashfree secret in this file.

## 4. Cashfree domain

Whitelist your production domain in Cashfree, for example:

`https://skillcerthub.tech`

## 5. Test first

Keep `MODE: "sandbox"` while testing. After your Cashfree account and website are approved/live, change it to:

`MODE: "production"`

## 6. Flow

Student -> selects course -> Cashfree checkout -> payment -> Cashfree redirects back with order_id -> secure Supabase function verifies the order -> course is unlocked -> quiz starts.

The browser does not decide that a payment succeeded. The verification function checks Cashfree server-side.
