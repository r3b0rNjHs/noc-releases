// Dirección antigua: borra la copia guardada, se da de baja y manda las pestañas abiertas a la nueva.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.map(k => caches.delete(k))))
  .then(() => self.registration.unregister()).then(() => self.clients.matchAll({ type: "window" }))
  .then(cs => cs.forEach(c => c.navigate("https://r3b0rnjhs.github.io/naruto-online-companion-web/")))));
