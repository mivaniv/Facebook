import "./HomeHeader.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link, useNavigate } from "react-router-dom";
import fb from "./images/5968764.png";
import { auth } from "../FormAuth/firebase";
import HelpIcon from "@material-ui/icons/Help";
import SettingsIcon from "@material-ui/icons/Settings";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import FeedbackIcon from "@material-ui/icons/Feedback";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import NotificationsIcon from "@material-ui/icons/Notifications";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import DialpadIcon from "@material-ui/icons/Dialpad";
import HomeIcon from "@material-ui/icons/Home";



import PeopleIcon from "@material-ui/icons/People";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import mark from "./images/mark.jpeg";

import Main from "../Main/Main"





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

      <section className="icons_center">
        <div className="header_icon">
          <HomeIcon color="disabled" style={{ fontSize: 45 }} />
        </div>
        <div className="header_icon">
          <SmartDisplayIcon color="disabled" style={{ fontSize: 45 }} />
        </div>
        <div className="header_icon">
          <PeopleIcon color="disabled" style={{ fontSize: 45 }} />
        </div>

        <div className="header_icon">
          <AutoAwesomeMosaicIcon color="disabled" style={{ fontSize: 45 }} />
        </div>
      </section>

      <section className="icon_wraper">
        <div className="header_icon-right">
          <DialpadIcon style={{ fontSize: 38 }} />
        </div>

        <div className="header_icon-right">
          <OfflineBoltIcon style={{ fontSize: 40 }} />
        </div>

        <div className="header_icon-right">
          <NotificationsIcon style={{ fontSize: 40 }} />
        </div>

        <div className="dropdown">
          <div className="avatar_wraper">
            <img src={mark} alt="" className="avatar_picture" />
          </div>

          <div className="dropdown-content">
            <div href="#" className="avatar_name">
              <img src={mark} alt="" className="avatar_picture" />
              <h3>Mark Zuckerberg</h3>
            </div>

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
    <Main userPic={mark}></Main>
    </>
  );
}

export default FormAuth;
