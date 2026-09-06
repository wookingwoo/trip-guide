# Travel Guide Website

A premium travel guide covering real, visited destinations across Japan, Italy, Thailand, the Philippines, Australia, Singapore, Taiwan, China, Malaysia, and Brunei, built with Next.js and Chakra UI.

## Setup

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  **Open Browser**:
    Visit [http://localhost:3000](http://localhost:3000)

## Environment Variables

-   `NEXT_PUBLIC_SITE_URL`: the deployed site's base URL (e.g. `https://your-domain.com`), used for the sitemap, robots.txt, and Open Graph/canonical metadata. Defaults to `http://localhost:3000` when unset.

## Features

-   **Multi-language Support**: Korean, English, Japanese, Italian.
-   **Premium Design**: Custom Chakra UI theme with dark mode support.
-   **City Guides**: Detailed, first-hand guides for every destination, including attractions, food, getting around, recommended areas, sample itineraries, and voltage/plug info.
-   **SEO**: per-page metadata, hreflang alternates across all four locales, and an auto-generated sitemap/robots.txt.
