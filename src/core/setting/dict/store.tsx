import { Message } from "@arco-design/web-react";
import { useState } from "react";
import HttpUtil from "../../../util/http";
import { BmbpDict } from "./types";
const PageState: { [key: string]: any } = {};

const PageUrl = {
  // 左侧树数据
  treeUrl: "/config/dict/tree",
};

const usePageState = () => {
  // 左侧树数据
  const [treeData, setTreeData] = useState([]);
  PageState.treeData = treeData;
  PageState.setTreeData = setTreeData;

  // 左侧树搜索框
  const [treeSearchValue, setTreeSearchValue] = useState("");
  PageState.treeSearchValue = treeSearchValue;
  PageState.setTreeSearchValue = setTreeSearchValue;

  // 左侧树节点选中数据
  const [currentTreeNodeData, setCurrentTreeNodeData] = useState(null);
  PageState.currentTreeNodeData = currentTreeNodeData;
  PageState.setCurrentTreeNodeData = setCurrentTreeNodeData;

  // 右侧查询数据
  const [queryData, setQueryData] = useState([]);
  PageState.queryData = queryData;
  PageState.setQueryData = setQueryData;
};
const PageAction: { [key: string]: any } = {
  init: usePageState,
  loadInitData: () => {
    HttpUtil.post(PageUrl.treeUrl, {}).then((res: any) => {
      if (res.code === "0") {
        PageState.setTreeData(res.data);
      } else {
        Message.error(res.msg);
      }
    });
  },
  addBrother: (node: BmbpDict) => {},
  addChild: (node: BmbpDict) => {},
  edit: (node: BmbpDict) => {},
  enable: (node: BmbpDict) => {},
  disable: (node: BmbpDict) => {},
  remove: (node: BmbpDict) => {},
};

export { PageAction, PageState };
