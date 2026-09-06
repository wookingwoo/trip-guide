import type { MetadataRoute } from 'next';
import { i18n } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const dict = await getDictionary(i18n.defaultLocale);
    const cityIds = Object.keys(dict.cities);

    const entries: MetadataRoute.Sitemap = [];

    for (const locale of i18n.locales) {
        entries.push({
            url: `${baseUrl}/${locale}`,
            lastModified: new Date(),
        });

        for (const cityId of cityIds) {
            entries.push({
                url: `${baseUrl}/${locale}/${cityId}`,
                lastModified: new Date(),
            });
        }
    }

    return entries;
}
