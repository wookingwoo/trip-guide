'use client';

import { SearchIcon } from '@chakra-ui/icons';
import {
    Box,
    Container,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    Select,
    SimpleGrid,
    Stack,
    Text,
    VStack,
    useColorModeValue,
} from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import CityCard from './CityCard';
import { City } from '@/types/city';
import { filterCities, getCountries } from '@/utils/cityFilter.mjs';

export default function HomePageContent({
    lang,
    dict,
    cities,
}: {
    lang: string;
    dict: any;
    cities: City[];
}) {
    const [query, setQuery] = useState('');
    const [country, setCountry] = useState('');
    const controlBg = useColorModeValue('white', 'gray.800');
    const countries = useMemo(() => getCountries(cities, lang), [cities, lang]);
    const filteredCities = useMemo(
        () => filterCities(cities, query, country),
        [cities, query, country],
    );

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

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    maxW="3xl"
                    mx="auto"
                    mb={10}
                >
                    <InputGroup size="lg">
                        <InputLeftElement pointerEvents="none">
                            <SearchIcon color="gray.400" />
                        </InputLeftElement>
                        <Input
                            aria-label={dict.home.searchLabel}
                            placeholder={dict.home.searchPlaceholder}
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            bg={controlBg}
                        />
                    </InputGroup>
                    <Select
                        aria-label={dict.home.countryLabel}
                        size="lg"
                        value={country}
                        onChange={(event) => setCountry(event.target.value)}
                        bg={controlBg}
                        maxW={{ base: 'full', md: '280px' }}
                    >
                        <option value="">{dict.home.allCountries}</option>
                        {countries.map((countryOption) => (
                            <option key={countryOption} value={countryOption}>
                                {countryOption}
                            </option>
                        ))}
                    </Select>
                </Stack>

                <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={10} justifyItems="center">
                    {filteredCities.map((city) => (
                        <CityCard
                            key={city.id}
                            city={city}
                            lang={lang}
                            buttonText={dict.home.explore}
                        />
                    ))}
                </SimpleGrid>

                {filteredCities.length === 0 && (
                    <Box py={20} textAlign="center">
                        <Heading size="md" mb={2}>
                            {dict.home.noResults}
                        </Heading>
                        <Text color="gray.500">{dict.home.noResultsHint}</Text>
                    </Box>
                )}
            </Container>
        </Box>
    );
}
