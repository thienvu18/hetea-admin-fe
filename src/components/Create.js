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
// core components
import Header from './Header';
class Create extends React.Component {
  render() {
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
                                  First name
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  defaultValue="Lucky"
                                  id="input-first-name"
                                  placeholder="First name"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-last-name"
                                >
                                  Last name
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  defaultValue="Jesse"
                                  id="input-last-name"
                                  placeholder="Last name"
                                  type="text"
                                />
                              </FormGroup>
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
                  <Col lg="8" style={{ marginBottom: '20px' }}>
                    <center>
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
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

export default Create;
