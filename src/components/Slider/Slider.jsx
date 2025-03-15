import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Hero from '../Hero/Hero.jsx';
import img1 from "../../assets/Home/Hero/hero.png"
import img2 from "../../assets/Home/Hero/hero 2.png"
import img3 from "../../assets/Home/Hero/hero3.png"

const Slider = () => {
	return (
		<div>
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={20} // Отступ между слайдами
				slidesPerView={1} // Количество отображаемых слайдов
				pagination={{ clickable: false }} // Точки навигации
				loop={true} // Бесконечный цикл
			>
				<SwiperSlide>
					<Hero img={img1}/>
				</SwiperSlide>
				<SwiperSlide>
					<Hero img={img2}/>
				</SwiperSlide>
				<SwiperSlide>
					<Hero img={img3}/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Slider;