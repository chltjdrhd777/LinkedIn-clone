import React from "react";
import styled from "styled-components";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import HeadsetIcon from "@material-ui/icons/Headset";
import HourglassFullIcon from "@material-ui/icons/HourglassFull";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import AndroidIcon from "@material-ui/icons/Android";

function FeedInputOptions() {
  const iconDataSets = [
    { Icon: CreateNewFolderIcon, title: "testIcon1", color: "#99f899" },
    { Icon: HeadsetIcon, title: "testIcon2", color: "#99caf8" },
    { Icon: HourglassFullIcon, title: "testIcon3", color: "#f8df99" },
    { Icon: PhotoLibraryIcon, title: "testIcon4", color: "#f89c99" },
    { Icon: AndroidIcon, title: "testIcon5", color: "#99aff8" },
  ];

  return (
    <FeedOptionsDiv>
      {iconDataSets.map((data) => (
        <div className="feedeOption_detail" key={Math.random()}>
          <data.Icon
            className="feedOption_Icon"
            style={{ color: `${data.color}` }}
          />
          <h4>{data.title}</h4>
        </div>
      ))}
    </FeedOptionsDiv>
  );
}

const FeedOptionsDiv = styled.div`
  display: flex;
  padding: 5px 20px;
  justify-content: space-between;

  & .feedeOption_detail {
    display: flex;
    align-items: center;
    color: gray;
    cursor: pointer;
    &:hover {
      color: black;
    }

    & .feedOption_Icon {
      margin: 10px;
    }

    & h4 {
      font-size: 0.7rem;
    }
  }
`;

export default FeedInputOptions;
