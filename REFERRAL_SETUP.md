# SkillCert Hub Referral System

A mobile-friendly Referral page has been added at `referral.html`.

## Frontend behavior
- Generates a personal-looking referral code in the browser.
- Creates a referral URL like `index.html?ref=SKILL-XXXXXX`.
- Stores the pending referral code when a visitor arrives through a referral link.
- Provides Copy and Share buttons.
- Adds a Referral link to the homepage navigation.

## Important for production
The browser-only code is only a UI/demo layer. For real referral rewards and fraud-resistant tracking, store referrals in Supabase.

Recommended tables:
1. `referral_codes`
   - `id`
   - `user_id`
   - `code` (unique)
   - `created_at`

2. `referrals`
   - `id`
   - `referrer_user_id`
   - `referred_user_id`
   - `code`
   - `status` (`pending`, `qualified`, `rejected`)
   - `qualified_order_id`
   - `created_at`
   - `qualified_at`

3. `referral_rewards`
   - `id`
   - `user_id`
   - `referral_id`
   - `amount`
   - `status`
   - `created_at`

The referral should be credited only after the backend verifies the qualifying Cashfree order as PAID. Never trust a browser-provided "payment completed" or reward value.

Decide the reward amount and qualifying action before enabling real payouts.
