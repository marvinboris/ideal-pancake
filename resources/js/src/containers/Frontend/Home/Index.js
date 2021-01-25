import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faBusinessTime, faCircle, faCode, faDesktop, faHome, faHospital, faHospitalSymbol, faPencilRuler, faShoppingBag, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

import "./Home.css";

import PresentationalContainer from "../../../components/UI/PresentationalContainer/PresentationalContainer";
import HomeCarousel from "./Carousel/Carousel";
import BetweenButton from "../../../components/UI/Button/BetweenButton/BetweenButton";
import AbsoluteButton from "../../../components/UI/Button/AbsoluteButton/AbsoluteButton";

import UnderCarouselBlock from "./UnderCarouselBlock/UnderCarouselBlock";
import AngledBlock from "./AngledBlock/AngledBlock";
import WorkBlock from "./WorkBlock/WorkBlock";
import AppBlock from "./AppBlock/AppBlock";
import CustomerBlock from "./CustomerBlock/CustomerBlock";

import SoftImage from "../../../../../../public/images/soft image.png";
import FridolinBruno from "../../../../../../public/images/man-in-suit2@2x.png";
import JaffGodwill from "../../../../../../public/images/images@2x.png";
import SamuelRolande from "../../../../../../public/images/33a762719ceb41b28820b45364c02eec@2x.png";

