import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { Col } from 'reactstrap';
import { faAngleDoubleRight, faCircle } from '@fortawesome/free-solid-svg-icons';

import './AppBlock.css';

const appBlock = ({ children, animation = "fade-up", icon, title = '', link = '/' }) =>
    <Col data-aos={animation} md={6} lg={3} className="AppBlock pb-4 pb-lg-0">
        <div className="shadow-sm bg-white rounded-4 p-4 h-100 d-flex flex-column">
            <div>
                <div className="d-flex justify-content-center align-items-center embed-responsive embed-responsive-1by1 mx-auto rounded-circle border border-orange border-3 position-relative p-3" style={{ width: 130 }}>
                    <div className="position-absolute w-80 embed-responsive embed-responsive-1by1 rounded-circle shadow d-flex justify-content-center align-items-center" style={{ top: '50%', transform: 'translateY(-50%)' }}>
                        <FontAwesomeIcon icon={icon} className="text-orange fa-3x" />
                    </div>
                </div>

                <div className="my-4 py-2 px-4 bg-gradient rounded-2 position-relative overflow-hidden text-white text-center" style={{ height: 62 }}>
                    <div className="position-relative" style={{ top: '50%', transform: 'translateY(-50%)' }}>{title}</div>

                    <FontAwesomeIcon icon={faCircle} className="text-xx-small position-absolute" style={{ top: '50%', left: 0, transform: 'translate(-50%, -50%)' }} />
                    <FontAwesomeIcon icon={faCircle} className="text-xx-small position-absolute" style={{ top: '50%', right: 0, transform: 'translate(50%, -50%)' }} />
                </div>

                <div className="text-justify">{children}</div>
            </div>

            <div className="mt-auto">
                <div className="mt-3 pt-3 border-top border-black-20 ">
                    <NavLink to={link} className="text-orange text-decoration-none">
                        Read More
                        <FontAwesomeIcon icon={faAngleDoubleRight} className="ml-2" />
                    </NavLink>
                </div>

            </div>
        </div>
    </Col>;

export default appBlock;