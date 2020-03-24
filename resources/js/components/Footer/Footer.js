import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FooterBlock from './FooterBlock/FooterBlock';
import Logo from '../UI/Logo/Logo';

import Facebook from '../../../../public/images/change-Facebook-page-name1@2x.png';
import Briluce from '../../../../public/images/briluce-fav2@2x.png';
import BdTask from '../../../../public/images/bdtask-logo-white@2x.png';

const footer = () => (
    <>
        <footer className="container-fluid px-5 bg-scarlet text-light py-5">
            <Row>
                <Col lg={2}>
                    <Logo big />
                    <FooterBlock title="Address" className="mt-4">
                        <p className="text-300">
                            Douala - Cameroun<br />Akwa, Mobile Bonakouamoung <br />Sis en face Beneficial Life
                        </p>
                    </FooterBlock>
                </Col>
                <Col lg={4}>
                    <FooterBlock title="Phone & Email">
                        <dl className="d-flex flex-wrap">
                            <div className="flex-fill w-100 d-flex">
                                <dl>
                                    <FontAwesomeIcon icon="phone-square" className="text-yellow mr-2" />
                                    <strong>Online</strong>:
                                </dl>
                                <div />
                                <dl className="flex-grow-1 pl-sm-4 text-300">
                                    <div><a href="tel:(+237) 123 345 545" className="text-white text-decoration-none">(+237) 123 345 545</a></div>
                                    <div><a href="tel:(+237) 123 345 545" className="text-white text-decoration-none">(+237) 123 345 545</a></div>
                                </dl>
                            </div>

                            <div className="flex-fill w-100 d-flex">
                                <dl>
                                    <FontAwesomeIcon icon="envelope" className="text-yellow mr-2" />
                                    <strong>Email</strong>:
                                </dl>
                                <div />
                                <dl className="flex-grow-1 pl-sm-4 text-300">
                                    <div><a href="mailto:contact@briluce.org" className="text-white text-decoration-none">contact@briluce.org</a></div>
                                    <div><a href="mailto:briluceservices@gmail.com" className="text-white text-decoration-none">briluceservices@gmail.com</a></div>
                                </dl>
                            </div>
                        </dl>
                    </FooterBlock>
                </Col>
                <Col lg={3}>
                    <FooterBlock title="Our partners">
                        <div className="d-flex align-items-center">
                            <div className="pr-2"><Logo /></div>
                            <div className="pr-2"><img src={Briluce} style={{ height: 40 }} /></div>
                            <div><img src={BdTask} style={{ height: 42 }} /></div>
                        </div>
                    </FooterBlock>

                    <FooterBlock title="Facebook Likes" className="mt-4">
                        <div className="w-75"><img src={Facebook} className="img-fluid" /></div>
                    </FooterBlock>
                </Col>
                <Col lg={3}>
                    <FooterBlock title="Find us on Maps">
                        <div className="rounded overflow-hidden">
                            <iframe width="100%" height="150" src="https://maps.google.com/maps?width=700&amp;height=150&amp;hl=en&amp;q=La%20maison%20du%20bitcoin+(Auto-%C3%A9cole%20Universit%C3%A9)&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </div>
                    </FooterBlock>
                </Col>
            </Row>
        </footer>
        <footer className="container-fluid px-5 bg-scarlet text-light pb-4">
            <div className="border-top border-white-20 d-flex justify-content-between align-items-center pt-4">
                <div>
                    © Copyrights 2020 <span className="text-yellow text-700">Briluce Services</span>. All rights reserved.
                </div>

                <div className="d-flex">
                    <FontAwesomeIcon size="2x" icon={["fab", "facebook-square"]} className="mr-3" />
                    <FontAwesomeIcon size="2x" icon={["fab", "twitter-square"]} className="mr-3" />
                    <FontAwesomeIcon size="2x" icon={["fab", "linkedin"]} className="mr-3" />
                    <FontAwesomeIcon size="2x" icon={["fab", "instagram"]} className="mr-3" />
                    <FontAwesomeIcon size="2x" icon={["fab", "skype"]} className="mr-3" />
                    <FontAwesomeIcon size="2x" icon={["fab", "youtube"]} />
                </div>
            </div>
        </footer>
    </>
);

export default footer;