class Home extends Component {
    render() {
        const date = new Date();
        const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][date.getMonth()];
        const year = date.getFullYear();
        const day = date.getDate();
        const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];

        return (
            <Col xs={12} className="Home p-0">
                <div className="position-relative full-height-app">
                    <div className="position-absolute h-100 w-100">
                        <div id="banner" className="text-white w-100 mx-auto text-center text-sm-left">
                            <div className="d-xl-flex justify-content-between align-items-center">
                                <div className="d-xl-flex">
                                    <div className="pr-4 d-none d-xl-flex">
                                        <div
                                            className="position-relative bg-orange"
                                            style={{
                                                width: 13,
                                                height: 254,
                                                top: 20
                                            }}
                                        >
                                            <div
                                                className="position-absolute bg-orange-50"
                                                style={{
                                                    width: 21,
                                                    height: 144,
                                                    top: 40,
                                                    right: 32
                                                }}
                                            ></div>
                                            <div
                                                className="position-absolute bg-green"
                                                style={{
                                                    width: 75,
                                                    height: 40,
                                                    right: 0,
                                                    top: 62
                                                }}
                                            ></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="display-2 d-none d-xl-block title">
                                            <span className="text-300">We</span>
                                            <br />
                                            <span className="text-700">
                                                Develop
                                            </span>
                                        </div>
                                        <div className="display-4 d-xl-none text-center title">
                                            <span className="text-300">We</span>
                                            <br />
                                            <span className="text-700">
                                                Develop
                                            </span>
                                        </div>
                                        <div className="display-4 d-none d-xl-block subtitle text-300">
                                            Web application and
                                            <br />
                                            Softwares at{" "}
                                            <span className="text-700">
                                                low cost
                                            </span>
                                        </div>
                                        <div className="text-xx-large text-center d-xl-none subtitle text-300">
                                            Web application and
                                            <br />
                                            Softwares at{" "}
                                            <span className="text-700">
                                                low cost
                                            </span>
                                        </div>
                                        <div className="mt-5 d-none d-xl-block">
                                            <BetweenButton size="xl" color="dark" icon={faArrowAltCircleRight} iconColor="yellow"
                                                className="mr-3 bg-scarlet-gradient border-0 text-montserrat-alt text-400 py-3 px-4 text-x-large" >
                                                Get a quote
                                            </BetweenButton>
                                            <BetweenButton size="xl" color="orange" icon={faArrowAltCircleRight}
                                                className="text-montserrat-alt text-400 py-3 px-4 text-x-large">
                                                View portfolio
                                            </BetweenButton>
                                        </div>
                                        <div className="mt-5 text-center d-xl-none">
                                            <Row className="justify-content-center">
                                                <Col xs={8}>
                                                    <BetweenButton color="dark" icon={faArrowAltCircleRight} iconColor="yellow" block
                                                        className="mb-3 mb-sm-0 bg-scarlet-gradient border-0 text-montserrat-alt text-400 py-2 px-3 text-large">
                                                        Get a quote
                                                    </BetweenButton>{' '}
                                                    <BetweenButton color="orange" icon={faArrowAltCircleRight} block
                                                        className="text-montserrat-alt text-400 py-2 px-3 text-large">
                                                        View portfolio
                                                    </BetweenButton>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-40 d-none d-xl-block overflow-hidden">
                                    <img src={SoftImage} className="img-fluid" style={{ transform: 'scale(1.2)', transformOrigin: 'center' }} />
                                </div>
                            </div>
                        </div>
                        <HomeCarousel>
                            <div className="bg-transparent d-none d-xl-inline circle-carousel-indicator rounded-circle border border-3 border-yellow position-absolute" />
                        </HomeCarousel>
                    </div>
                </div>

                <PresentationalContainer user>
                    <Container className="position-relative d-none d-xl-block" style={{ transform: "translateY(-40%) scale(1)", transformOrigin: 'center', zIndex: 11 }}>
                        <Row className="justify-content-center">
                            <Col xl={11}>
                                <div className="d-flex">
                                    <div className="bg-darkblue text-center text-white flex-grow-1">
                                        <div className="pb-2 pt-3 text-700 border-bottom border-thin border-white-20 position-relative">
                                            {month} - {year}
                                            <FontAwesomeIcon icon={faCircle} className="position-absolute text-yellow text-xx-small" style={{
                                                bottom: 0,
                                                transform: "translateY(50%)",
                                                left: 16
                                            }} />
                                        </div>

                                        <div className="py-2 px-5">
                                            <h1 className="text-700">{day}</h1>
                                            <div>{weekDay}</div>
                                        </div>
                                    </div>

                                    <div>
                                        <Row className="m-0">
                                            <UnderCarouselBlock border icon={faDesktop} title="We Design">
                                                Helping you in your project design is good
                                                for us
                                            </UnderCarouselBlock>
                                            <UnderCarouselBlock border icon={faBusinessTime} title="We Advice">
                                                What you think is important to us. Share
                                                with us and we could give some advice
                                            </UnderCarouselBlock>
                                            <UnderCarouselBlock border icon={faPencilRuler} title="We Prototype">
                                                Offering you the best project is our goal.
                                                Ask for a prototype.
                                            </UnderCarouselBlock>
                                            <UnderCarouselBlock icon={faCode} title="We Develop">
                                                Get the best software from us and tell us
                                                what you think on us.
                                            </UnderCarouselBlock>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </PresentationalContainer>

                <PresentationalContainer user>
                    <Row className="align-items-center position-relative">
                        <div className="d-none d-xl-block position-absolute" style={{ top: '50%', left: 0, transform: 'translate(-50%, -50%) scale(.8)' }}>
                            <div className="rounded-circle embed-responsive embed-responsive-1by1 bg-green d-flex justify-content-center align-items-center" style={{ width: 300 }}>
                                <div className="rounded-circle embed-responsive embed-responsive-1by1 bg-yellow shadow d-flex justify-content-center align-items-center" style={{ width: 182, height: 182 }}>
                                    <div className="rounded-circle embed-responsive embed-responsive-1by1 bg-light shadow" style={{ width: 114, height: 114 }}></div>
                                </div>
                            </div>
                        </div>
                        <Col xl={4} className="offset-xl-1">
                            <div className="h3 m-0">Services</div>
                            <h1 className="text-scarlet text-montserrat-alt text-700">
                                Our features &
                            </h1>
                            <h2>Services.</h2>
                            <p className="text-300 text-large mt-4">
                                Briluce services gives you the best results as per your requirements. We are committed into providing the best web development services to all our customers. We always want our customers to give nice feedback on our works. That's the main reason why you should take some time and check some of our works & services.
                            </p>
                            <div className="mt-5">
                                <AbsoluteButton color="pink" icon={faArrowAltCircleRight} pill>
                                    All Services
                                </AbsoluteButton>
                            </div>
                        </Col>

                        <Col xl={7}>
                            <Row>
                                <AngledBlock number="01" iconColor="gray" stackColor="pink" bgColor="white" color="dark" title="UI/UX Design">In order to limit the failure of any redesign project, we design for you prototypes that fit your needs before development of the said project.</AngledBlock>
                                <AngledBlock number="03" iconColor="white" inverse stackColor="darkblue" bgColor="pink" color="white" title="Consultancy">We provide quality user interface and user experience. Giving that our customer satisfaction is important to us, we always think above our client expectation, offering to all our customers, the best matching user experience design.</AngledBlock>
                                <AngledBlock number="02" iconColor="white" stackColor="orange" bgColor="green" color="white" title="Web & mobile Apps Dev">We develop quality and dynamic Web applications for you.</AngledBlock>
                                <AngledBlock number="04" iconColor="gray" stackColor="pink" bgColor="white" color="dark" title="Training Courses">We provide quality user interface and user experience. Giving that our customer satisfaction is important to us, we always think above our client expectation, offering to all our customers, the best matching user experience design.</AngledBlock>
                            </Row>
                        </Col>
                    </Row>
                </PresentationalContainer>

                <PresentationalContainer user bg="light" innerClassName="pt-5">
                    <Row className="align-items-center">
                        <Col xl={7} className="p-5">
                            <Row>
                                <Col xl={10}>
                                    <Row className="justify-content-center align-items-center">
                                        <WorkBlock src={SoftImage} top="20%" bgColor="pink" title="Graphic Design" color="white">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in</WorkBlock>
                                        <WorkBlock src={SoftImage} top="-20%" left="-10%" title="Mobile Apps">Benefit from Mobile friendly applications on your various mobile devices.</WorkBlock>
                                        <WorkBlock src={SoftImage} top="10%" left="10%" title="Web Apps">We develop quality and dynamic Web applications for you.</WorkBlock>
                                        <WorkBlock src={SoftImage} top="-30%" bgColor="green" title="Ui & Ux" color="white">In order to limit the failure of any redesign project, we design for you prototypes that fit your needs before development of the said project.</WorkBlock>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>

                        <Col xl={5} className="px-5">
                            <h1 className="text-scarlet text-montserrat-alt text-700">
                                Our Works &
                            </h1>
                            <h2>Portfolio.</h2>
                            <p className="text-400 mt-4 text-large">
                                Briluce services gives you the best results as per your requirements. We are committed into providing the best web development services to all our customers. We always want our customers to give nice feedback on our works. That's the main reason why you should take some time and check some of our works & services.
                            </p>
                            <div className="mt-5">
                                <AbsoluteButton color="pink" icon={faArrowAltCircleRight} pill className="text-montserrat-alt text-400 mr-4">
                                    All Services
                                </AbsoluteButton>
                                <AbsoluteButton color="orange" icon={faArrowAltCircleRight} pill className="text-montserrat-alt text-400">
                                    Get a quote
                                </AbsoluteButton>
                            </div>
                        </Col>
                    </Row>
                </PresentationalContainer>

                <PresentationalContainer user bg="light" innerClassName="py-5 border-top border-black-20 mb-5" style={{ paddingRight: '8%', paddingLeft: '8%' }}>
                    <h1 className="text-pink text-montserrat-alt text-700">
                        Our Apps &
                    </h1>
                    <h3>Softwares.</h3>
                    <Row>
                        <Col xl={5} xl={7} md={9} sm={11}>
                            <p className="text-400 text-large mt-4">
                                Briluce services gives you the best results as per your requirements. We are committed into providing the best web development services to all our customers. We always want our customers to give nice feedback on our works. That's the main reason why you should take some time and check some of our works & services.
                            </p>
                        </Col>
                    </Row>
                    <Row className="py-5 mb-5">
                        <AppBlock icon={faHospital} title="Pharmacy Management System">With its modern billing system, manage your price policy and optimize your productivity.</AppBlock>
                        <AppBlock icon={faShoppingBasket} title="Sales ERP Management System">With a website made of modern interfaces, attractive and easy to use, automate your tasks and multiply your e-commerce earnings.</AppBlock>
                        <AppBlock icon={faHome} title="Restaurant Management System">Manage efficiently your company thanks to our Restaurant Management System.</AppBlock>
                        <AppBlock icon={faShoppingBag} title="E-commerce Management System">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in</AppBlock>
                    </Row>
                    <div className="text-center">
                        <AbsoluteButton pill size="xl" color="pink" icon={faArrowAltCircleRight} className="text-montserrat-alt">
                            View List
                        </AbsoluteButton>
                    </div>
                </PresentationalContainer>

                <Container className="pt-5 border-top border-black-20" />

                <PresentationalContainer user bg="light" style={{ paddingRight: '8%', paddingLeft: '8%' }}>
                    <div className="text-center mb-5">
                        <h1 className="text-pink text-montserrat-alt text-700">
                            What our customers say
                        </h1>
                        <h3>On our softwares.</h3>
                    </div>
                    <Row className="justify-content-center text-center">
                        <Col sm={10} md={8} xl={6}>
                            <p className="text-large">
                                Briluce services gives you the best results as per your requirements. We are committed into providing the best web development services to all our customers . We always want our customers to give nice
                            </p>
                        </Col>
                        <Row className="pt-5 my-5">
                            <CustomerBlock title="Awesome company. alility software" mark={4} name="FRIDOLIN BRUNO" src={FridolinBruno}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in is jos jomes jiooes n oes oh seri os oifeuo s oifeso</CustomerBlock>
                            <CustomerBlock title="Awesome company. alility software" mark={5} flag="ca" name="JAFF GODWILL. Y" active src={JaffGodwill}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in is jos jomes jiooes n oes oh seri os oifeuo s oifeso</CustomerBlock>
                            <CustomerBlock title="Awesome company. alility software" mark={5} name="SAMUEL ROLANDE" src={SamuelRolande}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in is jos jomes jiooes n oes oh seri os oifeuo s oifeso</CustomerBlock>
                        </Row>
                    </Row>
                </PresentationalContainer>
            </Col>
        );
    }
}

export default Home;
