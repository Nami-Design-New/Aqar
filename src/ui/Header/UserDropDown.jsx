import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useLogout } from "../../hooks/auth/useLogout";
import { openAuthModal } from "../../redux/slices/authModalSlice";
import useAuth from "../../hooks/helper/useAuth";
import AuthModal from "../Authentication/AuthModal";

export default function UserDropDown() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isAuthed } = useAuth();
  const user = useSelector((state) => state.user.user);
  const { logout, isLoading } = useLogout();

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle className="user-btn">
          <div className="user-img-wrapper">
            <img
              src={user?.image ? user.image : "/icons/user.svg"}
              alt="user_alt"
            />
          </div>
          {t("header.myAccount")}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {isAuthed ? (
            <Dropdown.Item as="button" disabled={isLoading} onClick={logout}>
              {isLoading && (
                <i className="fa-duotone fa-regular fa-circle-notch fa-spin"></i>
              )}
              {t("header.logout")}
            </Dropdown.Item>
          ) : (
            <>
              <Dropdown.Item
                as="button"
                onClick={() => dispatch(openAuthModal())}
              >
                {t("header.login")}
              </Dropdown.Item>
            </>
          )}
        </Dropdown.Menu>
      </Dropdown>
      <AuthModal />
    </>
  );
}
