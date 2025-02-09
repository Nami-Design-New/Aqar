import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { BOOKING_STATUS_AR, BOOKING_STATUS_EN } from "../../utils/constants";
import ProgressBar from "../ProgressBar";

export default function MyBookingCard() {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.language.lang);
  return (
    <div className="card">
      <img src="/images/house-1.jpg" alt="Booking" className="card-img-top" />
      <div className="card-body">
        <h4 className="card-title ">فيلا للايجار</h4>
        <p className="card-text">250,000 ريال / سنوي</p>
        <p className="text-muted">تاريخ 15-20 يناير - 2 بالغون</p>
        <p className="d-flex align-items-center justify-content-between m-0">
          <span className="">#435346346</span>
          <span className="text-muted">12-12-2025</span>
        </p>
      </div>
      <ProgressBar status="cancelled" />
      <div className="booding-card-footer">
        <span className="booking-status-label cancelled">
          {lang === "ar"
            ? BOOKING_STATUS_AR.cancelled
            : BOOKING_STATUS_EN.cancelled}
        </span>
        <Link to={`2`}>{t("book.more")}</Link>
      </div>
    </div>
  );
}
