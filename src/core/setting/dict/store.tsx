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
};
const PageAction: { [key: string]: any } = {
	init: usePageState,
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
	addBrother: (node: BmbpDict) => {},
	addChild: (node: BmbpDict) => {},
	edit: (node: BmbpDict) => {},
	enable: (node: BmbpDict) => {},
	disable: (node: BmbpDict) => {},
	remove: (node: BmbpDict) => {},
};

export { PageAction, PageState };
