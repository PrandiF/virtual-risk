import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import NosotrosAvatar from "./NosotrosAvatar";
import avatar1 from "../../../assets/avatar1.png";
import avatar2 from "../../../assets/avatar2.png";
import avatar3 from "../../../assets/avatar3.png";

function ResponsiveAvatar() {
  return (
    <div className="flex flex-col w-screen relative ">
      <div
        className="w-full rounded-sm relative"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="400"
      >
        <div className="swiper-button-prev-serv absolute left-5 top-[50%] transform z-10">
          <BsFillArrowLeftSquareFill className="w-8 h-8 cursor-pointer rounded-xl" />
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={false}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          pagination={{ el: ".swiper-pagination-serv", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next-serv",
            prevEl: ".swiper-button-prev-serv",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="h-full w-[55%] relative flex items-center justify-center m-auto mt-4"
        >
          <SwiperSlide className="w-full h-[90%] relative flex justify-center">
            <NosotrosAvatar
              name="Norma Gonzalez"
              position="Socia Fundadora"
              img={avatar1}
            />
          </SwiperSlide>
          <SwiperSlide className="w-full h-[90%] relative flex justify-center">
            <NosotrosAvatar
              name="José María Izquierdo"
              position="Socio Fundadora"
              img={avatar2}
            />
          </SwiperSlide>
          <SwiperSlide className="w-full h-[90%] relative flex justify-center">
            <NosotrosAvatar
              name="Cecilia Izquierdo"
              position="Gerente"
              img={avatar3}
            />
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-next-serv absolute right-5 top-[50%] transform  z-10">
          <BsFillArrowRightSquareFill className="w-8 h-8 cursor-pointer rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export default ResponsiveAvatar;
