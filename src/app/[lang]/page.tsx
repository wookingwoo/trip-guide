import { getDictionary } from '@/get-dictionary';
import { Locale, i18n } from '@/i18n-config';
import HomePageContent from '@/components/HomePageContent';
import type { Metadata } from 'next';

export async function generateMetadata({
    params: { lang },
}: {
    params: { lang: Locale };
}): Promise<Metadata> {
    const dict = await getDictionary(lang);

    return {
        title: dict.home.title,
        description: dict.home.subtitle,
        alternates: {
            languages: Object.fromEntries(
                i18n.locales.map((locale) => [locale, `/${locale}`])
            ),
        },
    };
}

export default async function Home({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const dict = await getDictionary(lang);

    return (
        <HomePageContent lang={lang} dict={dict} cities={Object.values(dict.cities)} />
    );
}
