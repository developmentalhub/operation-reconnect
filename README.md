# Operation Reconnect — website

## What's in this update

- Renamed everything from "Project Reconnect" to "Operation Reconnect"
- New pages: `/podcast`, `/videos`, `/webinars`, `/subscribe`
- A working email signup form connected to Resend

## Step 1 — Copy these files into your existing project

In VS Code, inside your `project-reconnect` folder, create these NEW files (right-click a folder → New File) and paste in the matching content from this package:

```
app/podcast/page.js
app/videos/page.js
app/webinars/page.js
app/subscribe/page.js
app/api/subscribe/route.js
```

Then REPLACE the contents of these EXISTING files with the new versions:

```
app/layout.js
app/page.js
app/globals.css
```

Tip: the folder names matter. `app/podcast/page.js` means a folder called `podcast` inside `app`, with a file called `page.js` inside that. Next.js turns each folder into a page automatically.

## Step 2 — Install the Resend package

In your terminal (inside the project folder):

```powershell
npm install resend
```

## Step 3 — Create your Resend account and get your keys

1. Go to resend.com and sign up (free tier is fine to start)
2. In the dashboard, go to **API Keys** → create a new key → copy it
3. Go to **Audiences** → create a new audience (call it "Newsletter") → copy its Audience ID

## Step 4 — Add your keys locally

In your project folder, create a new file called exactly `.env.local` (yes, starting with a dot) and paste this in, replacing with your real values:

```
RESEND_API_KEY=re_your_real_key_here
RESEND_AUDIENCE_ID=your_real_audience_id_here
```

This file is already ignored by git (see `.gitignore`), so your keys won't accidentally get pushed to GitHub. Never share this file or paste these values in chat.

## Step 5 — Set up your webinar calendar

1. Go to calendly.com and make a free account
2. Create an event type (e.g. "Webinar" or "1:1 chat")
3. Copy your Calendly link (looks like `https://calendly.com/your-username/webinar`)
4. Open `app/webinars/page.js` and replace the placeholder URL on this line:
   ```js
   const calendlyUrl = 'https://calendly.com/your-username/webinar';
   ```

## Step 6 — Add your real content

- **Podcast episodes**: open `app/podcast/page.js`, add a new entry to the `episodes` array for each episode, with the Spotify/Apple embed link
- **YouTube videos**: open `app/videos/page.js`, add a new entry to the `videos` array with the YouTube video ID (the part after `watch?v=` in the URL)

## Step 7 — Run it locally

```powershell
npm run dev
```

Open http://localhost:3000 and click through all the pages, including testing the subscribe form with your own email.

## Step 8 — Add your keys to Vercel too

`.env.local` only works on your computer — Vercel needs its own copy of the keys:

1. Go to your project on vercel.com
2. Settings → Environment Variables
3. Add `RESEND_API_KEY` and `RESEND_AUDIENCE_ID` with the same values
4. Redeploy

## Pushing updates to GitHub

Every time you make changes and want them live:

```powershell
git add .
git commit -m "Add podcast, videos, webinars, and subscribe pages"
git push
```

Vercel will automatically redeploy when it sees the push.
