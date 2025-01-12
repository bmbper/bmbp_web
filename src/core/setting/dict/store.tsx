import { Message } from "@arco-design/web-react";
import { useRef, useState } from "react";
import HttpUtil from "../../../util/http";
import { BmbpDict } from "./types";
const PageState: { [key: string]: any } = {};

const PageUrl = {
	// 左侧树数据
	treeUrl: "/config/dict/tree",
	pageUrl: "/config/dict/page",
};

const usePageInit = () => {
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
	PageState.queryFormRef = useRef(null);
	// 右侧表格数据
	const [tableData, setTableData] = useState([]);
	PageState.tableData = tableData;
	PageState.setTableData = setTableData;
	// 右侧表格选中数据
	const [selectedRowKeys, setSelectedRowKeys] = useState([]);
	PageState.selectedRowKeys = selectedRowKeys;
	PageState.setSelectedRowKeys = setSelectedRowKeys;

	// 右侧分页数据
	const [pagination, setPagination] = useState({
		pageNum: 1,
		pageSize: 2,
		total: 0,
	});
	PageState.pagination = pagination;
	PageState.setPagination = setPagination;

	// 新增对话框
  const [addDialogShow, setAddDialogShow] = useState(false);
  PageState.addDialogShow = addDialogShow;
  PageState.setAddDialogShow = setAddDialogShow;
  PageState.addFormRef = useRef();

  // 编辑对话框
  const [eidtDialogShow, setEditDialogShow] = useState(false);
  PageState.eidtDialogShow = eidtDialogShow;
  PageState.setEditDialogShow = setEditDialogShow;
  PageState.editFormRef = useRef();



  // 查看对话框
    const [infoDialogShow, setInfoDialogShow] = useState(false);
    PageState.infoDialogShow = infoDialogShow;
    PageState.setInfoDialogShow = setInfoDialogShow;
    PageState.infoFormRef = useRef();

    // 变更上级对话框
      const [changeParentDialogShow, setChangeParentDialogShow] = useState(false);
      PageState.changeParentDialogShow = changeParentDialogShow;
      PageState.setChangeParentDialogShow = setChangeParentDialogShow;
      PageState.changeParentFormRef = useRef();



};
const PageAction: { [key: string]: any } = {
	init: usePageInit,
	findTreeData: () => {
		HttpUtil.post(PageUrl.treeUrl, {}).then((res: any) => {
			if (res.code === "0") {
				PageState.setTreeData(res.data);
			} else {
				Message.error(res.msg);
			}
		});
	},
	findTableData: () => {
		const parmas = {
			pageNum: PageState.pagination.pageNum,
			pageSize: PageState.pagination.pageSize,
			params: {
				...PageState.queryData,
				dictParentCode: PageState.currentTreeNodeData?.dictCode,
			},
		};
		HttpUtil.post(PageUrl.pageUrl, parmas).then((res: any) => {
			if (res.code === "0") {
				const pageData = res.data;
				PageState.setTableData(pageData.data);
				PageState.setPagination({
					...PageState.pagination,
					total: pageData.total,
				});
			} else {
				Message.error(res.msg);
			}
		});
	},
	addDict: (node: BmbpDict) => {
    PageState.setAddDialogShow(true);
	},
	addBrother: (node: BmbpDict) => {
    PageState.setAddDialogShow(true);
	},
	addChild: (node: BmbpDict) => {
	 PageState.setAddDialogShow(true);
	},
	edit: (node: BmbpDict) => {
	 PageState.setEditDialogShow(true);
	},
	changeParent: (node: BmbpDict) => {
	 PageState.setChangeParentDialogShow(true);
	},
	enable: (node: BmbpDict) => {
	 Message.info("启用功能开发中...")
	},
	disable: (node: BmbpDict) => {
    Message.info("停用功能开发中...")
	},
	remove: (node: BmbpDict) => {
	 Message.info("删除功能开发中...")
	},
	batchEnable: (node: BmbpDict) => {
	 Message.info("批量启用功能开发中...")
	},
	batchDisable: (node: BmbpDict) => {
    Message.info("批量停用功能开发中...")
	},
	batchRemove: (node: BmbpDict) => {
	 Message.info("批量删除功能开发中...")
	},
};

export { PageAction, PageState };
