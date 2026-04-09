'use client';

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import Link from 'next/link';

import { City } from '@/types/city';

export default function CityDetailContent({
  lang,
  dict,
  city,
}: {
  lang: string;
  dict: any;
  city: City;
}) {
  const surfaceBg = useColorModeValue('white', 'gray.800');
  const accentBg = useColorModeValue('brand.50', 'whiteAlpha.100');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200');
  const mutedText = useColorModeValue('gray.600', 'whiteAlpha.800');

  return (
    <Box pb={20}>
      <Box position="relative" h={{ base: '420px', md: '500px' }} mb={10}>
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
          inset={0}
          bgGradient="linear(to-t, blackAlpha.800, blackAlpha.500)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          px={6}
        >
          <VStack spacing={4} textAlign="center" color="white">
            <Badge colorScheme="brand" fontSize="lg" px={3} py={1} borderRadius="full">
              {city.country}
            </Badge>
            <Heading fontSize={{ base: '4xl', md: '6xl' }}>{city.name}</Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} maxW="3xl">
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

        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8} mb={16}>
          <Box
            gridColumn={{ base: 'span 1', lg: 'span 2' }}
            bg={surfaceBg}
            p={8}
            borderRadius="2xl"
            boxShadow="xl"
            border="1px solid"
            borderColor={borderColor}
          >
            <Heading size="xl" mb={4}>
              {dict.city.overview}
            </Heading>
            <Text fontSize="lg" lineHeight="tall" color={mutedText}>
              {city.overview}
            </Text>
          </Box>

          <Box
            bg={surfaceBg}
            p={8}
            borderRadius="2xl"
            boxShadow="xl"
            border="1px solid"
            borderColor={borderColor}
          >
            <Heading size="xl" mb={4}>
              {dict.city.bestTime}
            </Heading>
            <Text lineHeight="tall" color={mutedText}>
              {city.bestTime}
            </Text>
          </Box>
        </SimpleGrid>

        <Box mb={16}>
          <Heading
            size="xl"
            mb={8}
            borderBottom="2px solid"
            borderColor="brand.500"
            pb={2}
            display="inline-block"
          >
            {dict.city.highlights}
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
            {city.highlights.map((highlight, index) => (
              <Box
                key={index}
                bg={accentBg}
                p={5}
                borderRadius="xl"
                border="1px solid"
                borderColor={borderColor}
              >
                <HStack align="start" spacing={3}>
                  <Box mt={2} boxSize={2.5} borderRadius="full" bg="brand.500" flexShrink={0} />
                  <Text color={mutedText} lineHeight="tall">
                    {highlight}
                  </Text>
                </HStack>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <Box mb={16}>
          <Heading
            size="xl"
            mb={8}
            borderBottom="2px solid"
            borderColor="brand.500"
            pb={2}
            display="inline-block"
          >
            {dict.city.gettingAround}
          </Heading>
          <Box
            bg={surfaceBg}
            p={8}
            borderRadius="2xl"
            boxShadow="xl"
            border="1px solid"
            borderColor={borderColor}
          >
            <List spacing={4}>
              {city.gettingAround.map((tip, index) => (
                <ListItem key={index} fontSize="lg" display="flex" alignItems="flex-start">
                  <ListIcon as={CheckCircleIcon} color="brand.500" mt={1} mr={4} />
                  <Text color={mutedText}>{tip}</Text>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>

        <Box mb={16}>
          <Heading
            size="xl"
            mb={8}
            borderBottom="2px solid"
            borderColor="brand.500"
            pb={2}
            display="inline-block"
          >
            {dict.city.recommendedAreas}
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {city.recommendedAreas.map((area, index) => (
              <Box
                key={index}
                bg={surfaceBg}
                p={6}
                borderRadius="2xl"
                boxShadow="xl"
                border="1px solid"
                borderColor={borderColor}
              >
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  textTransform="uppercase"
                  letterSpacing="widest"
                  color="brand.500"
                  mb={3}
                >
                  {String(index + 1).padStart(2, '0')}
                </Text>
                <Heading size="md" mb={3}>
                  {area.name}
                </Heading>
                <Text color={mutedText} lineHeight="tall">
                  {area.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <Box mb={16}>
          <Heading
            size="xl"
            mb={8}
            borderBottom="2px solid"
            borderColor="brand.500"
            pb={2}
            display="inline-block"
          >
            {dict.city.sampleItinerary}
          </Heading>
          <Stack spacing={5}>
            {city.sampleItinerary.map((item, index) => (
              <Flex
                key={index}
                bg={surfaceBg}
                p={6}
                borderRadius="2xl"
                boxShadow="xl"
                border="1px solid"
                borderColor={borderColor}
                gap={4}
                align="flex-start"
              >
                <Flex
                  w={10}
                  h={10}
                  borderRadius="full"
                  bg="brand.500"
                  color="white"
                  fontWeight="bold"
                  align="center"
                  justify="center"
                  flexShrink={0}
                >
                  {index + 1}
                </Flex>
                <Box>
                  <Heading size="md" mb={2}>
                    {item.title}
                  </Heading>
                  <Text color={mutedText} lineHeight="tall">
                    {item.description}
                  </Text>
                </Box>
              </Flex>
            ))}
          </Stack>
        </Box>

        <Box mb={16}>
          <Heading
            size="xl"
            mb={8}
            borderBottom="2px solid"
            borderColor="brand.500"
            pb={2}
            display="inline-block"
          >
            {dict.city.tips}
          </Heading>
          <Box
            bg={surfaceBg}
            p={8}
            borderRadius="2xl"
            boxShadow="xl"
            border="1px solid"
            borderColor={borderColor}
          >
            <List spacing={4}>
              {city.tips.map((tip, index) => (
                <ListItem key={index} fontSize="lg" display="flex" alignItems="flex-start">
                  <ListIcon as={CheckCircleIcon} color="brand.500" mt={1} mr={4} />
                  <Text color={mutedText}>{tip}</Text>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>

        <Box mb={16}>
          <Heading
            size="xl"
            mb={8}
            borderBottom="2px solid"
            borderColor="brand.500"
            pb={2}
            display="inline-block"
          >
            {dict.city.attractions}
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {city.attractions.map((attraction, index) => (
              <Box
                key={index}
                bg={surfaceBg}
                p={6}
                borderRadius="2xl"
                boxShadow="xl"
                border="1px solid"
                borderColor={borderColor}
              >
                <Image
                  src={attraction.image}
                  alt={attraction.name}
                  borderRadius="xl"
                  mb={4}
                  h="220px"
                  w="100%"
                  objectFit="cover"
                  fallbackSrc="/images/empty.png"
                />
                <Heading size="md" mb={3}>
                  {attraction.name}
                </Heading>
                <Text color={mutedText} lineHeight="tall">
                  {attraction.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <Box>
          <Heading
            size="xl"
            mb={8}
            borderBottom="2px solid"
            borderColor="brand.500"
            pb={2}
            display="inline-block"
          >
            {dict.city.food}
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {city.foods.map((food, index) => (
              <Box
                key={index}
                bg={surfaceBg}
                p={6}
                borderRadius="2xl"
                boxShadow="xl"
                border="1px solid"
                borderColor={borderColor}
              >
                <Image
                  src={food.image}
                  alt={food.name}
                  borderRadius="xl"
                  mb={4}
                  h="220px"
                  w="100%"
                  objectFit="cover"
                  fallbackSrc="/images/empty.png"
                />
                <Heading size="md" mb={3}>
                  {food.name}
                </Heading>
                <Text color={mutedText} lineHeight="tall">
                  {food.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}
