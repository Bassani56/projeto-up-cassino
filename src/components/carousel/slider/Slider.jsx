import React, { useEffect, useRef } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import './slide.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Autoplay } from 'swiper/modules'; // Importando Autoplay

export default function Slider({ settings, children }) {
    const swiperRef = useRef(null);

    useEffect(() => {
        // Pára o autoplay após 4 segundos (4000ms)
        const timeout = setTimeout(() => {
            if (swiperRef.current && swiperRef.current.swiper) {
                swiperRef.current.swiper.autoplay.stop(); // Para o autoplay
            }
        }, 4000);

        // Cleanup do timeout quando o componente desmontar
        return () => clearTimeout(timeout);
    }, []);

    return (
        <Swiper
            {...settings} // Configurações do Swiper
            ref={swiperRef} // Armazena a referência do Swiper
            modules={[Navigation, Autoplay]} // Adicionando o Autoplay como módulo
            spaceBetween={0} 
            slidesPerView={7} 
            navigation={true}
            loop={true} // Habilita o loop infinito
            autoplay={{
                delay: 100, // Pequeno delay para simular movimento rápido
                disableOnInteraction: false, // Mantém o autoplay após interação
            }}
            
        >
            {React.Children.map(children, (child, index) => (
                <SwiperSlide key={index}>
                    <div 
                        className='square' 
                        style={{
                            background: 
                                index === 8 ? 'white' : 
                                child > 7 ? 'red' : 
                                'rgb(15, 25, 35)'
                        }}
                    >
                        {child}
                    </div>      
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
