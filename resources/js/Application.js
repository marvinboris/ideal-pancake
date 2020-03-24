import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faEnvelope,
    faPhone,
    faHome,
    faAddressCard,
    faRss,
    faBlog,
    faIdCardAlt,
    faShoppingCart,
    faTshirt,
    faStoreAlt,
    faHandshake,
    faMapMarkerAlt,
    faPaperPlane,
    faLock,
    faSignInAlt,
    faUserPlus,
    faSignature,
    faKey,
    faUserCircle,
    faPowerOff,
    faTachometerAlt,
    faBell,
    faTimes,
    faReceipt,
    faNewspaper,
    faChartLine,
    faUser,
    faUsers,
    faHistory,
    faCircle,
    faUserEdit,
    faCog,
    faUserTag,
    faInfoCircle,
    faCircleNotch,
    faUserCog,
    faHeading,
    faParagraph,
    faTag,
    faImage,
    faCartPlus,
    faFolderPlus,
    faPlus,
    faMinus,
    faEdit,
    faStore,
    faBuilding,
    faTruckLoading,
    faPalette,
    faExpand,
    faUserFriends,
    faComments,
    faSmileWink,
    faHeadset,
    faDoorOpen,
    faCaretDown,
    faGraduationCap,
    faBook,
    faArrowAltCircleRight,
    faDesktop,
    faBusinessTime,
    faCode,
    faPencilRuler,
    faPhoneSquare,
    faPlay,
    faHospital,
    faHospitalSymbol,
    faShoppingBasket,
    faAngleDoubleRight,
    faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import {
    faInstagram,
    faProductHunt,
    faTwitterSquare,
    faFacebookSquare,
    faWhatsapp,
    faLinkedin,
    faSkype,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';

import Home from './containers/Home/Home';
import asyncComponent from './hoc/asyncComponent/asyncComponent';
import Layout from './hoc/Layout/Layout';
import * as actions from './store/actions';

library.add(
    faInstagram,
    faTwitterSquare,
    faFacebookSquare,
    faWhatsapp,
    faEnvelope,
    faPhone,
    faHome,
    faHeadset,
    faDoorOpen,
    faCaretDown,
    faGraduationCap,
    faBook,
    faAddressCard,
    faArrowAltCircleRight,
    faRss,
    faBlog,
    faIdCardAlt,
    faShoppingCart,
    faTshirt,
    faStoreAlt,
    faHandshake,
    faPlay,
    faHospital,
    faHospitalSymbol,
    faShoppingBasket,
    faMapMarkerAlt,
    faPaperPlane,
    faLock,
    faSignInAlt,
    faUserPlus,
    faSignature,
    faKey,
    faUserCircle,
    faPowerOff,
    faTachometerAlt,
    faBell,
    faTimes,
    faReceipt,
    faNewspaper,
    faChartLine,
    faProductHunt,
    faUser,
    faAngleDoubleRight,
    faGlobe,
    faUsers,
    faHistory,
    faCircle,
    faUserEdit,
    faCog,
    faUserTag,
    faInfoCircle,
    faCircleNotch,
    faUserCog,
    faHeading,
    faParagraph,
    faTag,
    faImage,
    faCartPlus,
    faFolderPlus,
    faPlus,
    faMinus,
    faEdit,
    faStore,
    faBuilding,
    faTruckLoading,
    faPalette,
    faExpand,
    faUserFriends,
    faComments,
    faSmileWink,
    faDesktop,
    faBusinessTime,
    faCode,
    faPencilRuler,
    faPhoneSquare,
    faLinkedin,
    faSkype,
    faYoutube
);

// Common routes
const asyncAboutUs = asyncComponent(() => import('./containers/AboutUs/AboutUs'));
const asyncContact = asyncComponent(() => import('./containers/Contact/Contact'));
const asyncLogin = asyncComponent(() => import('./containers/Auth/Login/Login'));
const asyncSignup = asyncComponent(() => import('./containers/Auth/Signup/Signup'));

class App extends Component {
    componentDidMount() {
        const { onTryAuthSignup } = this.props;
        onTryAuthSignup();
    }

    render() {
        const { auth: { profile, token } } = this.props;
        const role = profile ? profile.role : null;

        let routes = (
            <Switch>
                <Route path="/signup" component={asyncSignup} />
                <Route path="/login" component={asyncLogin} />
                <Route path="/contact" component={asyncContact} />
                <Route path="/about-us" component={asyncAboutUs} />
                <Route path="/" component={Home} />
                <Redirect to="/" />
            </Switch>
        );

        if (token !== null && profile) {
            routes = (
                <Switch>
                    <Route path="/contact" component={asyncContact} />
                    <Route path="/about-us" component={asyncAboutUs} />
                    <Route path="/" component={Home} />
                    <Redirect to="/" />
                </Switch>
            );
        }

        return (
            <div>
                <Layout>
                    {routes}
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onTryAuthSignup: () => dispatch(actions.authCheckState()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
