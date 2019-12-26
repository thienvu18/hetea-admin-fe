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
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import cookie from 'react-cookies';

const mapStateToProps = state => {
    const StatisticState = state.StatisticReducer;
    return {
        chart: StatisticState.chart,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        GetChartRequest: (data, token) => {
            dispatch(actions.GetChartRequest(data, token));
        },
        GetTutorRequest: (data, token) => {
            dispatch(actions.GetTopTurnoverRequest(data, token));
        }
    };
};

class Create extends React.PureComponent {
    constructor() {
        super();
        this.DateStartChart = new Date('2014-12-18');
        this.DateEndChart = new Date(Date.now());
        this.typeChart = 'day';
        this.DateStartTutor = new Date('2014-12-18');
        this.DateEndTutor = new Date(Date.now());
        this.typeTutor = 'day';
    }

    componentDidMount() {
        const UserCookie = cookie.load('token');
        const data = {
            startDate: this.DateStartChart.toISOString(), endDate: this.DateEndChart.toISOString(), unit: this.typeChart
        };
        this.props.GetChartRequest(data, UserCookie);
        const dataTutor = {
            startDate: this.DateStartTutor.toISOString(), endDate: this.DateEndTutor.toISOString(), unit: this.typeTutor
        };
        this.props.GetTutorRequest(dataTutor, UserCookie);
    }

    handleDateStartChange = date => {
        this.DateStartChart = date;
    }
    handleDateEndChange = date => {
        this.DateEndChart = date;
    }

    handleDateStartTutorChange = date => {
        this.DateStartTutor = date;
    }
    handleDateEndTutorChange = date => {
        this.DateEndTutor = date;
    }

