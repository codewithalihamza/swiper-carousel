import React, { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/parallax';
import { Autoplay, Pagination, Parallax } from 'swiper/modules';
import Image from 'next/image';
import Image1 from '../../../public/1.jpg';
import Image2 from '../../../public/2.jpg';
import Image3 from '../../../public/3.jpg';
import Image4 from '../../../public/4.jpg'
import Image5 from '../../../public/5.jpg'
import Image6 from '../../../public/6.jpeg'

const Carousel = (): ReactNode => {
    /* eslint-disable max-len */
    const carouselItems = [
        {
            name: 'Explore the World of Artificial Intelligence',
            description:
                `Dive into the fascinating realm of artificial intelligence - the cutting-edge technology that mimics human intelligence. Discover its applications in various fields and how it's shaping the future.`,
            imageSrc: Image1,
            buttonLink: 'https://example.com/artificial-intelligence',
        },
        {
            name: 'Unlock the Potential of Blockchain Technology',
            description:
                'Learn about blockchain technology - the decentralized ledger system behind cryptocurrencies like Bitcoin. Explore its innovative applications beyond finance and its potential to revolutionize industries.',
            imageSrc: Image2,
            buttonLink: 'https://example.com/blockchain-technology',
        },
        {
            name: 'Embrace the Era of Internet of Things (IoT)',
            description:
                'Discover the Internet of Things (IoT) - the interconnected network of devices transforming our daily lives. Explore its impact on smart homes, healthcare, transportation, and more.',
            imageSrc: Image3,
            buttonLink: 'https://example.com/internet-of-things',
        },
        {
            name: 'Unlock the Power of Data Science and Analytics',
            description:
                'Delve into the world of data science and analytics - the practice of extracting insights from data to drive informed decision-making. Explore its applications across industries and its role in driving innovation.',
            imageSrc: Image4,
            buttonLink: 'https://example.com/data-science-analytics',
        },
        {
            name: 'Discover the Potential of Augmented Reality (AR)',
            description:
                'Explore the exciting world of augmented reality (AR) - the technology that overlays digital content onto the real world. Learn about its applications in gaming, education, healthcare, and more.',
            imageSrc: Image5,
            buttonLink: 'https://example.com/augmented-reality',
        },
        {
            name: 'Unleash the Power of Cybersecurity',
            description:
                'Learn about cybersecurity - the practice of protecting computer systems and networks from digital attacks. Explore its importance in safeguarding personal data, businesses, and critical infrastructure.',
            imageSrc: Image6,
            buttonLink: 'https://example.com/cybersecurity',
        },
    ];


    return (
        <Swiper
            spaceBetween={30}
            centeredSlides
            modules={[Autoplay, Pagination, Parallax]}
            parallax
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="swiper"
        >
            {carouselItems.map((item, index) => (
                <SwiperSlide key={index} style={{ position: 'relative' }}>
                    <Image src={item.imageSrc} alt="background-Image" className="w-100 background-image" />
                    <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                        <h2 className="name-text">{item.name}</h2>
                        <p className="carousel-description-text">{item.description}</p>
                        <a href={item.buttonLink} className="btn button-text">Click Here</a>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
