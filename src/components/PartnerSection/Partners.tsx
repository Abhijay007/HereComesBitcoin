import React from 'react';
import { Box, Heading, Text, Flex, Image, useBreakpointValue, Center } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import CircleBackground from '../../../public/assets/PartnersImages/CircleBackground.svg';

const partnersData = [
  { name: 'Shamory', logo: 'SHAmory.png', color: '#E6FFF2' },
  { name: 'HRF', logo: 'HRF.png', color: '#FFF5E6' },
  { name: 'OpenSats', logo: 'opensats-logo.svg', color: '#E6F3FF' },
  { name: 'Shamory', logo: 'SHAmory.png', color: '#E6FFF2' },
  { name: 'HRF', logo: 'HRF.png', color: '#FFF5E6' },
  { name: 'OpenSats', logo: 'opensats-logo.svg', color: '#E6F3FF' },
];


const StyledCircleBackground: React.FC<{ color: string }> = ({ color }) => (
  <Box
    as={CircleBackground}
    sx={{
      'circle, path': {
        fill: color,
      }
    }}
  />
);

const Partners: React.FC = () => {
  const imageSize = useBreakpointValue({ base: "220px", md: "210px" });
  const bgSize = useBreakpointValue({ base: "200px", md: "190px" });
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
          We&apos;re big fans of our big fans. If your brand is good for bitcoin and could benefit from having its own sticker, we might just be willing to partner up. So get in touch.
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
          320: { slidesPerView: 1.3, spaceBetween: 20 },
          768: { slidesPerView: 2.6, spaceBetween: 15 },
          1024: { slidesPerView: 3.6, spaceBetween: 30 },
        }}
        style={{
          overflow: 'hidden',
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
                zIndex={1}
              >
                <StyledCircleBackground color={partner.color} />
              </Box>
              <Image
                src={`/assets/PartnersImages/${partner.logo}`}
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