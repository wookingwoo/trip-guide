import { getDictionary } from '@/get-dictionary';
import { Locale, i18n } from '@/i18n-config';
import HomePageContent from '@/components/HomePageContent';
import { notFound } from 'next/navigation';

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
