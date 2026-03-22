

## Fix: Scroll to top on page navigation

**Problem**: When clicking "View all services" or navbar links to `/services` and `/pricing`, React Router changes the route but preserves scroll position, landing users at the bottom of the new page.

**Solution**: Create a `ScrollToTop` component that listens for route changes and scrolls to top, then add it inside the `BrowserRouter` in `App.tsx`.

### Changes

1. **Create `src/components/ScrollToTop.tsx`** — A small component using `useEffect` + `useLocation` from react-router-dom that calls `window.scrollTo(0, 0)` on every pathname change.

2. **Update `src/App.tsx`** — Add `<ScrollToTop />` inside `<BrowserRouter>` before `<Routes>`.

