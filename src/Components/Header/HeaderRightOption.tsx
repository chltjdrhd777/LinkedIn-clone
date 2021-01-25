import { SvgIconTypeMap, Avatar } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "redux/userSlices";
import styled from "styled-components/macro";

export interface Props {
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  title: string;
  avatar?: string;
}

function HeaderRightOption({ avatar, Icon, title }: Props) {
  const dispatch = useDispatch();
  const logOutFunc = () => {
    dispatch(logout());
  };

  return (
    <HeaderRightOPtionDiv onClick={logOutFunc}>
      <div className="icon_container">
        {Icon && <Icon className="headerOption_Icon" />}
        {avatar && <Avatar className="headerAvatar" src={avatar} />}
      </div>

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
  font-size: 0.7rem;

  &:hover {
    color: black;
  }

  & .icon_container {
    height: 1.2rem;

    & .headerAvatar,
    .headerOption_Icon {
      height: 100%;
      & > img {
        object-fit: contain;
      }
    }
  }

  & .headerOption_title {
    font-size: 0.7rem;
  }
`;

export default HeaderRightOption;
