// src/utils/gtm.ts
export function gtmEvent(event: string, params: Record<string, any> = {}) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });
  }
}
