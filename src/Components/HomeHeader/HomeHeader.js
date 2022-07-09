import "./HomeHeader.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link, useNavigate } from "react-router-dom";
import fb from "./images/5968764.png";
import { auth } from "../FormAuth/firebase";
import HelpIcon from "@material-ui/icons/Help";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import FeedbackIcon from "@material-ui/icons/Feedback";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import NotificationsIcon from "@material-ui/icons/Notifications";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import DialpadIcon from "@material-ui/icons/Dialpad";
import HomeIcon from "@material-ui/icons/Home";
import LeftColumn from '../MainLeftColumn/LeftColumn'

function FormAuth({ user }) {
  const navigate = useNavigate();

  if (user === false) {
    navigate("/login");
  }

  const logout = (event) => {
    event.preventDefault();
    auth.signOut();
    navigate("/login");
  };

  return (
    <>
    <div className="homeHeader">
      <div className="homeHeader__left">
        <Link to="/">
          <img src={fb} alt="facebook-logo" width="50px" />
        </Link>
        <div className="homeHeader__inputSearch">
          <SearchIcon className="homeHeader__inputButton" />
          <input
            type="text"
            placeholder="Пошук у facebook"
            className="inputSearch"
          />
        </div>
      </div>

      <section>
        <a href="#" className="header_icon">
          <HomeIcon fontSize="large" />
        </a>
      </section>

      <section className="icon_wraper">
        <a href="#" className="header_icon">
          <DialpadIcon fontSize="large" />
        </a>
        <a href="#" className="header_icon">
          <OfflineBoltIcon fontSize="large" />
        </a>

        <a href="#" className="header_icon">
          <NotificationsIcon fontSize="large" />
        </a>
        <div className="dropdown">
          <AccountCircleIcon className="dropdown" fontSize="large" />
          <div className="dropdown-content">
            <a href="#">
              <p>
                <SettingsIcon fontSize="large" /> Налаштування та
                конфіденційність
              </p>
            </a>

            <a href="#">
              <p>
                <HelpIcon fontSize="large" /> Допомога та підтримка
              </p>
            </a>

            <a href="#">
              <p>
                <Brightness2Icon fontSize="large" /> Display & Accessibility
              </p>
            </a>

            <a href="#">
              <p>
                <FeedbackIcon fontSize="large" /> Залишити відгук
              </p>
            </a>

            <a href="/" onClick={logout}>
              <p>
                <ExitToAppIcon fontSize="large" /> Вийти
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
    <LeftColumn></LeftColumn>
    </>
  );
}

export default FormAuth;
