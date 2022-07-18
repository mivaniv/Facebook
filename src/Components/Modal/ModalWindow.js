import React, {useState} from "react";
import "./ModalWindow.css";
import {auth} from "../FormAuth/firebase.js";
import {useNavigate, Link} from "react-router-dom";


function ModalWindow() {
    const navigate = useNavigate("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            if (auth.user) {
                auth.user.updateProfile({
                    displayName: firstName + " " + lastName,
                }).then((s) => {
                    navigate("/");
                })
            }
        })
            .catch((e) => {
                alert(e.message)
            })
    };

    return (
        <div>
            <div className="modalContainer">
                <div className="titleModalContainer">
                    <div className="textTitleModalContainer">
                        <h2 className="firstTextTitleModalContainer">Зареєструватись</h2>
                        <p className="secondTextTitleModalContainer">Це швидко і просто.</p>
                    </div>
                    <Link to={'/login'}>
                        <button className="buttonTitleModalContainer">✕</button>
                    </Link>

                </div>
                <form action="">
                    <div className="bodyModalContainer">
                        <div className="nameBodyModalContainer">
                            <input
                                onChange={(e) => setFirstName(e.target.value)}
                                type="text"
                                placeholder="Ім'я"
                                className="inputBodyModalContainer"
                                required
                            />
                            <input
                                onChange={(e) => setLastName(e.target.value)}
                                type="text"
                                placeholder="Прізвище"
                                className="inputBodyModalContainer"
                                required
                            />
                        </div>
                        <div className="passwordBodyModalContainer">
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Номер телефону або ел.пошта"
                                className="inputBodyModalContainer"
                                required
                            />
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Новий пароль"
                                className="inputBodyModalContainer"
                                required
                            />
                        </div>
                        <p className="subTitleBodyModalContainer">День народження</p>
                        <div className="selectBodyModalContainer">
                            <select
                                className="selectBodyModalContainerInner"
                                id="day"
                                name="day"
                            >
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                            <select
                                className="selectBodyModalContainerInner"
                                id="month"
                                name="month"
                            >
                                <option value="january">January</option>
                                <option value="february">February</option>
                                <option value="march">March</option>
                                <option value="april">April</option>
                                <option value="may">May</option>
                                <option value="june">June</option>
                                <option value="july">July</option>
                                <option value="august">August</option>
                                <option value="september">September</option>
                                <option value="october">October</option>
                                <option value="november">November</option>
                                <option value="december">December</option>
                            </select>
                            <select
                                className="selectBodyModalContainerInner"
                                id="year"
                                name="year"
                            >
                                <option value="1999">1999</option>
                                <option value="2000">2000</option>
                                <option value="2001">2001</option>
                                <option value="2002">2002</option>
                                <option value="2003">2003</option>
                                <option value="2004">2004</option>
                                <option value="2005">2005</option>
                                <option value="2006">2006</option>
                                <option value="2007">2007</option>
                                <option value="2008">2008</option>
                                <option value="2009">2009</option>
                                <option value="2010">2010</option>
                                <option value="2011">2011</option>
                                <option value="2012">2012</option>
                                <option value="2013">2013</option>
                                <option value="2014">2014</option>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                            </select>
                        </div>
                        <p className="subTitleBodyModalContainer">Стать</p>
                        <div className="selectBodyModalContainer">
                            <div className="selectBodyModalContainerInner">
                                <label>
                                    <b>Жінка</b>
                                </label>
                                <input type="radio" name="gender" value="female"/>
                            </div>
                            <div className="selectBodyModalContainerInner">
                                <label>
                                    <b>Чоловік</b>
                                </label>
                                <input type="radio" name="gender" value="male"/>
                            </div>
                            <div className="selectBodyModalContainerInner">
                                <label>
                                    <b>Інше</b>
                                </label>
                                <input type="radio" name="gender" value="custom"/>
                            </div>
                        </div>

                        <p className="textBottomModalContainer">
                            People who use our service may have uploaded your contact
                            information to Facebook. <a href="">Learn more.</a>
                        </p>
                        <p className="textBottomModalContainer">
                            By clicking Sign Up, you agree to our{" "}
                            <a href="#"> Terms, Data Policy</a> and
                            <a href="">Cookie</a>
                            Policy. You may receive SMS notifications from us and can opt out
                            at any time.
                        </p>
                        <div className="submitBottomModalContainer">
                            <button onClick={register} type="submit" className="submit">
                                Зареєструватись
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default ModalWindow;
