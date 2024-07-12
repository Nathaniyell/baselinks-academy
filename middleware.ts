import { NextResponse, NextRequest } from 'next/server';


const protectedRoutes = ['/dashboard'];
const restrictedRoutes = ['/auth/login', '/auth/register'];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  let isAuthenticated = false;


  // Handle protected routes
  if (protectedRoutes.includes(pathname)) {
    if (!isAuthenticated) {
      // Redirect unauthenticated users to the login page
      const url = new URL('/auth/login', req.url);
      url.searchParams.set('redirect', pathname);
      return NextResponse.redirect(url);
    }
  }

  // Handle restricted routes
  if (restrictedRoutes.includes(pathname)) {
    if (isAuthenticated) {
      // Redirect authenticated users to the dashboard
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  // Proceed to the requested route
  return NextResponse.next();
}

// Specify the paths to run the middleware
export const config = {
  matcher: ['/dashboard', '/auth/login', '/auth/register'],
};
