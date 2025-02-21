import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router";
import { setFilter } from "../../redux/slices/filterSlice";
import { handleApplyFilters } from "../../utils/helper";
import FilterCalender from "../home/FilterCalender";
import FilterGuests from "../home/FilterGuests";

export default function FilterModal({ showModal, setShowModal }) {
  const { t } = useTranslation();
  const { lang } = useSelector((state) => state.language);
  const formData = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSearch(e) {
    dispatch(setFilter({ search: e.target.value }));
  }
  const [, setSearchParms] = useSearchParams();
  function handleSumit(e) {
    e.preventDefault();
    navigate("/for-rent");
    handleApplyFilters(setSearchParms, formData);
    setShowModal(false);
  }

  function resetFilters() {
    dispatch(
      setFilter({
        search: "",
        category_id: "",
        city_id: "",
        user_id: "",
        adult_number: "",
        children_number: "",
        baby_number: "",
        with_pits: "",
        area_id: "",
        from_date: "",
        to_date: "",
      })
    );
    setSearchParms("");
    setShowModal(false);
  }
  return (
    <Modal
      className="filter-modal"
      show={showModal}
      size="lg"
      onHide={() => setShowModal(false)}
    >
      <Modal.Header closeButton className={`${lang === "ar" ? "ar" : ""}`}>
        {t("home.filter")}
      </Modal.Header>
      <Modal.Body className="modal-filter-body">
        <form onSubmit={handleSumit}>
          <div className="filter-field">
            <label className="label" htmlFor="search">
              {t("filter.search")}{" "}
            </label>
            <input
              value={formData.search}
              type="search"
              id="search"
              name="search"
              className="search-field"
              onChange={handleSearch}
              placeholder=""
            />
          </div>
          <div className="filter-field">
            <label className="label"> {t("filter.nightsNumber")} </label>
            <FilterCalender />
          </div>
          <div className="filter-field">
            <label className="label">{t("filter.guestNumber")} </label>
            <FilterGuests />
          </div>
          {/* <div className="filter-field">
            <label className="label">مطلبات الايجار ؟ </label>
            <div className="body  ">
              {" "}
              <label className="checkbox-field" htmlFor="premium-houses">
                <input type="checkbox" id="premium-houses" />
                <div>
                  <span>منازل فاخره </span>
                </div>
              </label>
              <label className="checkbox-field" htmlFor="hotel-homes">
                <input type="checkbox" id="hotel-homes" />
                <div>
                  <span>منازل فندقيه</span>
                </div>
              </label>
              <label className="checkbox-field" htmlFor="studio">
                <input type="checkbox" id="studio" />
                <div>
                  <span>استوديو</span>
                </div>
              </label>
              <label className="checkbox-field" htmlFor="villa">
                <input type="checkbox" id="villa" />
                <div>
                  <span>فيلا</span>
                </div>
              </label>
              <label className="checkbox-field" htmlFor="office">
                <input type="checkbox" id="office" />
                <div>
                  <span>مكتب</span>
                </div>
              </label>
              <label className="checkbox-field" htmlFor="shared-rooms">
                <input type="checkbox" id="shared-rooms" />
                <div>
                  <span>غرف مشتركه</span>
                </div>
              </label>
            </div>
          </div> */}
        </form>
      </Modal.Body>
      <Modal.Footer className="modal-filter-footer">
        <button onClick={handleSumit} className="btn-apply">
          {t("home.search")}
        </button>
        <button onClick={resetFilters} className="btn-cancel">
          {t("home.deleteAll")}
        </button>
      </Modal.Footer>
    </Modal>
  );
}
