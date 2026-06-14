import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
// Ensure apiVersion strictly matches YYYY-MM-DD or defaults safely to prevent Vercel crashes
const rawApiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const apiVersion = rawApiVersion && /^\d{4}-\d{2}-\d{2}$/.test(rawApiVersion) ? rawApiVersion : '2024-01-01';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Use CDN for incredibly fast read speeds
});

// Helper for generating Next.js compatible Image Source URLs
const builder = createImageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}
