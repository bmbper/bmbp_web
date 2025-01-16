import { Message } from "@arco-design/web-react";
import { useRef, useState } from "react";
import HttpUtil from "../../../util/http";
import { BmbpDict } from "./types";

const PageState: { [key: string]: any } = {};

const PageUrl = {
	// 左侧树数据
	treeUrl: "/config/vars/tree",
	pageUrl: "/config/vars/page",
	infoUrl: "/config/vars/info",
	saveUrl: "/config/vars/save",
	changeParentUrl: "/config/vars/changeParent",
	enableUrl: "/config/vars/enable",
	disableUrl: "/config/vars/disable",
	deleteUrl: "/config/vars/delete",
	batchEnableUrl: "/config/vars/batch/enable",
	batchDisableUrl: "/config/vars/batch/disable",
	batchDeleteUrl: "/config/vars/batch/delete",
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
		pageSize: 10,
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
	const [editDialogShow, setEditDialogShow] = useState(false);
	PageState.editDialogShow = editDialogShow;
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

	// 当前表单字典数据
	const [currentFormData, setCurrentFormData] = useState({});
	PageState.setCurrentFormData = setCurrentFormData;
	PageState.currentFormData = currentFormData;
};
const PageAction: { [key: string]: any } = {
	init: usePageInit,
	findTreeData: () => {
		HttpUtil.post(PageUrl.treeUrl, {}).then((res: any) => {
			if (res.code === "0") {
				PageState.setTreeData(res.data);
				PageAction.findTableData();
				PageState.setSelectedRowKeys([]);
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
				varsCode: PageState.currentTreeNodeData?.varsCode,
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
	addBrother: (node: BmbpDict) => {
		let currentFormData = {
			varsParentCode: "",
			varsParentNamePath: "",
		};
		if (node == null) {
			currentFormData.varsParentCode = "#";
			currentFormData.varsParentNamePath = "#";
		} else {
			currentFormData.varsParentCode = node.varsParentCode;
			let currentNamePath = "/" + node.varsName + "/";
			let varsParentNamePath = node.varsNamePath.substr(0, node.varsNamePath.length - currentNamePath.length);
			currentFormData.varsParentNamePath = varsParentNamePath;
		}
		PageState.setCurrentFormData(currentFormData);
		PageState.setAddDialogShow(true);
	},
	addChild: (node: BmbpDict) => {
		let currentFormData = {
			varsParentCode: "",
			varsParentNamePath: "",
		};
		if (node == null) {
			currentFormData.varsParentCode = "#";
			currentFormData.varsParentNamePath = "#";
		} else {
			currentFormData.varsParentCode = node.varsCode;
			currentFormData.varsParentNamePath = node.varsNamePath;
		}
		PageState.setCurrentFormData(currentFormData);
		PageState.setAddDialogShow(true);
	},
	edit: (node: BmbpDict) => {
		HttpUtil.post(PageUrl.infoUrl, { dataId: node.dataId }).then((res: any) => {
			if (res.code === "0") {
				let varsData = res.data;
				let varsNamePath = varsData.varsNamePath;
				let currentNamePath = "/" + varsData.varsName + "/";
				let varsParentNamePath = varsNamePath.substr(0, varsNamePath.length - currentNamePath.length);
				varsData.varsParentNamePath = varsParentNamePath;
				PageState.setCurrentFormData(varsData);
				PageState.setEditDialogShow(true);
			} else {
				Message.error(res.msg);
			}
		});
	},
	info: (node: BmbpDict) => {
		HttpUtil.post(PageUrl.infoUrl, { dataId: node.dataId }).then((res: any) => {
			if (res.code === "0") {
				PageState.setCurrentFormData(res.data);
				PageState.setInfoDialogShow(true);
			} else {
				Message.error(res.msg);
			}
		});
	},
	save: (node: BmbpDict, callback) => {
		HttpUtil.post(PageUrl.saveUrl, node).then((res: any) => {
			if (res.code === "0") {
				callback(res.data);
			} else {
				Message.error(res.msg);
			}
		});
	},
	changeParent: (node: BmbpDict) => {
		PageState.setChangeParentDialogShow(true);
	},
	enable: (node: BmbpDict) => {
		HttpUtil.post(PageUrl.enableUrl, { dataId: node.dataId }).then((res: any) => {
			if (res.code === "0") {
				PageAction.findTreeData();
			} else {
				Message.error(res.msg);
			}
		});
	},
	disable: (node: BmbpDict) => {
		HttpUtil.post(PageUrl.disableUrl, { dataId: node.dataId }).then((res: any) => {
			if (res.code === "0") {
				PageAction.findTreeData();
			} else {
				Message.error(res.msg);
			}
		});
	},
	remove: (node: BmbpDict) => {
		HttpUtil.post(PageUrl.deleteUrl, { dataId: node.dataId }).then((res: any) => {
			if (res.code === "0") {
				PageAction.findTreeData();
			} else {
				Message.error(res.msg);
			}
		});
	},
	batchEnable: (node: BmbpDict) => {
		HttpUtil.post(PageUrl.batchEnableUrl, { batchVo: PageState.selectedRowKeys }).then((res: any) => {
			if (res.code === "0") {
				PageAction.findTreeData();
			} else {
				Message.error(res.msg);
			}
		});
	},
	batchDisable: (node: BmbpDict) => {
		HttpUtil.post(PageUrl.batchDisableUrl, { batchVo: PageState.selectedRowKeys }).then((res: any) => {
			if (res.code === "0") {
				PageAction.findTreeData();
			} else {
				Message.error(res.msg);
			}
		});
	},
	batchRemove: (node: BmbpDict) => {
		HttpUtil.post(PageUrl.batchDeleteUrl, { batchVo: PageState.selectedRowKeys }).then((res: any) => {
			if (res.code === "0") {
				PageAction.findTreeData();
			} else {
				Message.error(res.msg);
			}
		});
	},
};

export { PageAction, PageState };
