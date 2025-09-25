// /middleware.js

// A small list of regexes matching common social‑bot UA strings:
const BOT_USER_AGENTS = [
    /facebookexternalhit/i,
    /twitterbot/i,
    /linkedinbot/i,
    /slackbot-linkexpanding/i,
  ]
  
  export const config = {
    // run this middleware on every path
    matcher: '/:path*',
  }
  
  export async function middleware(request) {
    const ua = request.headers.get('user-agent') || ''
    const isBot = BOT_USER_AGENTS.some((rx) => rx.test(ua))
  
    if (!isBot) {
      // not a bot: continue to serve your regular SPA
      return
    }
  
    // a bot: rewrite to your SSR endpoint
    // preserve original pathname in a search param
    const url = new URL(request.url)
    url.pathname = '/api/ssr'
    url.searchParams.set('pathname', request.nextUrl.pathname)
  
    // Fetch the SSR result and return it
    const response = await fetch(url.toString(), {
      // Forward cookies/headers if needed (optional)
      headers: request.headers,
      method: request.method,
      body: request.method === 'GET' ? undefined : request.body,
    })
    return response
  }
  