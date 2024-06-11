export default async function sitemap() {
  const staticRoutes = [
    "",
    "/courses",
    "/leaderboard",
    "/learn",
    "/quests",
    "/shop",
    "/admin",
    "/lesson",
  ].map((route) => ({
    url: `https://demo1.genqdigital.com${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticRoutes];
}
