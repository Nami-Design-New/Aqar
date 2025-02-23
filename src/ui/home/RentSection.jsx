import { Link } from "react-router";
import PropertyCard from "../cards/PropertyCard";
import { useTranslation } from "react-i18next";
import { useGetAds } from "../../hooks/ads/useGetAds";
import DataLoader from "../DataLoader";
import EmptyData from "../EmptyData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // إضافة نمط التشغيل التلقائي
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

export default function RentSection() {
  const { t } = useTranslation();
  const { ads, isLoading } = useGetAds();

  if (isLoading) {
    return <DataLoader />;
  }

  return (
    <section className="rent-section">
      <section className="section-header">
        <div>
          <h2>{t("home.forRentUnits")}</h2>
          <p>{t("home.forRentUnitsdes")}</p>
        </div>
        <Link to={"for-rent"}>{t("home.viewAll")}</Link>
      </section>

      <Swiper
        modules={[EffectCoverflow, Pagination, Autoplay]}   
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        initialSlide={2}
        // autoplay={{
        //   delay: 2500, 
        //   disableOnInteraction: false, 
        // }}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        className="custom-swiper"
      >
        {ads.data && ads.data.length > 0 ? (
          ads.data.map((ad) => (
            <SwiperSlide key={ad.id} className="custom-slide">
              <PropertyCard ad={ad} />
            </SwiperSlide>
          ))
        ) : (
          <EmptyData text={t("forRent.noDatafound")} />
        )}
      </Swiper>
    </section>
  );
}
