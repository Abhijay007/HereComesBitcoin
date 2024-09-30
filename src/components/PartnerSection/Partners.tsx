import React from 'react';
import { Box, Heading, Text, Flex, Image, useColorModeValue, useBreakpointValue, Center } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const partnersData = [
  { name: 'Shamory', logo: 'SHAmory.png', bgColor: '#E6FFF2' },
  { name: 'HRF', logo: 'hrf-logo.svg', bgColor: '#FFF5E6' },
  { name: 'OpenSats', logo: 'opensats-logo.svg', bgColor: '#E6F3FF' },
  { name: 'Shamory', logo: 'SHAmory.png', bgColor: '#E6FFF2' },
  { name: 'HRF', logo: 'hrf-logo.svg', bgColor: '#FFF5E6' },
  { name: 'OpenSats', logo: 'opensats-logo.svg', bgColor: '#E6F3FF' },
];

const Partners: React.FC = () => {

  const imageSize = useBreakpointValue({ base: "200px", md: "200px" });
  const bgSize = useBreakpointValue({ base: "180px", md: "180px" });
  const containerHeight = useBreakpointValue({ base: "260px", md: "260px" });

  return (
    <Box textAlign="center" py={10} px={4} mb={24}>
      <Heading
        color="#14253d"
        textAlign="center"
        mb={6}
        mt={20}
        fontSize="48px"
        fontWeight="500"
        lineHeight="1.2"
      >
        Partners in code
      </Heading>

      <Center>
        <Text
          color="#4a5568"
          textAlign="center"
          maxW="700px"
          mb={10}
          fontSize="16px"
          fontWeight="400"
          lineHeight="1.5"
        >
          We’re big fans of our big fans. If your brand is good for bitcoin and could benefit from having its own sticker,, we might just Be willing to partner up. So get in touch.
        </Text>
      </Center>
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        centeredSlides={false}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 1.5, spaceBetween: 5 },  // Show 1 full + a little cut of the next
          768: { slidesPerView: 2.6, spaceBetween: 15 },  // Show 2 full + partial of the next
          1024: { slidesPerView: 3.6, spaceBetween: 30 }, // Show 3 full + cut of the next one
        }}
        style={{
          overflow: 'hidden',  // Ensure cut-off effect is visible
        }}
      >
        {partnersData.map((partner, index) => (
          <SwiperSlide key={index} style={{ overflow: 'visible' }}>
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
              h={containerHeight}
              position="relative"
            >
              <Box
                position="absolute"
                w={bgSize}
                h={bgSize}
                borderRadius="full"
                bg={partner.bgColor}
                zIndex={1}
              />
              <Image
                src={`/assets/${partner.logo}`}
                alt={partner.name}
                w={imageSize}
                h={imageSize}
                objectFit="contain"
                position="relative"
                zIndex={2}
              />
            </Flex>
            <Text fontSize={{ base: "sm", md: "md" }} fontWeight="medium" color="gray.700">
              {partner.name}
            </Text>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Partners;
