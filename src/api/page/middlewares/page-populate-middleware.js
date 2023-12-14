"use strict";

/**
 * `page-populate-middleware` middleware
 */

const populate = {
  contentSections: {
    populate: {
      heading: {
        populate: {
          fields: ["heading", "description"],
        },
      },
      picture: {
        populate: {
          media: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      bgHero: {
        populate: {
          media: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      buttonHero: {
        populate: {
          fields: ["url", "text", "newTab", "type"],
        },
      },
    },
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query = {
      populate,
      filters: { slug: ctx.query.filters.slug },
      locale: ctx.query.locale,
    };

    console.log("page-populate-middleware.js: ctx.query = ", ctx.query);

    await next();
  };
};
