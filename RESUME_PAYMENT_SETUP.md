# Resume PDF payment setup

The Resume Builder now requires a ₹29 Cashfree payment before PDF printing/download.

The frontend intentionally contains NO Cashfree Secret Key.

Create two Supabase Edge Functions:
- create-resume-order: create a Cashfree order for exactly ₹29 and return `payment_session_id` and `order_id`.
- verify-resume-order: verify the Cashfree order server-side and return `paid: true` only when the order status is `PAID`.

Then set these URLs in `resume-builder.html`:
- `createOrderUrl`
- `verifyOrderUrl`

The create function should receive:
`amount, currency, customer_name, customer_email, customer_phone, customer_id, purpose`

It must force the amount to INR 29 server-side rather than trusting the browser amount.

After successful verified payment, the website opens the browser print dialog for saving the resume as PDF.
