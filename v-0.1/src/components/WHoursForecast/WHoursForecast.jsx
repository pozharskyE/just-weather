import "./whoursforecast.css";
import { WHoursForecastElement } from "./../../components";



import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination} from 'swiper/modules';

function WHoursForecast(props) {
    const times = props.time.map((el) => {
            let date = new Date(el);
            return (date.toLocaleTimeString('en', { timeStyle: 'short', hour12: false, timeZone: (props.timeZone)}));
        }
    );

    // const weatherIconNames = props.weatherCode.map(
    //     (el) => {

    //     }
    // )


    let listItems = [];

    for (let i = 0; i < props.temperature.length; i++) {
        listItems.push(
            <SwiperSlide key={i}>
                <WHoursForecastElement 
                    time={times[i]}
                    temperature={props.temperature[i]}
                    // imgPath={}
                />
            </SwiperSlide>
        )
    }


    return (
        <>
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
                {listItems}

                {/* {
                    props.temperatures.map((val, i) => {
                        <>
                            <SwiperSlide key={i}>
                                <WHoursForecastElement />
                            </SwiperSlide>
                        </>}
                } */}


                {/* {[1,2,3,4,5,6,7].map((el) => <SwiperSlide key={el}>
                    <WHoursForecastElement />
                </SwiperSlide>)} */}
            </Swiper>
        </>
    );
}

export default WHoursForecast;
