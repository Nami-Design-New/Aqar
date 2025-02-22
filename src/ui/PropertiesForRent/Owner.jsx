import { useTranslation } from "react-i18next";

export default function Owner({ owner }) {
  const { t } = useTranslation();

  return (
    <div className="user">
      <h4>{t("forRent.userInfo")}</h4>
      <div className="d-flex justify-content-between align-items-center">
        <div className="info">
          <img className="user-img" src={owner.image} alt="User" />
          <h5>{owner.name}</h5>
        </div>
        <button>
          <i className="fa-light fa-comment"></i> {t("forRent.chat")}
        </button>
      </div>
    </div>
  );
}
