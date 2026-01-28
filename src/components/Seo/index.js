import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import {
  meta,
  introdata,
  socialprofils,
  dataabout,
  contactConfig,
} from "../../content_option";

const getNameFromTitle = (title) => title.replace(/^I'm\s+/i, "").trim();

const getTwitterHandle = (url) => {
  if (!url) return "";
  const match = url.match(/twitter\.com\/([A-Za-z0-9_]+)/i);
  return match ? `@${match[1]}` : "";
};

const Seo = ({ title, description, image, type = "website" }) => {
  const location = useLocation();
  const siteUrl = meta.siteUrl ? meta.siteUrl.replace(/\/$/, "") : "";
  const canonical = siteUrl
    ? `${siteUrl}${location.pathname}`
    : location.pathname;
  const metaTitle = title ? `${title} | ${meta.title}` : meta.title;
  const metaDescription = description || meta.description;
  const metaImage = image || meta.image || introdata.your_img_url;
  const personName = getNameFromTitle(introdata.title);
  const sameAs = [
    socialprofils.github,
    socialprofils.linkedin,
    socialprofils.twitter,
  ].filter(Boolean);
  const twitterHandle = getTwitterHandle(socialprofils.twitter);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personName,
    url: meta.siteUrl,
    image: metaImage,
    jobTitle: meta.role,
    description: dataabout.aboutme,
    sameAs,
    email: contactConfig?.YOUR_EMAIL
      ? `mailto:${contactConfig.YOUR_EMAIL}`
      : undefined,
    address: meta.location,
  };

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:site_name" content={meta.title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      {twitterHandle && (
        <meta name="twitter:creator" content={twitterHandle} />
      )}

      <script type="application/ld+json">
        {JSON.stringify(personJsonLd)}
      </script>
    </Helmet>
  );
};

export default Seo;
