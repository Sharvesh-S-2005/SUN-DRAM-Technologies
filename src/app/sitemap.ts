import type { MetadataRoute } from "next";

const BASE_URL = "https://company.sundram.tech";
const ROUTES = ["/", "/solutions", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
