import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import CenterButton from '../../UI/Button/CenterButton/CenterButton';
import Logo from '../../UI/Logo/Logo';

const toolbar = ({ isAuth, name, drawerToggleClicked, logoutHandler, role, cartItemsNumber, notifications }) => (
    <div className="Toolbar">
        <div className="position-static d-flex bg-scarlet justify-content-between align-items-end w-100">
            <div className="h-100 d-flex flex-column justify-content-end">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="pr-4">
                        <div className="bg-black-33" style={{ height: 30, width: 100 }}></div>
                    </div>

                    <Logo big />
                </div>
            </div>

            <div className="d-flex justify-content-end">
                <div className="d-flex flex-column justify-content-between align-items-center px-4">
                    <div className="bg-black-20 d-flex justify-content-center align-items-center rounded-bottom-75 small text-light py-2" style={{ width: '40vw' }}>
                        <a href="mailto:contact@briluce.com" className="mr-5 d-inline-flex align-items-center text-light text-decoration-none">
                            <div className="embed-responsive embed-responsive-1by1 rounded-circle border border-2 mr-2 border-white d-flex justify-content-center align-items-center" style={{ width: 28 }}>
                                <FontAwesomeIcon icon="envelope" />
                            </div>

                            <span>contact@briluce.com</span>
                        </a>

                        <a href="tel:(+237) 694422725" className="d-inline-flex align-items-center text-light text-decoration-none">
                            <div className="embed-responsive embed-responsive-1by1 rounded-circle border border-2 mr-2 border-white d-flex justify-content-center align-items-center" style={{ width: 28 }}>
                                <FontAwesomeIcon icon="phone" />
                            </div>

                            <span>(+237) 694422725</span>
                        </a>
                    </div>

                    <div className="">
                        <NavigationItems isAuth={isAuth} name={name} logoutHandler={logoutHandler} notifications={notifications} cartItemsNumber={cartItemsNumber} role={role} />
                    </div>
                </div>

                <div className="border-left border-white-20 pl-4 mb-4 pt-2 d-flex flex-column justify-content-between">
                    <div className="d-flex justify-content-between pr-3 mb-4">
                        <div className="pt-1">
                            <CenterButton color="pink" icon={'headset'} className="shadow-sm">Request call</CenterButton>
                        </div>
                        <div className="d-flex">
                            <div className="d-flex align-items-center px-2"><a className="text-light" href="/"><FontAwesomeIcon size="lg" icon={["fab", "facebook-square"]} /></a></div>
                            <div className="d-flex align-items-center px-2"><a className="text-light" href="/"><FontAwesomeIcon size="lg" icon={["fab", "twitter-square"]} /></a></div>
                            <div className="d-flex align-items-center px-2"><a className="text-light" href="/"><FontAwesomeIcon size="lg" icon={["fab", "instagram"]} /></a></div>
                            <div className="d-flex align-items-center px-2"><a className="text-light" href="/"><FontAwesomeIcon size="lg" icon={["fab", "whatsapp"]} /></a></div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                        <div className="mr-4">
                            <div className="d-inline-flex align-items-center">
                                <a href="#language-dropdown" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="language-dropdown" className="text-white text-decoration-none d-flex justify-content-around align-items-center">
                                    <span className="language-flag shadow-lg mr-2 overflow-hidden d-inline-flex justify-content-center align-items-center position-relative">
                                        <span className="flag-icon position-absolute flag-icon-gb"></span>
                                    </span>
                                    <span className="px-2 border-left border-white-20 position-relative">
                                        EN
                                        <FontAwesomeIcon icon="circle" className="text-yellow text-xx-small position-absolute" style={{ left: 0, transform: 'translate(-50%, -50%)', top: '50%' }} />
                                    </span>
                                    <FontAwesomeIcon icon="caret-down" />
                                </a>
                            </div>
                        </div>

                        <div className="py-1 px-3 d-flex align-items-center bg-black-33">
                            <FontAwesomeIcon size="lg" className="text-yellow border-right border-white-20 mr-2 pr-2" icon="door-open" />
                            <div className="d-flex small text-light py-2">
                                <div className="text-bold border-right border-white-20 mr-2 pr-2">Monday - Friday</div>
                                <div className="">08:30 - 17:30</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="fixed-top d-flex bg-white shadow-sm justify-content-between align-items-end w-100">
            <div className="h-100 d-flex flex-column justify-content-end">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="pr-4">
                        <div className="bg-black-33" style={{ height: 30, width: 100 }}></div>
                    </div>

                    <Logo dark big />
                </div>
            </div>

            <div className="d-flex justify-content-end">
                <div className="d-flex flex-column justify-content-between align-items-center px-4">
                    <div className="bg-black-20 d-flex justify-content-center align-items-center rounded-bottom-75 small text-light py-2" style={{ width: '40vw' }}>
                        <a href="mailto:contact@briluce.com" className="mr-5 d-inline-flex align-items-center text-light text-decoration-none">
                            <div className="embed-responsive embed-responsive-1by1 rounded-circle border border-2 mr-2 border-dark d-flex justify-content-center align-items-center" style={{ width: 28 }}>
                                <FontAwesomeIcon icon="envelope" />
                            </div>

                            <span>contact@briluce.com</span>
                        </a>

                        <a href="tel:(+237) 694422725" className="d-inline-flex align-items-center text-light text-decoration-none">
                            <div className="embed-responsive embed-responsive-1by1 rounded-circle border border-2 mr-2 border-dark d-flex justify-content-center align-items-center" style={{ width: 28 }}>
                                <FontAwesomeIcon icon="phone" />
                            </div>

                            <span>(+237) 694422725</span>
                        </a>
                    </div>

                    <div className="">
                        <NavigationItems light font="scarlet" isAuth={isAuth} name={name} logoutHandler={logoutHandler} notifications={notifications} cartItemsNumber={cartItemsNumber} role={role} />
                    </div>
                </div>

                <div className="border-left border-dark-20 pl-4 mb-4 pt-2 d-flex flex-column justify-content-between">
                    <div className="d-flex justify-content-between pr-3 mb-4">
                        <div className="pt-1">
                            <CenterButton color="pink" icon={'headset'} className="shadow-sm">Request call</CenterButton>
                        </div>
                        <div className="d-flex">
                            <div className="d-flex align-items-center px-2"><a className="text-light" href="/"><FontAwesomeIcon size="lg" icon={["fab", "facebook-square"]} /></a></div>
                            <div className="d-flex align-items-center px-2"><a className="text-light" href="/"><FontAwesomeIcon size="lg" icon={["fab", "twitter-square"]} /></a></div>
                            <div className="d-flex align-items-center px-2"><a className="text-light" href="/"><FontAwesomeIcon size="lg" icon={["fab", "instagram"]} /></a></div>
                            <div className="d-flex align-items-center px-2"><a className="text-light" href="/"><FontAwesomeIcon size="lg" icon={["fab", "whatsapp"]} /></a></div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                        <div className="mr-4">
                            <div className="d-inline-flex align-items-center">
                                <a href="#language-dropdown" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="language-dropdown" className="text-dark text-decoration-none d-flex justify-content-around align-items-center">
                                    <span className="language-flag shadow-lg mr-2 overflow-hidden d-inline-flex justify-content-center align-items-center position-relative">
                                        <span className="flag-icon position-absolute flag-icon-gb"></span>
                                    </span>
                                    <span className="px-2 border-left border-dark-20 position-relative">
                                        EN
                                        <FontAwesomeIcon icon="circle" className="text-yellow text-xx-small position-absolute" style={{ left: 0, transform: 'translate(-50%, -50%)', top: '50%' }} />
                                    </span>
                                    <FontAwesomeIcon icon="caret-down" />
                                </a>
                            </div>
                        </div>

                        <div className="py-1 px-3 d-flex align-items-center bg-green">
                            <FontAwesomeIcon size="lg" className="text-yellow border-right border-dark-20 mr-2 pr-2" icon="door-open" />
                            <div className="d-flex small text-light py-2">
                                <div className="text-bold border-right border-dark-20 mr-2 pr-2">Monday - Friday</div>
                                <div className="">08:30 - 17:30</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default toolbar;