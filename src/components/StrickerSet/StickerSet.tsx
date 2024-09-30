import React from 'react';
import { Box, Heading, Text, Flex, Image, VStack, HStack } from '@chakra-ui/react';
import CustomButton from '../CustomButton/CustomButton';

const StickerSet = () => {
  return (
    <Box bg="#FFF1E5" w="full" overflow="hidden" px={{
      base: 6,
      lg: "100px",
    }} >
      {/* Flex container for main content */}
      <Flex
        direction={{ base: 'column', md: 'row' }}
        mx="auto"
        align="center"
        justify="space-between"
        overflow="hidden"
      >
        {/* Text Section */}
        <VStack
          align={{ base: 'center', md: 'flex-start' }}
          spacing={4}
          p={8}
          mb={{ base: 8, md: 0 }}
          w={{ base: 'full', md: '40%' }}
        >
          <Heading as="h1" size="2xl" color="navy.700" textAlign={{ base: 'center', md: 'left' }}>
            Get Stickers Set
          </Heading>
          <Text fontSize="lg" color="gray.600" textAlign={{ base: 'center', md: 'left' }}>
            Access HereComesBitcoin stickers on Telegram and Signal and use them in your groups.
          </Text>

          {/* Buttons for Telegram and Signal */}
          <HStack spacing={6} w={{ base: 'full', md: 'auto' }} justifyContent={{ base: 'center', md: 'flex-start' }}>
            <CustomButton bg="#F7931A" color="white" fontSize="20px" padding="1.2rem 2rem">
              Telegram Stickers
            </CustomButton>
            <CustomButton bg="#F7931A" color="white" fontSize="20px" padding="1.2rem 2rem">
              Signal Stickers
            </CustomButton>
          </HStack>
        </VStack>

        {/* Image Section */}
        <Flex
          w={{ base: 'full', md: '55%' }}
          position="relative"
          justify="center"
          align="center"
          mt={{ base: 4, md: 0 }}
          mb={{ base: 4, md: 0 }}
          px={{ base: 0, md: 4 }}
        >
          {/* First Image for Telegram Preview */}
          <Box
            position="relative"
            w={{ base: 'full', md: 'auto' }}
            maxW={{ base: '200px', md: '250px' }}
            mr={{ base: 0, md: '5%' }}
            mt={{ base: 0, md: '100px' }} // Moves the first image slightly up
          >
            <Image
              src="/assets/Mobile-preview-One.png" // Your first mobile preview image
              alt="Telegram chat preview"
              w="100%"
              h="auto"
              objectFit="contain"
              borderRadius="xl"
              border="2px solid transparent"
            />
          </Box>

          {/* Second Image for Signal Preview */}
          <Box
            position="relative"
            w={{ base: 'full', md: 'auto' }}
            maxW={{ base: '200px', md: '250px' }}
            ml={{ base: 0, md: '10%' }}
            mt={{ base: 0, md: '-100px' }} // Moves the second image slightly down
          >
            <Image
              src="/assets/Mobile-preview-Two.png" // Your second mobile preview image
              alt="Signal chat preview"
              w="100%"
              h="auto"
              objectFit="contain"
              borderRadius="xl"
              border="2px solid transparent"
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default StickerSet;
