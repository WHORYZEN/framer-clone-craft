

## Fix: "Get Started" and "Get in Touch" buttons land at hero instead of contact section

### Root cause
The `ScrollToTop` component fires on every `pathname` change and scrolls to `(0, 0)`. When clicking `/#contact` from `/services`, React Router changes the pathname from `/services` to `/`, triggering `ScrollToTop` which scrolls to top — overriding the `#contact` hash scroll.

### Solution
Update `ScrollToTop.tsx` to skip scrolling when there's a hash in the URL. This way, `/#contact` will scroll to the contact section as expected, while plain route changes (e.g., `/services`, `/pricing`) still scroll to top.

### Changes

**`src/components/ScrollToTop.tsx`** — Check `location.hash`; only scroll to top when hash is empty:
```tsx
const { pathname, hash } = useLocation();
useEffect(() => {
  if (!hash) {
    window.scrollTo(0, 0);
  }
}, [pathname, hash]);
```

