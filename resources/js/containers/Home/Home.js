import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Col, Container, Row, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Owl from "react-owl";

import "./Home.css";
import PresentationalContainer from "../../components/UI/PresentationalContainer/PresentationalContainer";
import * as actions from "../../store/actions";
import HomeCarousel from "./Carousel/Carousel";
import BetweenButton from "../../components/UI/Button/BetweenButton/BetweenButton";

import UnderCarouselBlock from "./UnderCarouselBlock/UnderCarouselBlock";
import AngledBlock from "./AngledBlock/AngledBlock";
import WorkBlock from "./WorkBlock/WorkBlock";
import AppBlock from "./AppBlock/AppBlock";
import CustomerBlock from "./CustomerBlock/CustomerBlock";

import SoftImage from "../../../../public/images/soft image.png";
import FridolinBruno from "../../../../public/images/man-in-suit2@2x.png";
import JaffGodwill from "../../../../public/images/images@2x.png";
import SamuelRolande from "../../../../public/images/33a762719ceb41b28820b45364c02eec@2x.png";

class Home extends Component {
    componentDidMount() {
        if (this.props.auth.authPage) this.props.onAuthPageOff();
        if (this.props.auth.userPage) this.props.onUserPageOff();
    }

    render() {
        return (
            <Col xs={12} className="Home p-0">
                <div className="position-relative full-height-app">
                    <div className="position-absolute h-100 w-100">
                        <div
                            id="banner"
                            className="text-white w-100 mx-auto text-center text-sm-left"
                        >
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex">
                                    <div className="pr-4">
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
                                        <div className="display-2 title">
                                            <span className="text-300">We</span>
                                            <br />
                                            <span className="text-700">
                                                Develop
                                            </span>
                                        </div>
                                        <div className="display-3 subtitle text-300">
                                            Web application and
                                            <br />
                                            Softwares at{" "}
                                            <span className="text-700">
                                                low cost
                                            </span>
                                        </div>
                                        <div className="mt-5">
                                            <BetweenButton
                                                size="lg"
                                                className="mr-3 bg-scarlet-gradient border-0 text-montserrat-alt text-500 py-3 px-4 text-x-large"
                                                color="dark"
                                                icon="arrow-alt-circle-right"
                                                iconColor="yellow"
                                            >
                                                Get a quote
                                            </BetweenButton>
                                            <BetweenButton
                                                size="lg"
                                                color="orange"
                                                icon="arrow-alt-circle-right"
                                                className="text-montserrat-alt text-500 py-3 px-4 text-x-large"
                                            >
                                                View portfolio
                                            </BetweenButton>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-40 overflow-hidden">
                                    <img
                                        src={SoftImage}
                                        className="img-fluid"
                                        style={{ transform: 'scale(1.2)', transformOrigin: 'center' }}
                                    />
                                </div>
                            </div>
                        </div>
                        <HomeCarousel />
                    </div>
                </div>

                <PresentationalContainer user>
                    <Container className="position-relative" style={{ transform: "translateY(-40%) scale(1)", transformOrigin: 'center', zIndex: 11 }}>
                        <div className="d-flex">
                            <div className="bg-darkblue text-center text-white flex-grow-1">
                                <div className="pb-2 pt-3 text-700 border-bottom border-thin border-white-20 position-relative">
                                    February - 2020
                                <FontAwesomeIcon icon="circle" className="position-absolute text-yellow text-xx-small"
                                        style={{
                                            bottom: 0,
                                            transform: "translateY(50%)",
                                            left: 16
                                        }}
                                    />
                                </div>

                                <div className="py-2 px-5">
                                    <h1 className="text-700">05</h1>
                                    <div>Monday</div>
                                </div>
                            </div>

                            <div className="">
                                <Row className="m-0">
                                    <UnderCarouselBlock
                                        border
                                        icon="desktop"
                                        title="We Design"
                                    >
                                        Helping you in your project design is good
                                        for us
                                </UnderCarouselBlock>
                                    <UnderCarouselBlock
                                        border
                                        icon="business-time"
                                        title="We Advice"
                                    >
                                        What you think is important to us. Share
                                        with us and we could give some advice
                                </UnderCarouselBlock>
                                    <UnderCarouselBlock
                                        border
                                        icon="pencil-ruler"
                                        title="We Prototype"
                                    >
                                        Offering you the best project is our goal.
                                        Ask for a prototype.
                                </UnderCarouselBlock>
                                    <UnderCarouselBlock
                                        icon="code"
                                        title="We Develop"
                                    >
                                        Get the best software from us and tell us
                                        what you think on us.
                                </UnderCarouselBlock>
                                </Row>
                            </div>
                        </div>
                    </Container>
                </PresentationalContainer>

                <PresentationalContainer user>
                    <Row className="align-items-center position-relative">
                        <div className="position-absolute" style={{ top: '50%', left: 0, transform: 'translate(-50%, -50%) scale(.8)' }}>
                            <div className="rounded-circle embed-responsive embed-responsive-1by1 bg-green d-flex justify-content-center align-items-center" style={{ width: 300 }}>
                                <div className="rounded-circle embed-responsive embed-responsive-1by1 bg-yellow shadow d-flex justify-content-center align-items-center" style={{ width: 182, height: 182 }}>
                                    <div className="rounded-circle embed-responsive embed-responsive-1by1 bg-light shadow" style={{ width: 114, height: 114 }}></div>
                                </div>
                            </div>
                        </div>
                        <Col lg={4} className="offset-lg-1">
                            <div className="text-large">Services</div>
                            <h1 className="text-scarlet text-montserrat-alt text-700">
                                Our features &
                            </h1>
                            <h3>Services.</h3>
                            <p className="text-300 mt-4">
                                Briluce services gives you the best results as per your requirements. We are committed into providing the best web development services to all our customers. We always want our customers to give nice feedback on our works. That's the main reason why you should take some time and check some of our works & services.
                            </p>
                            <div className="mt-5">
                                <BetweenButton
                                    color="pink"
                                    icon="arrow-alt-circle-right"
                                    pill
                                    className="text-montserrat-alt text-500"
                                >
                                    All Services
                                </BetweenButton>
                            </div>
                        </Col>

                        <Col lg={7}>
                            <Row>
                                <AngledBlock iconColor="gray" stackColor="pink" bgColor="white" color="dark" title="UI/UX Design">We provide quality user interface and user experience. Giving that our customer satisfaction is important to us, we always think above our client expectation, offering to all our customers, the best matching user experience design.</AngledBlock>
                                <AngledBlock iconColor="white" inverse stackColor="darkblue" bgColor="pink" color="white" title="Consultancy">We provide quality user interface and user experience. Giving that our customer satisfaction is important to us, we always think above our client expectation, offering to all our customers, the best matching user experience design.</AngledBlock>
                                <AngledBlock iconColor="white" stackColor="orange" bgColor="green" color="white" title="Web & mobile Apps Dev">We provide quality user interface and user experience. Giving that our customer satisfaction is important to us, we always think above our client expectation, offering to all our customers, the best matching user experience design.</AngledBlock>
                                <AngledBlock iconColor="gray" stackColor="pink" bgColor="white" color="dark" title="Training Courses">We provide quality user interface and user experience. Giving that our customer satisfaction is important to us, we always think above our client expectation, offering to all our customers, the best matching user experience design.</AngledBlock>
                            </Row>
                        </Col>
                    </Row>
                </PresentationalContainer>

                <PresentationalContainer user bg="light" innerClassName="pt-5">
                    <Row className="align-items-center">
                        <Col lg={7} className="p-5">
                            <Row>
                                <Col xs={10}>
                                    <Row className="justify-content-center align-items-center">
                                        <WorkBlock src={SoftImage} top="20%" bgColor="pink" title="Graphic Design" color="white">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in</WorkBlock>
                                        <WorkBlock src={SoftImage} top="-20%" left="-10%" title="Mobile Apps">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in</WorkBlock>
                                        <WorkBlock src={SoftImage} top="10%" left="10%" title="Web Apps">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in</WorkBlock>
                                        <WorkBlock src={SoftImage} top="-30%" bgColor="green" title="Ui & Ux" color="white">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in</WorkBlock>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={5} className="px-5">
                            <h1 className="text-scarlet text-montserrat-alt text-700">
                                Our Works &
                            </h1>
                            <h3>Portfolio.</h3>
                            <p className="text-300 mt-4">
                                Briluce services gives you the best results as per your requirements. We are committed into providing the best web development services to all our customers. We always want our customers to give nice feedback on our works. That's the main reason why you should take some time and check some of our works & services.
                            </p>
                            <div className="mt-5">
                                <BetweenButton color="pink" icon="arrow-alt-circle-right" pill className="text-montserrat-alt text-500 mr-4">
                                    All Services
                                </BetweenButton>
                                <BetweenButton color="orange" icon="arrow-alt-circle-right" pill className="text-montserrat-alt text-500">
                                    Get a quote
                                </BetweenButton>
                            </div>
                        </Col>
                    </Row>
                </PresentationalContainer>

                <PresentationalContainer user bg="light" innerClassName="py-5 border-top border-black-20 mb-5" style={{ paddingRight: '8%', paddingLeft: '8%' }}>
                    <h1 className="text-pink text-montserrat-alt text-700">
                        Our Apps &
                    </h1>
                    <h3>Softwares.</h3>
                    <p className="text-300 mt-4">
                        Briluce services gives you the best results as per your requirements. We are committed into providing the best web development services to all our customers. We always want our customers to give nice feedback on our works. That's the main reason why you should take some time and check some of our works & services.
                    </p>
                    <Row className="py-5 mb-5">
                        <AppBlock icon="hospital" title="Pharmacy Management System">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in</AppBlock>
                        <AppBlock icon="shopping-basket" title="Sales ERP Management System">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in</AppBlock>
                        <AppBlock icon="hospital" title="Hospital Management System + Website">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in</AppBlock>
                        <AppBlock icon="hospital-symbol" title="Hospital Management System + Website">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in</AppBlock>
                    </Row>
                    <div className="text-center">
                        <BetweenButton pill color="pink" icon="arrow-alt-circle-right" className="text-montserrat-alt">
                            View List
                        </BetweenButton>
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
                        <Col sm={10} md={8} lg={6}>
                            <p>
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

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onAuthPageOff: () => dispatch(actions.authPageOff()),
    onUserPageOff: () => dispatch(actions.userPageOff())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
