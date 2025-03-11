// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// // Middleware function
// export function middleware(req: NextRequest) {
//   const token = req.cookies.get('token')?.value
//   const role = req.cookies.get('role')?.value

//   const adminRoutes = req.nextUrl.pathname.startsWith('/admin')
//   if (!token) {
//     return NextResponse.redirect(new URL('/login', req.url))
//   }
//   if (adminRoutes && role !== 'admin') {
//     return NextResponse.redirect(new URL('/unauthorized', req.url))
//   }

//   return NextResponse.next()
// }

// export const config = {
//   matcher: ['/admin/:path*']
// }
