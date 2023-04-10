const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:8002/api"
const strapiHost = process.env.NEXT_PUBLIC_STRAPI_HOST || new URL(strapiUrl).hostname

module.exports = {strapiUrl, strapiHost}
