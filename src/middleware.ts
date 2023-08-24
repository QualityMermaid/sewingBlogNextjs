import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/projects", "/gallery", "/gallery/(.*)", "/projects/(.*)", "/api/comments/(.*)", "/contact"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};