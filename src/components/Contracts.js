import React from 'react';
import ContractsTable from './ContractsTable';

// reactstrap components
import { Card, Container, Row, Col } from 'reactstrap';
// core components
import Header from './Header';
class Contracts extends React.Component {
  render() {
    return (
      <div>
        <>
          <Header />
          {/* Page content */}
          <Container className="mt--7" fluid>
            <Row>
              <Col className="order-xl-1" xl="12">
                <Card className="bg-secondary shadow">
                  <ContractsTable></ContractsTable>
                </Card>
               </Col>
            </Row>
          </Container>
        </>
        <div style={{ margin: '100px' }}>
        </div>
      </div>
    );
  }
}

export default Contracts;
