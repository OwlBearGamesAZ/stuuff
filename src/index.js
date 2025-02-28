async function handler(request) {
  const base = 'https://example.com';
  const statusCode = 301;

  const destination = new URL(request.url, base);
  return Response.redirect(destination.toString(), statusCode);
}

// Initialize Worker
addEventListener('fetch', event => {
  event.respondWith(handler(event.request));
});
