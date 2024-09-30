import React from 'react';
import { Box, Text, Image, useMediaQuery } from '@chakra-ui/react';
import CustomButton from '../CustomButton/CustomButton';

const BitcoinVideoComponent = () => {
  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const [isTablet] = useMediaQuery("(min-width: 481px) and (max-width: 768px)");

  return (
    <Box
      position="relative"
      bg="#E6F4EA"
      mt={isMobile ? 16 : isTablet ? 24 : 32}
      mb={isMobile ? "220px" : isTablet ? "250px" : "280px"}
      minHeight={isMobile ? "auto" : isTablet ? "auto" : "100vh"}
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding={4}
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        height={isMobile ? "50%" : isTablet ? "60%" : "69.5%"}
        backgroundImage="url('/assets/TheaterStrips.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        zIndex={1}
      />
      <Box
        width={isMobile ? "95%" : isTablet ? "90%" : "70%"}
        maxWidth="1200px"
        position="relative"
        zIndex={2}
        aspectRatio={16 / 9}
        mt={isMobile ? 10 : isTablet ? 15 : 20}
        mb={isMobile ? 10 : isTablet ? 15 : 20}
        overflow="hidden"
        borderRadius="md"
      >
        <Box
          as="iframe"
          src="https://www.youtube.com/embed/your-video-id"
          width="100%"
          height="100%"
          border="none"
          position="absolute"
        />
      </Box>
      <Text
        fontSize={isMobile ? "sm" : isTablet ? "md" : "lg"}
        textAlign="center"
        my={4}
        color="#12334C"
        maxWidth={isMobile ? "90%" : isTablet ? "80%" : "600px"}
      >
       Many have asked the question, &ldquo;What is Bitcoin?&rdquo; Few have ever dared to ask, &ldquo;Who is Bitcoin?&rdquo;
      </Text>
      <CustomButton
        bg="#FFD24C"
        color="#12334C"
        fontSize={isMobile ? "md" : isTablet ? "lg" : "xl"}
        py={isMobile ? 2 : isTablet ? 3 : 4}
        px={isMobile ? 4 : isTablet ? 6 : 8}
        mt={isMobile ? 5 : isTablet ? 7 : 10}
        mb={isMobile ? 18 : isTablet ? 24 : 36}
      >
        Watch Now
      </CustomButton>
      <Image
        src={isMobile ? "/assets/bitcoin-characters-mobile.png" : "/assets/bitcoinCharacters.png"}
        alt="Bitcoin characters"
        position="absolute"
        bottom={isMobile ? "-110px" : isTablet ? "-140px" : "-180px"}
        left={0}
        right={0}
        width="100%"
        height="auto"
        objectFit="contain"
        zIndex={2}
      />
    </Box>
  );
};

export default BitcoinVideoComponent;