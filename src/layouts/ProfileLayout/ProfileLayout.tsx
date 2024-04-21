import { Outlet, NavLink } from "react-router-dom";
import { ListGroup, Row, Col } from "react-bootstrap";

const ProfileLayout = () => {
  return (
    <Row>
      <Col xs={3}>
        <ListGroup>
          <ListGroup.Item as={NavLink} to="" end>
            Account
          </ListGroup.Item>
          <ListGroup.Item as={NavLink} to="orders">
            Orders
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col>
        <Outlet />
      </Col>
    </Row>
  );
};

export default ProfileLayout;
