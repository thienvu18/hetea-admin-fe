import React from 'react';


// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from 'reactstrap';
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import cookie from 'react-cookies';

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
  constructor() {
    super();
    this.fullName = '';
    this.password = '';
    this.role = 'user';
    this.email = '';
    this.picture = 'https://gravatar.com/avatar/e963ab19f02cdec3554799cf98bea425?d=identicon';
    this.state = {
      err:''
    }
  }

  handleChange = event => {
    this.role = event.target.value;
  };

  render() {
    const st = this.props;
    const UserCookie = cookie.load('token');
    if (st.isCreate !== '' && st.isCreate !== 'success') {
      this.setState({
        err: st.isCreate
      });
      st.ClearValueErrInUser();
    }
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1" xl="12">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="12">
                      <h3 className="mb-0">Create new admin</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <Row>
                  <Col lg="8">
                    <CardBody>
                      <Form>
                        <h6 className="heading-small text-muted mb-4">
                          Admin information
                        </h6>
                        <div className="pl-lg-4">
                          <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-first-name"
                                >
                                  Full name
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-first-name"
                                  placeholder="First name"
                                  type="text"
                                  onChange={event => {
                                    this.fullName = event.target.value;
                                  }}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <label
                                className="form-control-label"
                                htmlFor="input-first-name"
                                style={{ width: "100%" }}
                              >
                                Role
                                </label>
                              <label style={{ marginRight: "20%" }}>
                                <input type="radio" name="radioButtonName" value="user"
                                  defaultChecked
                                  onChange={event => {
                                    this.role = event.target.value;
                                    console.log(this.role);
                                  }} />
                                User
                              </label>
                              <label>
                                <input type="radio" name="radioButtonName" value="admin"
                                  onChange={event => {
                                    this.role = event.target.value;
                                    console.log(this.role);
                                  }} />
                                Admin
                              </label>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-email"
                                >
                                  Email address
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-email"
                                  placeholder="jesse@example.com"
                                  type="email"
                                  onChange={event => {
                                    this.email = event.target.value;
                                  }}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-username"
                                >
                                  Password
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  defaultValue="lucky.jesse"
                                  id="input-username"
                                  placeholder="Username"
                                  type="password"
                                  onChange={event => {
                                    this.password = event.target.value;
                                  }}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>
                      </Form>
                    </CardBody>
                  </Col>
                  <Col lg="4">
                    <Row className="justify-content-center">
                      <Col className="order-lg-2" lg="3">
                        <div
                          className="card-profile-image"
                          style={{ marginTop: '100px' }}
                        >
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              className="rounded-circle"
                              src={require('../assets/img/theme/team-4-800x800.jpg')}
                            />
                          </a>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg="8"><center style={{ color: "red",marginBottom:"10px" }}>{this.state.err}</center></Col>
                  <Col lg="8" style={{ marginBottom: '20px' }}>
                    <center>
                      <Button
                        color="primary"
                        onClick={e => {
                          if (this.email === '' || this.pasword === '' || this.fullName === '') {
                            this.setState({
                              err: 'Please complete all information!!!'
                          })
                          }
                          else {
                            e.preventDefault();
                            let data = {
                              email: this.email, password: this.password, name: this.fullName, picture: this.picture, role: this.role
                            };
                            st.AddAdminInfo(data, UserCookie);
                          }
                        }}
                        size="m"
                      >
                        Create
                      </Button>
                    </center>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

const CreateInfo = connect(mapStateToProps, mapDispatchToProps)(Create);

export default CreateInfo;
