"use client";

/**
 * Sanity Studio is mounted at /studio.
 * Add NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET
 * to .env.local before opening this route in development.
 */
import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
