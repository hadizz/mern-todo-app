import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import DateCountdown from 'react-date-countdown-timer';
import Modal from 'react-bootstrap/Modal';
import { Element, Link } from 'react-scroll';

import { HTTP } from "./http/handler";
// Images import
import logo from './assets/images/logo.svg';
import box from './assets/images/box.svg';
import succesPower from './assets/images/suc.svg';
import errorPower from './assets/images/err.svg';
import closeIcon from "./assets/images/close.svg";
import phoneIcon from "./assets/images/phone.svg";
import socialIcon from "./assets/images/social.svg";
import instagramIcon from "./assets/images/instagram.svg";
import phoneMobileIcon from "./assets/images/phone-mobile.svg"
import Header from "./components/header";


String.prototype.toEnglishDigits = function () {
    var charCodeZero = '?'.charCodeAt(0);
    return parseInt(this.replace(/[?-?]/g, function (w) {
        return w.charCodeAt(0) - charCodeZero;
    }));
};

export default function () {

    const patternPhone = new RegExp('^(\\0)?9\\d{9}$');

    const [isFinished, setFinished] = useState(false);
    const [dataLetters, setDataLetters] = useState([]);
    const [trueAnswer, setTrueAnswer] = useState('لندو');

    const [faildChanceOne, setFaildChanceOne] = useState(false);
    const [faildChanceTwo, setFaildChanceTwo] = useState(false);
    const [trueMobile, setTrueMobile] = useState(true);
    const [answers, setAnswers] = useState(
        [
            {
                id: 1,
                isTrue: null,
                letter: ""
            },
            {
                id: 2,
                isTrue: null,
                letter: ""
            },
            {
                id: 3,
                isTrue: null,
                letter: ""
            },
            {
                id: 4,
                isTrue: null,
                letter: ""
            }
        ]
    );
    const [showModalError, setShowModalError] = useState(false);
    const [showModalSuccess, setShowModalSuccess] = useState(false);
    const [showSideMenu, setShowSideMenu] = useState(false);
    const [mobile, setMobile] = useState('');


    const handleCloseModalError = () => setShowModalError(false);
    const handleShowModalError = () => setShowModalError(true);
    const handleCloseModalSuccess = () => setShowModalSuccess(false);
    const handleShowModalSuccess = () => setShowModalSuccess(true);
    useEffect(() => {
        getLetters();
    }, []);

    const getLetters = () => {
        HTTP.get("letters")
            .then((res) => {
                setDataLetters(res.data);
            })
            .catch((error) => {
                console.error('Error is:', error);
            });
    }
    const checkValid = (e, item) => {
        e.preventDefault();
        const val = item.value;
        item && HTTP.post("request", { 'letter': val })
            .then((res) => {
                item.selected = res.data.position === 0 ? -1 : 1;
                let newArrAnswer = [...answers];
                if (res.data.position !== 0) {
                    newArrAnswer[res.data.position - 1].letter = item.value;
                    newArrAnswer[res.data.position - 1].isTrue = true;
                }
                setAnswers(newArrAnswer);
                if (res.data.chance === 1) {
                    setFaildChanceOne(true)
                }
                if (res.data.chance === 0) {
                    setFaildChanceTwo(true);
                    handleShowModalError();
                }
                if (res.data.winner) {
                    setTrueAnswer(answers[0].letter + answers[1].letter + answers[2].letter + answers[3].letter);
                    handleShowModalSuccess();
                }
            })
            .catch((error) => {
                // handleShowModalSuccess();
                handleShowModalError();
                console.error('Error is:', error);
            });

    }
    const sendMobile = () => {
        const phone = mobile.toEnglishDigits();
        if (patternPhone.test(parseInt(phone))) {
            HTTP.post("verify", { 'mobile': phone }).then(() => {
                setFinished(true);
            }).catch((error) => {
                console.error('Error is:', error);
            });
        } else {
            console.log("else");
            setTrueMobile(false)
        }
    }

    return (
        <div className="main-content no-padding">
            <Header />
            <div className="mobile header-mobile">
                <div className="hamburger-box" onClick={() => setShowSideMenu(!showSideMenu)}></div>
                <img src={logo} className="App-logo" alt="logo" />

                <div className={showSideMenu ? "_menu_holder show" : "_menu_holder"}
                    onClick={() => setShowSideMenu(false)}>
                    <nav className={showSideMenu ? "_menu show-menu" : "_menu"} onClick={console.log}>

                        <ul>
                            <li className="_logo_mobile">
                                <img src={logo} className="App-logo" alt="logo"
                                    onClick={() => setShowSideMenu(!showSideMenu)} />
                            </li>
                            <li><a className="_active"> خانه</a></li>
                            <span className="mobile">
                                <Link to="winner-game" spy={true} smooth={true} offset={0} duration={1000} delay={0}>

                                    <li>جوايز</li>
                                </Link>
                            </span>


                            <span className="mobile">
                                <Link to="start-game" spy={true} smooth={true} offset={0} duration={1000} delay={0}>
                                    <li> راهنما</li>
                                </Link>
                            </span>
                        </ul>

                    </nav>
                </div>

            </div>
            <Container fluid className="main-content no-padding">
                {/* Start Section One */}
                <Element name={"home"} className="section-one">
                    <div className="pt-custom">
                        <div className="row">
                            <div className="col-xl-5 " />
                            <div className="col-xl-7 col-lg-12">
                                <DateCountdown
                                    dateTo='April 19, 2020 00:00:00 GMT+03:30'
                                    // callback={() => alert('وقت تمام شد')}
                                    numberOfFigures={4}
                                    locales={[]}
                                    mostSignificantFigure="day"
                                    locales_plural={[]}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="description-section-one">
                        <Row>
                            <Col xl={5} />
                            <Col xl={7} lg={12}>

                                <h2 className={"primary-color"}>فصل نو شدن ايران‌رنتر!</h2>
                                <p>ايران‌رنتر قصد دارد همزمان با سالگرد پنجمين سال فعاليتش،</p>
                                <p className={"bold"}>در اول ارديبهشت ???? نام برند، لوگو و وب‌سايت خود را بازآفريني
                                    کند.</p>
                                <p>در اين مسابقه شرکت کنيد و نام جديد ايران‌رنتر را حدس بزنيد!</p>
                                <div>
                                    <div className="desktop">
                                        <Link to="start-game" spy={true} smooth={true} offset={1200} duration={1000}
                                            delay={0}>
                                            <Button className="btn-start-game-section">شروع کن!</Button>
                                        </Link>
                                    </div>
                                    <div className="mobile">
                                        <Link to="start-game" spy={true} smooth={true} offset={100} duration={1000}
                                            delay={0}>
                                            <Button className="btn-start-game-section">شروع کن!</Button>
                                        </Link>
                                    </div>

                                </div>

                            </Col>
                        </Row>

                    </div>
                </Element>

                {/* start section two */}
                <Container className=" desktop section-two">
                    <Row style={{ justifyContent: "space-evenly" }}>
                        <Col lg={6} md={7} sm={12}>
                            <Element name="winner-game" className="element - pl-3">
                                <p className="text-style-1">5</p>
                                <p className="text-style-2">جايزه</p>
                                <p>? ميليون</p>
                                <p className="text-style-3">توماني</p>
                                <div className="boxes">
                                    <div className="box box-dark" />
                                    <div className="box" />
                                    <div className="box" />
                                    <div className="box" />
                                </div>
                                <div className="description-section-two">
                                    به 5 برنده خوش‌شانسي که بتوانند اسم جديد ايران‌رنتر را
                                    درست پيش‌بيني کنند، به قيد قرعه ? جايزه ? ميليون توماني هديه داده مي‌شود!
                                </div>
                            </Element>
                        </Col>
                        <Col lg={4} md={5} sm={12} className="box-img">
                            <img src={box} alt="box" width={352} height={300} />
                        </Col>
                        <Col lg={12}>
                            <div className="desktop orbit-container">
                                <Element name="start-game" className="element">

                                    <div className="orbit">
                                        <div className="points" id="point-one" />
                                        <div className="points" id="point-two" />
                                        <div className="points" id="point-three" />
                                        <div className="orbit-inner">
                                            <div className="title-orbit">
                                                جايزه ? ميليوني براي جواب ? حرفي!
                                                <div className="boxes">
                                                    <div className="box box-dark" />
                                                    <div className="box" />
                                                    <div className="box" />
                                                    <div className="box" />
                                                </div>
                                            </div>

                                            <div className="description-orbit">
                                                نام جديد ايران‌رنتر از 4 حرف تشکيل شده است. شما هر روز، يک بار فرصت براي
                                                شرکت در مسابقه و در هر فرصت 2 چراغ روشن داريد. اگر حرفي را به اشتباه
                                                وارد کنيد، يک چراغ شما خاموش مي‌شود. در پايان اگر نام جديد ايران‌رنتر را
                                                به درستي حدس زديد، با ثبت تلفن همراه خود، مي‌توانيد در قرعه‌کشي ما شرکت
                                                کنيد!
                                            </div>
                                            <div className="buttons">
                                                {dataLetters.map((item, inx) => {
                                                    return <div
                                                        className={"button " + (item.selected !== null ? item.selected !== -1 ? "correct" : "incorrect" : "")}
                                                        key={inx}
                                                        onClick={(e) => checkValid(e, item)}>{item.value}</div>
                                                })}
                                            </div>
                                            <div className="box-answers">
                                                <div className="powerBtn">
                                                    <img src={faildChanceOne ? errorPower : succesPower} alt="power" />
                                                </div>
                                                <div className="powerBtn">
                                                    <img src={faildChanceTwo ? errorPower : succesPower} alt="power" />
                                                </div>

                                            </div>
                                            <div className="answers-place">
                                                {answers.map((answer, inx) => {
                                                    return <div className="answer" key={inx}>
                                                        {answer.letter}
                                                    </div>
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </Element>
                            </div>
                            <div className="mobile game">
                                <Element name="start-game" className="element">
                                    <div className="orbit-game">
                                        <div className="title-orbit">
                                            حدس بزن، جايزه ببر!
                                            <div className="boxes">
                                                <div className="box box-dark" />
                                                <div className="box" />
                                                <div className="box" />
                                                <div className="box" />
                                            </div>
                                        </div>

                                        <div className="description-orbit">
                                            نام جديد ايران‌رنتر از 4 حرف تشکيل شده است.
                                            شما در هر روز يک‌بار فرصت شرکت در اين مسابقه و در هر بار فرصت، دو چراغ روشن
                                            داريد. اگر حرفي را به اشتباه انتخاب کنيد، چراغ شما خاموش مي‌شود. در پايان
                                            اگر نام را به‌درستي حدس بزنيد، با وارد کردن شماره تلفن همراه خود، مي‌توانيد
                                            در قرعه‌کشي شرکت کنيد.
                                        </div>
                                        <div className="buttons">
                                            {dataLetters.map((item, inx) => {
                                                return <div
                                                    className={"button " + (item.selected !== null ? item.selected !== -1 ? "correct" : "incorrect" : "")}
                                                    key={inx} onClick={(e) => checkValid(e, item)}>{item.value}</div>
                                            })}
                                        </div>
                                        <div className="box-answers">
                                            <div className="powerBtn">
                                                <img src={faildChanceOne ? errorPower : succesPower} alt="power" />
                                            </div>
                                            <div className="powerBtn">
                                                <img src={faildChanceTwo ? errorPower : succesPower} alt="power" />
                                            </div>

                                        </div>
                                        <div className="answers-place">
                                            {answers.map((answer, inx) => {
                                                return <div className="answer" key={inx}>
                                                    {answer.letter}
                                                </div>
                                            })}
                                        </div>
                                    </div>
                                </Element>
                            </div>


                        </Col>

                    </Row>
                </Container>


                <div className="section-two mobile">
                    <Row>
                        <Col lg={7} sm={12} className="box-two">
                            <Element name="winner-game" className="element">
                                <p className="primary-color">? جايزه</p>
                                <p className="primary-color">? ميليون توماني!</p>
                                <div className="boxes">
                                    <div className="box box-dark" />
                                    <div className="box" />
                                    <div className="box" />
                                    <div className="box" />
                                </div>
                                <div className="description-section-two">
                                    به ? برنده خوش‌شانس که نام جديد ايران‌رنتر را درست حدس بزنند، به قيد قرعه ? جايزه ?
                                    ميليون توماني اهدا مي‌شود!
                                </div>
                            </Element>
                        </Col>
                        <Col lg={5} sm={12} className="box-img">
                            <img src={box} alt="box" />
                        </Col>
                        <Col sm={12}>
                            <Element name="start-game" className="element">
                                <div className=" game" id={"game"}>
                                    <div className="orbit-game">
                                        <div className="title-orbit">
                                            جايزه ? ميليوني براي جواب ? حرفي!
                                            <div className="boxes">
                                                <div className="box box-dark" />
                                                <div className="box" />
                                                <div className="box" />
                                                <div className="box" />
                                            </div>
                                        </div>

                                        <div className="description-orbit">
                                            نام جديد ايران‌رنتر از 4 حرف تشکيل شده است.
                                            شما در هر روز يک‌بار فرصت شرکت در اين مسابقه و در هر بار فرصت، دو چراغ روشن
                                            داريد. اگر حرفي را به اشتباه انتخاب کنيد، چراغ شما خاموش مي‌شود. در پايان
                                            اگر نام را به‌درستي حدس بزنيد، با وارد کردن شماره تلفن همراه خود، مي‌توانيد
                                            در قرعه‌کشي شرکت کنيد.
                                        </div>
                                        <div className="buttons">
                                            {dataLetters.map((item, inx) => {
                                                return <div
                                                    className={"button " + (item.selected !== null ? item.selected !== -1 ? "correct" : "incorrect" : "")}
                                                    key={inx} onClick={(e) => checkValid(e, item)}>{item.value}</div>
                                            })}
                                        </div>
                                        <div className="box-answers">
                                            <div className="powerBtn">
                                                <img src={faildChanceOne ? errorPower : succesPower} alt="power" />
                                            </div>
                                            <div className="powerBtn">
                                                <img src={faildChanceTwo ? errorPower : succesPower} alt="power" />
                                            </div>

                                        </div>
                                        <div className="answers-place">
                                            {answers.map((answer, inx) => {
                                                return <div className="answer" key={inx}>
                                                    {answer.letter}
                                                </div>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </Element>
                        </Col>
                    </Row>
                </div>


                <div className=" desktop last-box">
                    <footer className="footer">
                        <Container>
                            <Row>
                                <Col lg={6} sm={12} className={"pr-5"}>
                                    <Row>
                                        <Col lg={12} className="section-footer">
                                            <img src={phoneIcon} alt="phone" style={{ marginRight: 'auto' }} />
                                            <p>تماس با ايران‌رنتر</p>
                                            <p className="phone">???-????????</p>
                                        </Col>

                                    </Row>
                                </Col>
                                <Col lg={6} sm={12} className={"pl-5 section-footer"}>
                                    <img src={socialIcon} alt="social" />
                                    <p>ايران رنتر در اينستاگرام</p>
                                    <a href={"https://instagram.com/iranrenter/"} className="insta-bg"
                                        target={"_blank"}>
                                        <img src={instagramIcon} alt="insta" />
                                        اينستاگرام
                                    </a>
                                </Col>
                            </Row>
                        </Container>
                    </footer>
                    <div className="footer-copy">
                        <p>
                            کليه حقوق اين سايت متعلق به شرکت ايران‌رنتر مي باشد
                            © Copyrights - Iranrenter Co. - 1394
                        </p>
                    </div>
                </div>
                <div className=" mobile last-box">
                    <footer className="footer">
                        <Container>
                            <Row>
                                <Col sm={12} className="flex-display">
                                    <div className="bg-phone">
                                        <img src={phoneMobileIcon} alt="phone" />
                                    </div>
                                    تماس با ايران‌رنتر
                                    <span className="phone">???-????????</span>
                                </Col>
                                <Col sm={12} className="flex-display">
                                    <a href={"https://instagram.com/iranrenter/"} className="insta-bg"
                                        target={"_blank"}>
                                        <img src={instagramIcon} alt="insta" />
                                    </a>
                                    ايران رنتر در اينستاگرام
                                </Col>

                            </Row>
                        </Container>
                    </footer>
                    <div className="footer-copy">
                        <p>
                            کليه حقوق اين سايت متعلق به شرکت ايران‌رنتر مي باشد

                        </p>
                        <p>
                            © Copyrights - Iranrenter Co. - 1394
                        </p>
                    </div>
                </div>

            </Container>

            <Modal
                show={showModalError}
                onHide={handleCloseModalError}
                className="modal-error"
                size="lg"
            >
                <a className="close-icon" onClick={handleCloseModalError}><img src={closeIcon} width="24" height="24" /></a>
                <Modal.Body>
                    <div className="content-modal-error">
                        <p>فرصت امروز شما تمام شده است.</p>
                        <p> مي‌توانيد فردا مجددا در مسابقه شرکت کنيد.</p>
                        <div className="btn-ok-modal" onClick={handleCloseModalError}>بسيار خوب</div>
                    </div>
                </Modal.Body>

            </Modal>
            <Modal
                show={showModalSuccess}
                onHide={handleCloseModalSuccess}
                className="modal-success" size="lg">
                <a className="close-icon" onClick={handleCloseModalSuccess}><img src={closeIcon} width="24"
                    height="24" /></a>
                <Modal.Body>
                    <div className="content-modal-success">
                        {isFinished ? (
                            <React.Fragment>

                                <div className="img-modal-success" />
                                <p> شماره تلفن شما با موفقيت ثبت شد.</p>

                            </React.Fragment>
                        ) : (
                                <React.Fragment>

                                    <div className="img-modal">تبريک</div>
                                    <h3>
                                        جواب درست،
                                    <span className="orange-answer"> {trueAnswer} </span>
                                    مي باشد.
                                </h3>
                                    <p> جهت شرکت در قرعه‌کشي، شماره تلفن همراه خود را وارد کنيد.</p>
                                    <form onSubmit={sendMobile}>

                                        <input type="text" className="phone-box" value={mobile}
                                            onChange={(e) => setMobile(e.target.value)} />
                                        <h6 className="text-sm-center red">
                                            {trueMobile ? "" : "شماره موبايل نامعتبر است!"}
                                        </h6>
                                        <div className="btn-ok-modal" onClick={sendMobile}> ثبت شماره تلفن</div>
                                    </form>

                                </React.Fragment>
                            )}
                    </div>
                </Modal.Body>

            </Modal
            >
        </div>
    );
}
