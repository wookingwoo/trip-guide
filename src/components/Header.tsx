'use client';

import {
    Box,
    Flex,
    Heading,
    Select,
    useColorModeValue,
    Container,
    Button,
} from '@chakra-ui/react';
import { usePathname, useRouter } from 'next/navigation';
import { i18n } from '@/i18n-config';
import Link from 'next/link';

export default function Header({
    lang,
    dict,
}: {
    lang: string;
    dict: any;
}) {
    const pathname = usePathname();
    const router = useRouter();
    const bg = useColorModeValue('white', 'gray.900');
    const color = useColorModeValue('gray.800', 'white');

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value;
        const path = pathname.split('/').slice(2).join('/');
        router.push(`/${newLocale}/${path}`);
    };

    return (
        <Box
            as="header"
            bg={bg}
            color={color}
            boxShadow="sm"
            position="sticky"
            top={0}
            zIndex={1000}
        >
            <Container maxW="container.xl">
                <Flex h={16} alignItems="center" justifyContent="space-between">
                    <Link href={`/${lang}`}>
                        <Heading size="md" letterSpacing="tight">
                            TripGuide
                        </Heading>
                    </Link>

                    <Flex alignItems="center" gap={4}>
                        <Select
                            value={lang}
                            onChange={handleLanguageChange}
                            width="auto"
                            size="sm"
                            variant="filled"
                            borderRadius="full"
                        >
                            {i18n.locales.map((locale) => (
                                <option key={locale} value={locale}>
                                    {locale.toUpperCase()}
                                </option>
                            ))}
                        </Select>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
}
