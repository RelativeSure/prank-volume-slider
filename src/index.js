export default {
  async fetch(request, env, ctx) {
    // Serve the HTML file for the root path
    if (new URL(request.url).pathname === '/') {
      const html = `<!-- paste your HTML content here -->`;
      return new Response(html, {
        headers: { 'Content-Type': 'text/html' }
      });
    }
    
    return new Response('Not found', { status: 404 });
  },
};