    render() {
        const st = this.props;
        const UserCookie = cookie.load('token');
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
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <Grid container justify="space-around">
                                                <KeyboardDatePicker
                                                    disableToolbar
                                                    variant="inline"
                                                    format="MM/dd/yyyy"
                                                    margin="normal"
                                                    id="date-picker-inline"
                                                    label="Date picker inline"
                                                    value={this.DateStartChart}
                                                    onChange={(date) => this.handleDateStartChange(date)}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}
                                                />
                                                <KeyboardDatePicker
                                                    margin="normal"
                                                    id="date-picker-dialog"
                                                    label="Date picker dialog"
                                                    format="MM/dd/yyyy"
                                                    value={this.DateEndChart}
                                                    onChange={(date) => this.handleDateEndChange(date)}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}
                                                />
                                            </Grid>
                                        </MuiPickersUtilsProvider>
                                    </Col>
                                    <Col lg="12" style={{ margin: "5px 10%" }}>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-first-name"
                                            style={{ width: "20%" }}
                                        >
                                            Type:
                                </label>
                                        <label style={{ marginRight: "10%" }}>
                                            <input type="radio" name="radioButtonName" value="day"
                                                defaultChecked
                                                onChange={event => {
                                                    this.typeChart = event.target.value;
                                                    const data = {
                                                        startDate: this.DateStartChart.toISOString(), endDate: this.DateEndChart.toISOString(), unit: this.typeChart
                                                    }
                                                    st.GetChartRequest(data, UserCookie);
                                                }} />
                                            day
                              </label>
                                        <label style={{ marginRight: "10%" }}>
                                            <input type="radio" name="radioButtonName" value="week"
                                                onChange={event => {
                                                    this.typeChart = event.target.value;
                                                    const data = {
                                                        startDate: this.DateStartChart.toISOString(), endDate: this.DateEndChart.toISOString(), unit: this.typeChart
                                                    }
                                                    st.GetChartRequest(data, UserCookie);
                                                }} />
                                            week
                              </label>
                                        <label style={{ marginRight: "10%" }}>
                                            <input type="radio" name="radioButtonName" value="month"
                                                onChange={event => {
                                                    this.typeChart = event.target.value;
                                                    const data = {
                                                        startDate: this.DateStartChart.toISOString(), endDate: this.DateEndChart.toISOString(), unit: this.typeChart
                                                    }
                                                    st.GetChartRequest(data, UserCookie);
                                                }} />
                                            month
                              </label>
                                        <label style={{ marginRight: "10%" }}>
                                            <input type="radio" name="radioButtonName" value="year"
                                                onChange={event => {
                                                    this.typeChart = event.target.value;
                                                    const data = {
                                                        startDate: this.DateStartChart.toISOString(), endDate: this.DateEndChart.toISOString(), unit: this.typeChart
                                                    }
                                                    st.GetChartRequest(data, UserCookie);
                                                }} />
                                            year
                              </label>

                                    </Col>
                                    <Col lg="12">
                                        <center><Chart></Chart></center>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "30px", paddingBottom: "20px" }}>
                        <Col xl="1"></Col>
                        <Col xl="10">
                            <Card className="bg-secondary shadow">
                                <CardHeader className="bg-white border-0">
                                    <Row className="align-items-center">
                                        <Col xs="12">
                                            <h3 className="mb-0">Chart</h3>
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <Col xl="12">
                                    <Row>
                                        <Col lg="12">
                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <Grid container justify="space-around">
                                                    <KeyboardDatePicker
                                                        disableToolbar
                                                        variant="inline"
                                                        format="MM/dd/yyyy"
                                                        margin="normal"
                                                        id="date-picker-inline"
                                                        label="Date picker inline"
                                                        value={this.DateStartChart}
                                                        onChange={(date) => this.handleDateStartTutorChange(date)}
                                                        KeyboardButtonProps={{
                                                            'aria-label': 'change date',
                                                        }}
                                                    />
                                                    <KeyboardDatePicker
                                                        margin="normal"
                                                        id="date-picker-dialog"
                                                        label="Date picker dialog"
                                                        format="MM/dd/yyyy"
                                                        value={this.DateEndChart}
                                                        onChange={(date) => this.handleDateEndTutorChange(date)}
                                                        KeyboardButtonProps={{
                                                            'aria-label': 'change date',
                                                        }}
                                                    />
                                                </Grid>
                                            </MuiPickersUtilsProvider>
                                        </Col>
                                        <Col lg="12" style={{ margin: "5px 0px" }}>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-first-name"
                                                style={{ width: "20%" }}
                                            >
                                                Type:
                                </label>
                                            <label style={{ marginRight: "10%" }}>
                                                <input type="radio" name="radioButtonName" value="day"
                                                    defaultChecked
                                                    onChange={event => {
                                                        this.typeTutor = event.target.value;
                                                        const data = {
                                                            startDate: this.DateStartTutor.toISOString(), endDate: this.DateEndTutor.toISOString(), unit: this.typeTutor
                                                        }
                                                        st.GetTutorRequest(data, UserCookie);
                                                    }} />
                                                day
                              </label>
                                            <label style={{ marginRight: "10%" }}>
                                                <input type="radio" name="radioButtonName" value="week"
                                                    onChange={event => {
                                                        this.typeTutor = event.target.value;
                                                        const data = {
                                                            startDate: this.DateStartTutor.toISOString(), endDate: this.DateEndTutor.toISOString(), unit: this.typeTutor
                                                        }
                                                        st.GetTutorRequest(data, UserCookie);
                                                    }} />
                                                week
                              </label>
                                            <label style={{ marginRight: "10%" }}>
                                                <input type="radio" name="radioButtonName" value="month"
                                                    onChange={event => {
                                                        this.typeTutor = event.target.value;
                                                        const data = {
                                                            startDate: this.DateStartTutor.toISOString(), endDate: this.DateEndTutor.toISOString(), unit: this.typeTutor
                                                        }
                                                        st.GetTutorRequest(data, UserCookie);
                                                    }} />
                                                month
                              </label>
                                            <label style={{ marginRight: "10%" }}>
                                                <input type="radio" name="radioButtonName" value="year"
                                                    onChange={event => {
                                                        this.typeTutor = event.target.value;
                                                        const data = {
                                                            startDate: this.DateStartTutor.toISOString(), endDate: this.DateEndTutor.toISOString(), unit: this.typeTutor
                                                        }
                                                        st.GetTutorRequest(data, UserCookie);
                                                    }} />
                                                year
                              </label>

                                        </Col>
                                    </Row>
                                    <TopTurnover></TopTurnover>
                                </Col>
                            </Card>
                        </Col>
                        {/* <Col xl="6">
                            <center><TopSalesBySkill></TopSalesBySkill></center>
                        </Col> */}
                    </Row>
                </Container>
            </>
        );
    }
}

const CreateInfo = connect(mapStateToProps, mapDispatchToProps)(Create);

export default CreateInfo;
