import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';

import Breadcrumb from '../../components/UI/Breadcrumb/Breadcrumb';
import Title from '../../components/UI/Titles/Title/Title';
import MediaBlock from '../../components/UI/MediaBlock/MediaBlock';
import SeparatorLine from '../../components/UI/SeparatorLine/SeparatorLine';
import PresentationalContainer from '../../components/UI/PresentationalContainer/PresentationalContainer';
import TeamMemberCard from '../../components/UI/TeamMemberCard/TeamMemberCard';
import * as actions from '../../store/actions';

import Blog1 from '../../../../public/images/blog_1.jpg';

class AboutUs extends Component {
    componentDidMount() {
        if (this.props.auth.authPage) this.props.onAuthPageOff();
        if (this.props.auth.userPage) this.props.onUserPageOff();
    }

    render() {
        return (
            <Col xs={12} className="AboutUs p-0">
                <Breadcrumb main="À propos" />
                <PresentationalContainer>
                    <Row>
                        <Col lg={6} className="img-responsive">
                            <img src={Blog1} alt="Sub-banner" className="img-fluid" />
                        </Col>
                        <Col lg={6} className="text-black-50">
                            <Title className="text-dark">Comment <span className="text-info">nous</span> avons <span className="text-danger">commencé</span></Title>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius repellat, dicta at laboriosam, nemo exercitationem itaque eveniet architecto cumque, deleniti commodi molestias repellendus quos sequi hic fugiat asperiores illum. Atque, in, fuga excepturi corrupti error corporis aliquam unde nostrum quas.
                            </p>
                            <p>
                                Accusantium dolor ratione maiores est deleniti nihil? Dignissimos est, sunt nulla illum autem in, quibusdam cumque recusandae, laudantium minima repellendus.
                            </p>
                        </Col>
                    </Row>
                </PresentationalContainer>
            </Col>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onAuthPageOff: () => dispatch(actions.authPageOff()),
    onUserPageOff: () => dispatch(actions.userPageOff()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
