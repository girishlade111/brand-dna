/**
 * Brand DNA // The Invisible Instrument
 * Runtime Shim: Safe Fetch Interceptor Guard
 * 
 * Ensures that if third-party libraries, preview runners, or browser instrumentation
 * attempt to wrap or reassign window.fetch, it succeeds without throwing
 * "Cannot set property fetch of #<Window> which has only a getter".
 */

export function installSafeFetch(): void {
  try {
    if (typeof window === 'undefined') return;

    const target = window as unknown as Record<string, unknown>;
    const origFetch = typeof window.fetch === 'function' ? window.fetch.bind(window) : null;
    let activeFetch = origFetch;

    try {
      Object.defineProperty(target, 'fetch', {
        get() {
          return activeFetch;
        },
        set(next: unknown) {
          activeFetch = typeof next === 'function' ? (next as typeof fetch) : origFetch;
        },
        configurable: true,
        enumerable: true
      });
    } catch (_) {
      if (typeof Window !== 'undefined' && Window.prototype) {
        try {
          Object.defineProperty(Window.prototype, 'fetch', {
            get() {
              return activeFetch;
            },
            set(next: unknown) {
              activeFetch = typeof next === 'function' ? (next as typeof fetch) : origFetch;
            },
            configurable: true,
            enumerable: true
          });
        } catch (__) {
          // Silent fallback if descriptors are immutable
        }
      }
    }
  } catch (_) {
    // Top-level fallback
  }
}

// Execute immediately upon module import
installSafeFetch();
