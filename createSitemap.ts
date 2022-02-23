/* eslint-disable import/no-extraneous-dependencies */
import childProcess from 'child_process';
import fs from 'fs';
import dotenv from 'dotenv';
import prettier from 'prettier';

const rootDir = process.cwd();

dotenv.config({
  path: `${rootDir}/.env.production`,
});

interface Route {
    id: string;
    path?: string;
    file: string;
    children?: Route[];
}

const today = new Date().toISOString();
const domain = process.env.HOST;

console.log(`Updating sitemap on ${today} for domain ${domain}...`);

const consideredRoutes: string[] = [];

function addPathParts(path1 = '', path2 = ''): string {
  return path1.endsWith('/') || path2.startsWith('/') ? `${path1}${path2}` : `${path1}/${path2}`;
}

function pathToEntry(path: string): string {
  return `
    <url>
      <loc>${addPathParts(domain, path)}</loc>
      <lastmod>${today}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>
`;
}

async function depthFirstHelper(route: Route, currentPath = ''): Promise<string> {
  let sitemapContent = '';
  const isLayoutRoute = !route.path;
  const pathIncludesParam = (route.path && route.path.includes(':')) || currentPath.includes(':');
  if (!isLayoutRoute && !pathIncludesParam) {
    const filePath = `${rootDir}/app/${route.file}`;
    const routeContent = fs.readFileSync(filePath, 'utf8');
    // no default export means API route
    if (routeContent.includes('export default')) {
      const nextPath = addPathParts(currentPath, route.path);
      const isConsidered = consideredRoutes.includes(nextPath);
      if (!isConsidered) {
        sitemapContent += pathToEntry(nextPath);
        consideredRoutes.push(nextPath);
      }
    }
  }
  if (route.children) {
    for (const childRoute of route.children) {
      const nextPath = addPathParts(currentPath, route.path);
      sitemapContent += await depthFirstHelper(childRoute, nextPath);
    }
  }

  return sitemapContent;
}

async function routesToSitemap(routes: Route[]): Promise<string> {
  let sitemapContent = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const route of routes) {
    // eslint-disable-next-line no-await-in-loop
    sitemapContent += await depthFirstHelper(route, '');
  }
  return `
<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
>
    ${sitemapContent}
</urlset>
`;
}

const formatSitemap = (sitemap: string) => prettier.format(sitemap, { parser: 'html' });

async function main() {
  const output = childProcess.execSync('npx remix routes --json');
  const routes: Route[] = JSON.parse(output.toString());

  const root = routes.find((r) => r.id === 'root');

  if (!root) {
    throw new Error('Root not found');
  }

  const childRoutes = root.children;
  if (!childRoutes) {
    throw new Error('Root has no children routes');
  }

  console.log(`Found ${childRoutes.length} root children routes!`);
  const sitemap = await routesToSitemap(childRoutes);
  const formattedSitemap = formatSitemap(sitemap);

  fs.writeFileSync('./public/sitemap.xml', formattedSitemap, 'utf8');

  console.log('sitemap.xml updated 🎉');

  return formattedSitemap;
}

main();
