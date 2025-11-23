import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Travel Guide - Sapporo & Rome',
    description: 'A premium travel guide for Sapporo and Rome.',
};

export default function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: string };
}) {
    return (
        <html lang={params.lang}>
            <body className={inter.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
