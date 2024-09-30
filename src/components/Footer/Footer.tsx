import React from 'react';
import { Box, Flex, VStack, Text, Heading, Link, Image, Stack, Container, Grid, GridItem } from "@chakra-ui/react";
import NextLink from "next/link";
import WaveBorderTop from '../Waveborder/WaveBorderTop';
import CustomButton from '../CustomButton/CustomButton';

const Footer = () => {
  return (
    <Box>
      <Box position="relative" height="100px" zIndex={1}>
        <WaveBorderTop color='#12334C' />
      </Box>
      <Box as="footer" position="relative" bg="#12334C" color="#A6B5C5" pt="40px" >
        <Container maxW="container.2xl"  px={{
          base: 6,
          lg: "100px",
        }}  py={0}>
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 2fr" }}
            mt={10}
          >
            <GridItem>
              <Stack spacing={6} width={{ base: "100%", lg: "auto" }}>
                <Heading fontSize="6xl" fontWeight="medium" color="#A6B5C5">
                  Get In Touch
                </Heading>
                <Text fontSize="20px" maxW="300px" lineHeight="1.5" color="white" >
                  For shop support, business, and licensing enquiries, please click below to get in touch!
                </Text>
                <CustomButton
                  bg="#FFD24C"
                  color="#12334C"
                  fontSize="28px"
                  padding="1.7rem 1.5rem"
                  width="fit-content"
                  mb={8}
                  mt={6}
                >
                  Contact Us
                </CustomButton>
              </Stack>
              <Stack spacing={6} width={{ base: "100%", lg: "auto" }} mt={8}>
                <Heading fontSize="6xl" fontWeight="medium" color="#A6B5C5">
                  Follow Us
                </Heading>
                <Flex>
                  <Link href="https://youtube.com" isExternal mr={4}>
                    <Image src="/assets/youtube-icon.svg" alt="YouTube" boxSize="24px" />
                  </Link>
                  <Link href="https://discord.com" isExternal>
                    <Image src="/assets/discord-icon.svg" alt="Discord" boxSize="24px" />
                  </Link>
                </Flex>
              </Stack>
            </GridItem>
            <GridItem>
              <Flex
                direction={{ base: "column", lg: "row" }}
                justifyContent="space-between"
                alignItems={{ base: "flex-start", lg: "flex-start" }}
              >
                <Stack spacing={4} width={{ base: "100%", lg: "auto" }}>
                  <Heading fontSize="6xl" fontWeight="medium" color="#A6B5C5" mb={2}>
                    Explore
                  </Heading>
                  <Stack spacing={2}>
                    <NextLink href="/guidelines" passHref>
                      <Link fontSize="20px">Usage Guidelines</Link>
                    </NextLink>
                    <NextLink href="/built-with-hcb" passHref>
                      <Link fontSize="20px">Built With HCB</Link>
                    </NextLink>
                    <NextLink href="/collab" passHref>
                      <Link fontSize="20px">Want To Collab ?</Link>
                    </NextLink>
                  </Stack>
                </Stack>
                <Box display={{ base: "none", lg: "block" }} mt={60} mb={8} >
                  <Image
                    src="/assets/CatFooter.png"
                    alt="Bitcoin Cat"
                    maxW="680px"
                    ml="auto"
                  />
                </Box>
              </Flex>
              
            </GridItem>

            <Box display={{ base: "block", lg: "none" }} position="relative" width="100%" height="auto" my={8}>
              <Image
                src="/assets/Cat.png"
                alt="Bitcoin Cat"
                width="100%"
                maxW="300px"
                mx="auto"
              />
            </Box>
          </Grid>

        </Container>
      </Box>
    </Box>
  );
};

export default Footer;