# BRAND DNA // APPLICATION MIGRATION & REDIRECTION ARCHITECTURE

## 1. Environment Variable Configuration
The application is architected to decouple the marketing showcase landing page from the core workbench applet.
The primary redirect destination is controlled via the environment variable:

```bash
# In .env:
PUBLIC_APP_URL="/app"
VITE_PUBLIC_APP_URL="/app"
```

All CTA anchors in the Header (`[ LAUNCH APP ↗ ]`), Hero Section (`[ EXTRACT BRAND ]`), and CTA Banner (`[ LAUNCH THE INSTRUMENT ↗ ]`) dynamically resolve this variable with fallback to `"/app"`.

---

## 2. Seamless TanStack Start / React App Migration Options

### Option A: Nested Route Directory (`/app`)
When migrating an existing TanStack Start or React Vite application:
1. Place the core workbench source files into `/src/app` or `/public/app`.
2. Configure Astro to either proxy or serve static builds under the `/app` pathname:
   ```js
   // astro.config.mjs
   export default defineConfig({
     integrations: [react()],
     // ...
   });
   ```
3. The root navigation button `[ LAUNCH APP ↗ ]` directs users to `/app` without domain hopping.

### Option B: Monorepo / Multi-Package Workspace
If the core app runs as a separate container or micro-frontend:
1. Set `PUBLIC_APP_URL=https://app.branddna.dev` (or your internal Cloud Run service URL).
2. All CTAs will automatically redirect users to the remote application instance.

### Option C: Embedded SSR Island
Because Astro 5 supports zero-JS static rendering by default alongside interactive islands (`@astrojs/react` with `client:visible`), individual workbench modules (such as `WorkbenchDemo`) can directly import and mount the core application's React components seamlessly.
