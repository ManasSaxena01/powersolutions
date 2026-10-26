import { groq } from "next-sanity";

export const homepageQuery = groq`
  *[_type == "homepage"][0]{
    aboutHeading,
    aboutBody,
    capabilities[]{ title, description },
    trustedClients[]{ name, logo },
    heroProjects[]->{
      _id,
      title,
      summary,
      location,
      mainImage
    }
  }
`;

export const servicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    slug,
    shortDescription
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    companyName,
    tagline,
    phone,
    email,
    address
  }
`;
