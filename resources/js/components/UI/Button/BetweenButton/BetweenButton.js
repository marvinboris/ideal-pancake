import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const betweenButton = ({ children, color, icon, iconColor = 'reset', className = '', size, pill = false }) =>
    <Button color={color} size={size} className={"d-inline-flex align-items-center text-300 " + (pill ? ' rounded-pill ' : '') + className}>
        {children}
        <FontAwesomeIcon size="lg" icon={icon} className={"ml-3 text-" + iconColor} />
    </Button>;

export default betweenButton;
