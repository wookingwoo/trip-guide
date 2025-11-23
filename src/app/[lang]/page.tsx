import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import { cities } from '@/data/cities';
import HomePageContent from '@/components/HomePageContent';

export default async function Home({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const dict = await getDictionary(lang);

    return (
        <HomePageContent lang={lang} dict={dict} cities={Object.values(cities)} />
    );
}
