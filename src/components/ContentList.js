import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Content = styled.div`
  position: fixed;
  background-color: white;
  top: ${({top}) => top};
  height: 50px;
  width: 100%;
  font-size: 20px;
  color: black;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  border: 1px solid #585858;
`;

const LinkTo = (props) =>
  <Link exact to={props.path} style={{ textDecoration: 'none', color: "black" }}>
    { props.children }
  </Link>

const ContentList = () =>
  <div>
    <Content top="50px">
    <LinkTo path='/projects'>Projects</LinkTo>
    </Content>
    <Content top="100px">
    <LinkTo path='/study'>Study</LinkTo>
    </Content>
    <Content top="150px">
    <LinkTo path='/interest'>Interest</LinkTo>
    </Content>
    <div style={{'margin-top':"150px"}}/>
  </div>

export default ContentList;