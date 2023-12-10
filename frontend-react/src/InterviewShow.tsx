import React, { useState } from 'react';
import { Row, Col, Button, Typography, Divider, Empty } from 'antd';

const { Text } = Typography;

interface InterviewProps {
  name: string;
  time: string; // Assuming time is a string representing a date or timestamp
  role: string;
}

const InterviewShow: React.FC<InterviewProps> = ({ name, time, role }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  // Function to convert timestamp to readable time
  const convertToReadableTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString(); // Adjust the format based on your preference
  };

  return (
    <>
      <Row>
        <Col
          span={24}
          sm={{ span: 24 }}
          lg={{ span: 12, offset: 6 }}
          md={{ span: 20, offset: 2 }}
          style={{
            height: 80,
            backgroundColor: hovered ? 'rgb(230, 255, 230)' : 'transparent',
            borderBottom: '1px solid black',
            borderRadius: 5,
          }}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <Row>
            <Col span={10} style={{ marginTop: 10, paddingLeft: 10 }}>
              <Row>
                <Col>
                  <Text>{name}</Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Text type="secondary">{role}</Text>
                </Col>
              </Row>
            </Col>
            <Col span={10} style={{ marginTop: 10, paddingLeft: 10 }}>
              <Row justify="end">
                <Col>
                  <Text>{convertToReadableTime(time)}</Text>
                </Col>
              </Row>
              <Row justify="end">
                <Col>
                  <Text type="success">View History</Text>
                </Col>
              </Row>
            </Col>
            <Col span={4}>
              <Button
                type="default"
                style={{
                  backgroundColor: hovered ? 'rgb(51, 204, 51)' : 'transparent',
                  fontSize: 14,
                  marginTop: 23,
                  marginLeft: 0,
                  color: hovered ? 'white' : 'black',
                  borderRadius: 10,
                }}
                size="middle"
              >
                Join Now
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default InterviewShow;
