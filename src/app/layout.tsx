import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
    title: {
        default: 'TripGuide',
        template: '%s | TripGuide',
    },
    description: 'A premium multi-language travel guide covering real, visited destinations across Asia, Europe, and Oceania.',
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
