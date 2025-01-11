import { useState } from "react";
import { BmbpDict } from "./types";
const PageState: { [key: string]: any } = {};
const PageAction: { [key: string]: any } = {
  init: () => {
    const [treeData, setTreeData] = useState([]);
    PageState.treeData = treeData;
    PageState.setTreeData = setTreeData;
    const [treeSearchValue, setTreeSearchValue] = useState("");
    PageState.treeSearchValue = treeSearchValue;
    PageState.setTreeSearchValue = setTreeSearchValue;
  },
  loadInitData: () => {
    const treeData = [
      {
        title: "Trunk",
        key: "0-0",
        children: [
          {
            title: "Leaf",
            key: "0-0-1",
          },
          {
            title: "Branch",
            key: "0-0-2",
            children: [
              {
                title: "Leaf",
                key: "0-0-2-1",
              },
            ],
          },
        ],
      },
      {
        title: "Trunk",
        key: "0-1",
        children: [
          {
            title: "Branch",
            key: "0-1-1",
            children: [
              {
                title: "Leaf",
                key: "0-1-1-1",
              },
              {
                title: "Leaf",
                key: "0-1-1-2",
              },
            ],
          },
          {
            title: "Leaf",
            key: "0-1-2",
          },
        ],
      },
    ];
    PageState.setTreeData(treeData);
  },
  addBrother: (node: BmbpDict) => {},
  addChild: (node: BmbpDict) => {},
  edit: (node: BmbpDict) => {},
  enable: (node: BmbpDict) => {},
  disable: (node: BmbpDict) => {},
  remove: (node: BmbpDict) => {},
};

export { PageAction, PageState };
