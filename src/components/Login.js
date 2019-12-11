import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from 'reactstrap';

class Login extends React.Component {
  constructor() {
    super();
    this.username = '';
    this.password = '';
    this.err = '';
  }

  render() {
    const st = this.props;
    if (this.props.token !== '' && this.props.token !== 'err') {
      return <Redirect to="/admin"></Redirect>;
    }
    if (this.props.token === 'err') {
      this.err="Invalid username or password"
    }
    return (
      <center>
        <Col lg="5" md="7" style={{ marginTop: '100px' }}>
          <Card className="bg-secondary shadow border-1">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">SIGN IN</div>
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      onChange={event => {
                        this.username = event.target.value;
                      }}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      onChange={event => {
                        this.password = event.target.value;
                      }}
                    />
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                <div style={{color: "red"}}>{this.err}</div>
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button
                    className="my-4"
                    color="primary"
                    onClick={event => {
                      event.preventDefault();
                      st.Login(this.username, this.password);
                    }}
                    type="button"
                  >
                    Sign in
                  </Button>
                </div>
              </Form>
              <Row className="mt-3">
                <Col xs="6">
                  <a
                    className=" text-muted"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <small>Forgot password?</small>
                  </a>
                </Col>
                <Col className="text-right" xs="6">
                  <a
                    className=" text-muted"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <small>Create new account</small>
                  </a>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </center>
    );
  }
}

export default withRouter(Login);
