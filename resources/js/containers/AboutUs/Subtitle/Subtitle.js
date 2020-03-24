import React from 'react';
import { Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const subtitle = ({ children }) => 
<h6 className="text-700 text-montserrat-alt pb-2 mb-0 position-relative">
    <span>{children}</span>
    <div className="d-flex align-items-center" style={{ width: 110 }}>
        <Col xs={5} className="p-0 border-bottom border-orange"></Col>
        <Col xs={2} className="p-0 text-center">
            <FontAwesomeIcon icon="circle" className="text-orange text-xx-small" />
        </Col>
        <Col xs={5} className="p-0 border-bottom border-orange"></Col>
    </div>
</h6>;

export default subtitle;