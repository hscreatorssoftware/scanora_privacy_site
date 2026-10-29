# Scanora Privacy Policy Website

Static, Vercel-ready privacy policy site for Scanora.

## Files
- `index.html`
- `styles.css`
- `script.js`
- `assets/scanora-icon.webp` — official Scanora launcher icon from the Android project
- `vercel.json`
- `app-ads.txt` — TEMPLATE for AdMob (see below)

## Deploy to Vercel
Upload this folder as a static site or deploy it with the Vercel CLI. No build step is required.

Suggested project name: `scanora-privacy-site`

## What the policy covers (updated 29 Oct 2026)
The app now includes Google AdMob ads (with Google UMP consent), Firebase (Crashlytics, Analytics,
Performance Monitoring, Remote Config, Cloud Messaging), notifications and Google Play Billing purchases.
The page discloses all of this: services cards, a "what each service may process" table
(`#sdk-data`), user choices, rights, retention and a change history.

Whenever the app's data practices change again, update `index.html` and the two date fields in the hero card
(Effective date / Last updated) **before** the new app version is released.

## Use this page in the stores
- Google Play Console > App content > Privacy policy: paste this site's public URL.
- Play Console > Data safety: answer consistently with the table on this page
  (Device or other IDs, Crash logs, Diagnostics, App interactions, Purchase history; data is used for
  advertising, analytics and app functionality; scanned content is not collected).

## app-ads.txt
AdMob reads `app-ads.txt` from the developer website domain set in the Play Store listing, not from this site.
Fill in the template and put it at the root of that developer website (see comments inside the file).
