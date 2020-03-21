import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const betweenButton = ({ children, color, icon, iconColor, className, size }) =>
    <Button color={color} size={size} className={"d-inline-flex align-items-center rounded-4 py-3 " + className}>
        <span className="text-300">{children}</span>
        <FontAwesomeIcon size="lg" icon={icon} className={"ml-3 text-" + iconColor} />
    </Button>;

export default betweenButton;