import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Owl from 'react-owl';

import './Home.css';
import SeparatorLine from '../../components/UI/SeparatorLine/SeparatorLine';
import Title from '../../components/UI/Titles/Title/Title';
import PresentationalContainer from '../../components/UI/PresentationalContainer/PresentationalContainer';
import * as actions from '../../store/actions';
import HomeCarousel from './Carousel/Carousel';
import BetweenButton from '../../components/UI/Button/BetweenButton/BetweenButton';

import SoftImage from '../../../../public/images/soft image@2x.png';

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
                        <div id="banner" className="text-white w-75 mx-auto text-center text-sm-left">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex">
                                    <div className="pr-4">
                                        <div className="position-relative bg-orange" style={{ width: 13, height: 254, top: 20 }}>
                                            <div className="position-absolute bg-orange-50" style={{ width: 21, height: 144, top: 40, right: 32 }}></div>
                                            <div className="position-absolute bg-green" style={{ width: 75, height: 40, right: 0, top: 62 }}></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="display-3 title">
                                            <span className="text-300">We</span><br />
                                            <span className="text-700">Develop</span>
                                        </div>
                                        <div className="display-4 subtitle text-300">
                                            Web application and<br />
                                        Softwares at <span className="text-700">low cost</span>
                                        </div>
                                        <div className="mt-5">
                                            <BetweenButton size="lg" className="mr-3 bg-scarlet-gradient" color="black" icon="arrow-alt-circle-right" iconColor="yellow">Get a quote</BetweenButton>
                                            <BetweenButton size="lg" color="orange" icon="arrow-alt-circle-right">View portfolio</BetweenButton>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-40">
                                    <img src={SoftImage} className="img-fluid" />
                                </div>
                            </div>
                        </div>
                        <HomeCarousel />
                    </div>
                </div>
                <PresentationalContainer>

                </PresentationalContainer>
                <SeparatorLine />
                <PresentationalContainer bg="light">

                </PresentationalContainer>
                <SeparatorLine />
                <PresentationalContainer>

                </PresentationalContainer>
                <SeparatorLine />
            </Col>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onAuthPageOff: () => dispatch(actions.authPageOff()),
    onUserPageOff: () => dispatch(actions.userPageOff()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);