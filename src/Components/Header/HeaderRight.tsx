import React from "react";
import styled from "styled-components/macro";
import HeaderRightOption from "./HeaderRightOption";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import { useSelector } from "react-redux";
import { selectUser } from "redux/mainReducer";

function HeaderRight() {
  const user = useSelector(selectUser);

  return (
    <>
      <HeaderRightNav>
        <HeaderRightOption Icon={AcUnitIcon} title={"testIcon1"} />
        <HeaderRightOption Icon={AcUnitIcon} title={"testIcon2"} />
        <HeaderRightOption Icon={AcUnitIcon} title={"testIcon3"} />
        <HeaderRightOption Icon={AcUnitIcon} title={"testIcon4"} />
        <HeaderRightOption Icon={AcUnitIcon} title={"testIcon5"} />
        {user.userInfo && (
          <HeaderRightOption
            avatar={user.userInfo?.photoURL}
            title={user.userInfo.displayName}
          />
        )}
      </HeaderRightNav>
    </>
  );
}

const HeaderRightNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default HeaderRight;
