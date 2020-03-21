import React from 'react';

import './Logo.css';
import Image from '../../../../../public/images/Briluce-logo-for-Dark-BG.png';
import { NavLink } from 'react-router-dom';

const logo = ({ big }) => (
    <div className="Logo mb-0 text-white" >
        <NavLink to="/"><img src={Image} style={big ? { height: 90 } : { height: 60 }} /></NavLink>
    </div>
);

export default logo;