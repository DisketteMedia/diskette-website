# Diskette Website

This is the official website for the Diskette Universe (Diskette Kitchen, Diskette Media, and Diskette Glow)

You are welcome to use parts as you please (according to the license), although no promies of quality

## Development

### Install

NPM

```plaintext
npm install
```

PNPM

```plaintext
pnpm install
```

### Dev

NPM

```plaintext
npm run dev
```

PNPM

```plaintext
pnpm dev
```

## Environmental variables

Two functions of this site use APIs, the YouTube post feed for Kitchen, and the Glow email subscription box. If you wish for these to function you must aquire a YouTube and a Kit V3 API keys.

Create a .env file at the root of the project (or rename the .env.example file) and fill out the following, replacing {yourApiKey} with your actual api key.

```plaintext
VITE_YOUTUBE={yourYourApiKey}
VITE_KIT={yourKitApiKey}
VITE_KIT_FORMID={yourKitFormId}
```

In the case of the form id, you'll need to create any form in your Kit dashboard and then copy the form id from the embed section. You can use any form template as long as it has the first name and email parameters.


Copyright © 2026 Diskette Media
