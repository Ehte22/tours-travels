import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import PropTypes from 'prop-types'

import { Pagination, Navigation } from 'swiper/modules';
import { Box, useMediaQuery } from '@mui/material';

const Carousel = ({ images }) => {
    const reorderedImages = [
        images[1],
        images[0],
        images[2],
        ...images.slice(3),
    ];


    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const isMediumScreen = useMediaQuery('(max-width:960px)');

    const getHeight = () => {
        if (isSmallScreen) {
            return '300px';
        } else if (isMediumScreen) {
            return '400px';
        } else {
            return '500px';
        }
    };

    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            {reorderedImages.map((image, index) => (
                <SwiperSlide key={index}>
                    <Box
                        sx={{
                            backgroundImage: `url(${image})`,
                            height: getHeight(),
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

Carousel.propTypes = {
    images: PropTypes
}
export default Carousel;
