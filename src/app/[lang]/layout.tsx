import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import Header from '@/components/Header';
import { notFound } from 'next/navigation';

export default async function LangLayout({
    children,
    params: { lang },
}: {
    children: React.ReactNode;
    params: { lang: Locale };
}) {
    if (!i18n.locales.includes(lang)) {
        notFound();
    }

    const dict = await getDictionary(lang);

    return (
        <>
            <Header lang={lang} dict={dict} />
            {children}
        </>
    );
}
