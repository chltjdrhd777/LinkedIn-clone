import React from "react";
import styled from "styled-components/macro";
import HeaderRightOption from "./HeaderRightOption";
import AcUnitIcon from "@material-ui/icons/AcUnit";

function HeaderRight() {
  return (
    <>
      <HeaderRightNav>
        <HeaderRightOption Icon={AcUnitIcon} title={"testIcon1"} />
        <HeaderRightOption Icon={AcUnitIcon} title={"testIcon2"} />
        <HeaderRightOption Icon={AcUnitIcon} title={"testIcon3"} />
        <HeaderRightOption Icon={AcUnitIcon} title={"testIcon4"} />
        <HeaderRightOption Icon={AcUnitIcon} title={"testIcon5"} />
        <HeaderRightOption
          avatar={
            "https://hullandhull.com/wp-content/uploads/2020/06/smiley-10994882.jpg"
          }
          title={"testuser"}
        />
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
