import React from "react";
import styled from "styled-components";
import { MdOutlineFeedback } from "react-icons/md";
const FeedbackCard = () => {
  return (
    <>
      <Card>
        <CardContent>
          <h3>Feedback</h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
            felis vitae tortor pharetra condimentum. Quisque ultricies purus nec
            mi facilisis, eget fermentum arcu ultricies."
          </p>
        </CardContent>
        <UserInfo>
          <p>
            <strong>Name:</strong> John Doe
          </p>
          <p>
            <strong>Email:</strong> johndoe@example.com
          </p>
        </UserInfo>
      </Card>
      <Card>
        <CardContent>
          <h3>Feedback</h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
            felis vitae tortor pharetra condimentum. Quisque ultricies purus nec
            mi facilisis, eget fermentum arcu ultricies."
          </p>
        </CardContent>
        <UserInfo>
          <p>
            <strong>Name:</strong> John Doe
          </p>
          <p>
            <strong>Email:</strong> johndoe@example.com
          </p>
        </UserInfo>
      </Card>
      <Card>
        <CardContent>
          <h3>Feedback</h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
            felis vitae tortor pharetra condimentum. Quisque ultricies purus nec
            mi facilisis, eget fermentum arcu ultricies."
          </p>
        </CardContent>
        <UserInfo>
          <p>
            <strong>Name:</strong> John Doe
          </p>
          <p>
            <strong>Email:</strong> johndoe@example.com
          </p>
        </UserInfo>
      </Card>
      <Card>
        <CardContent>
          <h3>Feedback</h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
            felis vitae tortor pharetra condimentum. Quisque ultricies purus nec
            mi facilisis, eget fermentum arcu ultricies."
          </p>
        </CardContent>
        <UserInfo>
          <p>
            <strong>Name:</strong> John Doe
          </p>
          <p>
            <strong>Email:</strong> johndoe@example.com
          </p>
        </UserInfo>
      </Card>
      <Card>
        <CardContent>
          <h3>Feedback</h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
            felis vitae tortor pharetra condimentum. Quisque ultricies purus nec
            mi facilisis, eget fermentum arcu ultricies."
          </p>
        </CardContent>
        <UserInfo>
          <p>
            <strong>Name:</strong> John Doe
          </p>
          <p>
            <strong>Email:</strong> johndoe@example.com
          </p>
        </UserInfo>
      </Card>
    </>
  );
};

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  margin: 20px;
`;

const CardContent = styled.div`
  margin-bottom: 10px;
`;

const UserInfo = styled.div`
  border-top: 1px solid #ccc;
  padding-top: 10px;
`;

export default FeedbackCard;
