import React from 'react';
import { Box, Heading, Text, Button, Image, Container, Center, useBreakpointValue } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

interface Product {
  id: string;
  name: string;
  price: string | 'Coming Soon';
  imageUrl: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'The 21M Faces of Bitcoin Mug',
    price: '14.00$',
    imageUrl: '/api/placeholder/300/300',
  },
  {
    id: '2',
    name: 'Here Comes Bitcoin Plushi',
    price: 'Coming Soon',
    imageUrl: '/api/placeholder/300/300',
  },
  {
    id: '3',
    name: 'Bitcoin Hoodie',
    price: '45.00$',
    imageUrl: '/api/placeholder/300/300',
  },
  {
    id: '4',
    name: 'Crypto Wallet',
    price: '30.00$',
    imageUrl: '/api/placeholder/300/300',
  },
  // Add more products if needed
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const imageSize = useBreakpointValue({ base: "200px", md: "250px" });
  const containerHeight = useBreakpointValue({ base: "300px", md: "350px" });

  return (
    <Box
      borderWidth="1px"
      borderRadius="sm"
      overflow="hidden"
      bg="white"
      p={4}
      height={containerHeight}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Image src={product.imageUrl} alt={product.name} mb={4} w={imageSize} h={imageSize} objectFit="contain" />
      <Box>
        <Heading as="h3" size="md" mb={2} textAlign="center">{product.name}</Heading>
        <Button
          colorScheme="yellow"
          variant="solid"
          width="full"
          isDisabled={product.price === 'Coming Soon'}
        >
          {product.price === 'Coming Soon' ? 'Coming Soon' : product.price}
        </Button>
      </Box>
    </Box>
  );
};

const ProductShowcase: React.FC = () => {
  return (
    <Container maxW="container.2xl" py={10} px={4} mb={24} bg="gray.50">
      <Heading
        color="#14253d"
        textAlign="center"
        mb={6}
        mt={20}
        fontSize="48px"
        fontWeight="500"
        lineHeight="1.2"
      >
        Here comes your bitcoin
      </Heading>
      <Center>
        <Text
          color="#4a5568"
          textAlign="center"
          maxW="700px"
          mb={20}
          fontSize="16px"
          fontWeight="400"
          lineHeight="1.5"
        >
         It&rsquo;s only a matter of time until everything becomes a plushie, but in our case, it took even longer because Bitcoin kept eating our concepts. Grab your hungry guy today.
        </Text>
      </Center>
      <Box px={{
        base: 6,
        lg: "120px",
      }}
        mb={20}>
        <Swiper

          slidesPerView="auto"
          spaceBetween={20}
          centeredSlides={false}
          className="mySwiper"

          breakpoints={{
            320: { slidesPerView: 1.2, spaceBetween: 10 },
            768: { slidesPerView: 2.5, spaceBetween: 20 },
            1024: { slidesPerView: 2.5, spaceBetween: 40 },
          }}
          style={{
            overflow: 'hidden',
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} style={{ overflow: 'visible' }}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}

        </Swiper>
      </Box>
      
    </Container>
  );
};

export default ProductShowcase;