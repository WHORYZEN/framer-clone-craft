

## Fix: Route all "Get in touch" buttons to homepage contact section

### Problem
The Navbar's "Get in touch with us" button (desktop and mobile) uses `href="#contact"` which only works on the homepage. On `/services` and `/pricing` pages, it doesn't navigate back to the homepage contact section.

### Changes

**`src/components/Navbar.tsx`** — Change `href="#contact"` to `href="/#contact"` in both the desktop and mobile nav buttons (lines 41 and 70).

That's it — all other "Get Started" and "Get in touch" buttons already correctly use `/#contact`.

