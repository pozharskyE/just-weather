import React from "react";
import "./mini-widgets-carousel.css";

import { MiniWidget } from "./../../components";

// Swiper library
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

function MiniWidgetsCarousel(props) {
    let itemsList = [];

    for (let i = 0; i < props.temperatures.length; i++) {
        // console.log(props.wheatherCodes[i]);
        itemsList.push(
            <SwiperSlide key={`swiper_slide_${i}`}>
                <MiniWidget
                    time={props.times[i]}
                    weatherCode={props.weatherCodes[Number(i)]}
                    isDay={props.isDays[i]}
                    iconsFolder={props.iconsFolder}

                    temperature={props.temperatures[i]}
                    temperatureUnit={props.temperatureUnit}

                    precipitationProb={props.precipitationProbs[i]}
                />
            </SwiperSlide>
        );
    }

    return (
        <div className="mini-widgets-carousel">
            <h1>{props.title}</h1>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                grabCursor={true}
                breakpoints={{
                    310: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },

                    730: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                className="w-hours-fc-swiper"
            >
                {itemsList}
            </Swiper>
        </div>
    );
}

export default MiniWidgetsCarousel;
