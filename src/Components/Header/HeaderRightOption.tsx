import { SvgIconTypeMap, Avatar } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import React from "react";
import styled from "styled-components/macro";

interface Props {
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  title: string;
  avatar?: string;
}

function HeaderRightOption({ avatar, Icon, title }: Props) {
  return (
    <HeaderRightOPtionDiv>
      {Icon && <Icon className="headerOption_Icon" />}
      {avatar && <Avatar className="headerAvatar" src={avatar} />}
      <h3 className="headerOption_title">{title}</h3>
    </HeaderRightOPtionDiv>
  );
}

const HeaderRightOPtionDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: gray;
  margin-right: 1rem;
  cursor: pointer;
  font-size: 10px;

  &:hover {
    color: black;
  }

  & .headerAvatar {
    object-fit: contain;
    height: 30px;
    width: 30px;
  }
`;

export default HeaderRightOption;
