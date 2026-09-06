import { getDictionary } from '@/get-dictionary';
import { Locale, i18n } from '@/i18n-config';

import CityDetailContent from '@/components/CityDetailContent';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateMetadata({
    params: { lang, city },
}: {
    params: { lang: Locale; city: string };
}): Promise<Metadata> {
    const dict = await getDictionary(lang);
    const cityData = dict.cities[city];

    if (!cityData) {
        return {};
    }

    const title = `${cityData.name} (${cityData.country})`;

    return {
        title,
        description: cityData.description,
        alternates: {
            languages: Object.fromEntries(
                i18n.locales.map((locale) => [locale, `/${locale}/${city}`])
            ),
        },
        openGraph: {
            title,
            description: cityData.description,
            images: [cityData.image],
        },
    };
}

export default async function CityPage({
    params: { lang, city },
}: {
    params: { lang: Locale; city: string };
}) {
    const dict = await getDictionary(lang);
    const cityData = dict.cities[city];

    if (!cityData) {
        notFound();
    }

    return <CityDetailContent lang={lang} dict={dict} city={cityData} />;
}
