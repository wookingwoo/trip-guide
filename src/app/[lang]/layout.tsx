import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import Header from '@/components/Header';

export default async function LangLayout({
    children,
    params: { lang },
}: {
    children: React.ReactNode;
    params: { lang: Locale };
}) {
    const dict = await getDictionary(lang);

    return (
        <>
            <Header lang={lang} dict={dict} />
            {children}
        </>
    );
}
