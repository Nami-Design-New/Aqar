import { Link } from "react-router";
import { useAddToFavorites } from "../../hooks/favorites/useAddToFavorites";
import { useDeleteFromFavorites } from "../../hooks/favorites/useDeleteFromFavorites";
import { useEffect } from "react";
import Aos from "aos";
import { useSelector } from "react-redux";
import { PER_AR, PER_EN } from "../../utils/constants";

export default function PropertyCard({ ad }) {
  const { addToFavorites } = useAddToFavorites();
  const { deleteFromFavorites } = useDeleteFromFavorites();
  const lang = useSelector((state) => state.language.lang);

  useEffect(() => {
    Aos.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="property-card" data-aos="fade-up">
      <div className="image-container">
        <img src={ad.image} alt={ad.title} />
        <div className="fav-btn">
          {ad.is_favorite ? (
            <i onClick={() => deleteFromFavorites(ad.id)} className="fa-solid fa-heart"></i>
          ) : (
            <i onClick={() => addToFavorites(ad.id)} className="fa-light fa-heart"></i>
          )}
        </div>
      </div>
      <Link to={`/for-rent/${ad.id}`}>
      <div className="card-content">
      <div className="title-price">
  <h2 className="title-link">{ad.title}</h2>
  <p className="price">
    {ad.price} ريال / {lang === "ar" ? PER_AR[ad.per] : PER_EN[ad.per]}
  </p>
</div>


        <div className="details">
          <span><i className="fa-solid fa-expand"></i> 100m²</span>
          <span><i className="fa-solid fa-bed"></i> 5 غرف نوم</span>
          <span><i className="fa-solid fa-couch"></i> 3 غرف معيشة</span>
          <span><i className="fa-solid fa-bath"></i> 3 حمامات</span>
        </div>

        <p className="address">{ad.address}</p>
      </div>
      </Link>
    </div>
  );
}
