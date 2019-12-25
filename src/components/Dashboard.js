import React from 'react';
// reactstrap components
import {
    Card,
    CardHeader,
    Container,
    Row,
    Col
} from 'reactstrap';
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Chart from './Chart';
import TopTurnover from './TopTurnover';
import TopSalesBySkill from './TopSalesBySkill';

const mapStateToProps = state => {
    const UsersState = state.UsersReducer;
    return {
        isCreate: UsersState.isCreate,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        AddAdminInfo: (data, token) => {
            dispatch(actions.AddAdminInfoRequest(data, token));
        },
        ClearValueErrInUser: () => {
            dispatch(actions.ClearValueErrInUser());
        }
    };
};
class Create extends React.PureComponent {
    render() {
        const st = this.props;
        return (
            <>
                <Header />
                {/* Page content */}
                <Container className="mt--7" fluid>
                    <Row>
                        <Col xl="2"></Col>
                        <Col className="order-xl-1" xl="8">
                            <Card className="bg-secondary shadow">
                                <CardHeader className="bg-white border-0">
                                    <Row className="align-items-center">
                                        <Col xs="12">
                                            <h3 className="mb-0">Chart</h3>
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <Row>
                                    <Col lg="12">
                                        <center><Chart></Chart></center>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{marginTop:"30px", paddingBottom:"20px"}}>
                        <Col xl="6">
                            <center><TopTurnover></TopTurnover></center>
                        </Col>
                        <Col xl="6">
                            <center><TopSalesBySkill></TopSalesBySkill></center>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

const CreateInfo = connect(mapStateToProps, mapDispatchToProps)(Create);

export default CreateInfo;
