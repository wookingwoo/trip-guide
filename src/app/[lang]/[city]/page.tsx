import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import { cities } from '@/data/cities';
import CityDetailContent from '@/components/CityDetailContent';
import { notFound } from 'next/navigation';

export default async function CityPage({
    params: { lang, city },
}: {
    params: { lang: Locale; city: string };
}) {
    const dict = await getDictionary(lang);
    const cityData = cities[city];

    if (!cityData) {
        notFound();
    }

    return <CityDetailContent lang={lang} dict={dict} city={cityData} />;
}
