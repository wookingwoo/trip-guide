'use client';

import {
    Box,
    Container,
    Heading,
    Text,
    Image,
    VStack,
    SimpleGrid,
    Badge,
    Button,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';
import { City } from '@/data/cities';
import Link from 'next/link';

export default function CityDetailContent({
    lang,
    dict,
    city,
}: {
    lang: string;
    dict: any;
    city: City;
}) {
    const bg = useColorModeValue('white', 'gray.800');

    return (
        <Box pb={20}>
            {/* Hero Section */}
            <Box position="relative" h="500px" mb={10}>
                <Image
                    src={city.image}
                    alt={city.name}
                    objectFit="cover"
                    w="100%"
                    h="100%"
                    fallbackSrc="/images/empty.png"
                />
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bg="blackAlpha.600"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <VStack spacing={4} textAlign="center" color="white">
                        <Badge colorScheme="brand" fontSize="lg" px={3} py={1} borderRadius="full">
                            {city.country}
                        </Badge>
                        <Heading size="4xl">{city.name}</Heading>
                        <Text fontSize="xl" maxW="2xl">
                            {city.description}
                        </Text>
                    </VStack>
                </Box>
            </Box>

            <Container maxW="container.xl">
                <Link href={`/${lang}`}>
                    <Button variant="ghost" mb={8}>
                        &larr; {dict.city.back}
                    </Button>
                </Link>

                {/* Attractions */}
                <Box mb={16}>
                    <Heading size="xl" mb={8} borderBottom="2px solid" borderColor="brand.500" pb={2} display="inline-block">
                        {dict.city.attractions}
                    </Heading>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                        {city.attractions.map((attraction, index) => (
                            <Box key={index} bg={bg} p={6} borderRadius="lg" boxShadow="lg">
                                <Image
                                    src={attraction.image}
                                    alt={attraction.name}
                                    borderRadius="md"
                                    mb={4}
                                    h="200px"
                                    w="100%"
                                    objectFit="cover"
                                    fallbackSrc="/images/empty.png"
                                />
                                <Heading size="md" mb={2}>
                                    {attraction.name}
                                </Heading>
                                <Text color="gray.500">{attraction.description}</Text>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Box>

                {/* Foods */}
                <Box>
                    <Heading size="xl" mb={8} borderBottom="2px solid" borderColor="brand.500" pb={2} display="inline-block">
                        {dict.city.food}
                    </Heading>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                        {city.foods.map((food, index) => (
                            <Box key={index} bg={bg} p={6} borderRadius="lg" boxShadow="lg">
                                <Image
                                    src={food.image}
                                    alt={food.name}
                                    borderRadius="md"
                                    mb={4}
                                    h="200px"
                                    w="100%"
                                    objectFit="cover"
                                    fallbackSrc="/images/empty.png"
                                />
                                <Heading size="md" mb={2}>
                                    {food.name}
                                </Heading>
                                <Text color="gray.500">{food.description}</Text>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Box>
            </Container>
        </Box>
    );
}
