import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Col, Container, Row, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Owl from "react-owl";

import "./Home.css";
import SeparatorLine from "../../components/UI/SeparatorLine/SeparatorLine";
import Title from "../../components/UI/Titles/Title/Title";
import PresentationalContainer from "../../components/UI/PresentationalContainer/PresentationalContainer";
import * as actions from "../../store/actions";
import HomeCarousel from "./Carousel/Carousel";
import BetweenButton from "../../components/UI/Button/BetweenButton/BetweenButton";

import SoftImage from "../../../../public/images/soft image.png";
import UnderCarouselBlock from "./UnderCarouselBlock/UnderCarouselBlock";
import AngledBlock from "./AngledBlock/AngledBlock";

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
                                        <div className="display-3 title">
                                            <span className="text-300">We</span>
                                            <br />
                                            <span className="text-700">
                                                Develop
                                            </span>
                                        </div>
                                        <div className="display-4 subtitle text-300">
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
                                                className="mr-3 bg-scarlet-gradient"
                                                color="black"
                                                icon="arrow-alt-circle-right"
                                                iconColor="yellow"
                                            >
                                                Get a quote
                                            </BetweenButton>
                                            <BetweenButton
                                                size="lg"
                                                color="orange"
                                                icon="arrow-alt-circle-right"
                                            >
                                                View portfolio
                                            </BetweenButton>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-50">
                                    <img
                                        src={SoftImage}
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                        <HomeCarousel />
                    </div>
                </div>
                <Container
                    className="position-relative"
                    style={{ transform: "translateY(-40%)", zIndex: 11 }}
                >
                    <div className="d-flex">
                        <div className="bg-darkblue text-center text-white flex-grow-1">
                            <div className="pb-2 pt-3 text-700 border-bottom border-thin border-white-20 position-relative">
                                February - 2020
                                <FontAwesomeIcon
                                    icon="circle"
                                    className="position-absolute text-yellow text-xx-small"
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
                <PresentationalContainer user>
                    <Row className="align-items-center">
                        <Col lg={5}>
                            <div className="text-large">Services</div>
                            <h1 className="text-scarlet text-700">
                                Our features &
                            </h1>
                            <h3>Services.</h3>
                            <p>
                                Briluce services gives you the best results as per your requirements. We are committed into providing the best web development services to all our customers. We always want our customers to give nice feedback on our works. That's the main reason why you should take some time and check some of our works & services.
                            </p>
                            <div className="mt-5">
                                <BetweenButton
                                    color="pink"
                                    icon="arrow-alt-circle-right"
                                    pill
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
                <SeparatorLine />
                <PresentationalContainer bg="light"></PresentationalContainer>
                <SeparatorLine />
                <PresentationalContainer></PresentationalContainer>
                <SeparatorLine />
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
