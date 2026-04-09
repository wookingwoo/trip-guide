'use client';

import {
    Box,
    Image,
    Heading,
    Text,
    Stack,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { City } from '@/types/city';

export default function CityCard({
    city,
    lang,
    buttonText,
}: {
    city: City;
    lang: string;
    buttonText: string;
}) {
    const bg = useColorModeValue('white', 'gray.800');

    return (
        <Box
            maxW={'445px'}
            w={'full'}
            bg={bg}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}
            transition="transform 0.2s"
            _hover={{ transform: 'translateY(-5px)' }}
        >
            <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                <Image
                    src={city.image}
                    alt={city.name}
                    objectFit="cover"
                    w="100%"
                    h="100%"
                    fallbackSrc="/images/empty.png"
                />
            </Box>
            <Stack>
                <Text
                    color={'brand.500'}
                    textTransform={'uppercase'}
                    fontWeight={800}
                    fontSize={'sm'}
                    letterSpacing={1.1}
                >
                    {city.country}
                </Text>
                <Heading
                    color={useColorModeValue('gray.700', 'white')}
                    fontSize={'2xl'}
                    fontFamily={'body'}
                >
                    {city.name}
                </Heading>
                <Text color={'gray.500'} noOfLines={3}>
                    {city.description}
                </Text>
            </Stack>
            <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                <Link href={`/${lang}/${city.id}`} style={{ width: '100%' }}>
                    <Button w="full" variant="solid">
                        {buttonText}
                    </Button>
                </Link>
            </Stack>
        </Box>
    );
}
