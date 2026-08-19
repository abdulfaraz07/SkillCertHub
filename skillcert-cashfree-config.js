/*
  SkillCert Hub - Cashfree configuration

  IMPORTANT:
  - Never put your Cashfree Secret Key in this file.
  - This file is public because the website is static.
  - CREATE_ORDER_URL and VERIFY_ORDER_URL must point to your secure Supabase Edge Functions.
*/
window.SKILLCERT_CASHFREE = {
  MODE: "sandbox", // change to "production" after your Cashfree account is live
  CREATE_ORDER_URL: "https://lmfupxuogapjgshbxcnu.supabase.co/functions/v1/cashfree-create-order",
  VERIFY_ORDER_URL: "https://lmfupxuogapjgshbxcnu.supabase.co/functions/v1/cashfree-verify-order"
};

