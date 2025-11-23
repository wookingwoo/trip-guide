'use client';

import { Box, Container, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import CityCard from './CityCard';
import { City } from '@/data/cities';

export default function HomePageContent({
    lang,
    dict,
    cities,
}: {
    lang: string;
    dict: any;
    cities: City[];
}) {
    return (
        <Box as="main" py={20}>
            <Container maxW="container.xl">
                <VStack spacing={8} mb={16} textAlign="center">
                    <Heading as="h1" size="2xl" bgGradient="linear(to-r, brand.400, brand.600)" bgClip="text">
                        {dict.home.title}
                    </Heading>
                    <Text fontSize="xl" color="gray.500" maxW="2xl">
                        {dict.home.subtitle}
                    </Text>
                </VStack>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} justifyItems="center">
                    {cities.map((city) => (
                        <CityCard
                            key={city.id}
                            city={city}
                            lang={lang}
                            buttonText={dict.home.explore}
                        />
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}
