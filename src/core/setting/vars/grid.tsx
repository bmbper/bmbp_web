import { Button, Form, Grid, Input, Pagination, Popconfirm, Space, Table } from "@arco-design/web-react";
import { useEffect } from "react";
import { PageAction, PageState } from "./store";
import { BmbpDict } from "./types";

const Row = Grid.Row;
const Col = Grid.Col;
const DictGrid = () => {
	useEffect(() => {
		PageAction.findTableData();
	}, [PageState.currentTreeNodeData, PageState.queryData, PageState.pagination.pageNum, PageState.pagination.pageSize]);
	return (
		<>
			<div className="bm-grid">
				<div className="bm-grid-search">
					<GridSearchForm />
				</div>
				<div className="bm-grid-toolbar">
					<Button
						type="primary"
						onClick={() => {
							PageAction.addChild(PageState.currentTreeNodeData);
						}}
					>
						新增
					</Button>
					{PageState.selectedRowKeys && PageState.selectedRowKeys.length > 0 ? (
						<>
							<Button
								type="primary"
								onClick={() => {
									PageAction.batchEnable();
								}}
							>
								批量启用
							</Button>
							<Button
								type="primary"
								onClick={() => {
									PageAction.batchDisable();
								}}
							>
								批量停用
							</Button>
							<Popconfirm
								title="删除确认？"
								content="删除后，字典将无法选择和回显，是否删除?"
								onOk={() => {
									PageAction.batchRemove();
								}}
								onCancel={() => {}}
							>
								<Button
									type="primary"
									status="danger"
								>
									批量删除
								</Button>
							</Popconfirm>
						</>
					) : null}
				</div>
				<div className="bm-grid-body">
					<GridTable />
				</div>
				<div className="bm-grid-pagination">
					<Pagination
						total={PageState.pagination.total}
						current={PageState.pagination.pageNum}
						pageSize={PageState.pagination.pageSize}
						onChange={(pageNum, pageSize) => {
							PageState.setPagination({
								...PageState.pagination,
								pageNum,
								pageSize,
							});
						}}
						showTotal
						showJumper
						sizeCanChange
					/>
				</div>
			</div>
		</>
	);
};

const GridSearchForm = () => {
	return (
		<>
			<Form ref={PageState.queryFormRef}>
				<Row gutter={24}>
					<Col span={10}>
						<Form.Item
							label="字典别名"
							field="varsAlias"
						>
							<Input placeholder="请输入字典别名" />
						</Form.Item>
					</Col>
					<Col span={10}>
						<Form.Item
							label="字典名称"
							field="varsName"
						>
							<Input placeholder="请输入字典名称" />
						</Form.Item>
					</Col>
					<Col span={4}>
						<Form.Item label="">
							<Space size={8}>
								<Button
									type="primary"
									onClick={() => {
										const queryData = PageState.queryFormRef.current?.getFieldsValue();
										PageState.setQueryData(queryData);
									}}
								>
									查询
								</Button>
								<Button
									onClick={() => {
										PageState.queryFormRef.current?.resetFields();
										PageState.setQueryData({});
									}}
								>
									重置
								</Button>
							</Space>
						</Form.Item>
					</Col>
				</Row>
			</Form>
		</>
	);
};
const GridTable = () => {
	const columns = [
		{
			title: "序号",
			dataIndex: "varsCode",
			width: 64,
			render: (_col: any, _record: any, index: any) => {
				return (PageState.pagination.pageNum - 1) * PageState.pagination.pageSize + index + 1;
			},
		},
		{
			title: "字典名称",
			dataIndex: "varsName",
		},
		{
			title: "字典值",
			dataIndex: "varsValue",
		},
		{
			title: "助记符",
			dataIndex: "varsAlias",
		},
		{
			title: "显示顺序",
			dataIndex: "dataOrder",
			width: 120,
		},
		{
			title: "操作",
			dataIndex: "dataId",
			width: 280,
			render: (_col: any, record: any, _index: any) => {
				return (
					<div className="bm-grid-table-row-action">
						<Button
							type="text"
							onClick={() => {
								PageAction.addBrother(record);
							}}
						>
							新增平级
						</Button>
						<Button
							type="text"
							onClick={() => {
								PageAction.addChild(record);
							}}
						>
							新增子级
						</Button>
						{renderRowAction(record)}
					</div>
				);
			},
		},
	];
	return (
		<>
			<Table
				className={"bm-grid-table"}
				border={true}
				borderCell={true}
				stripe={true}
				rowKey="varsCode"
				columns={columns}
				data={PageState.tableData}
				pagination={false}
				rowSelection={{
					checkAll: true,
					selectedRowKeys: PageState.selectedRowKeys,
					onChange: (selectedRowKeys) => {
						PageState.setSelectedRowKeys(selectedRowKeys);
					},
				}}
			/>
		</>
	);
};
const renderRowAction = (record: BmbpDict) => {
	if (record.dataStatus === "0") {
		return (
			<>
				<Button
					type="text"
					onClick={() => {
						PageAction.edit(record);
					}}
				>
					编辑
				</Button>
				<Button
					type="text"
					onClick={() => {
						PageAction.enable(record);
					}}
				>
					启用
				</Button>
				<Popconfirm
					title="删除确认？"
					content="删除后，字典将无法选择和回显，是否删除?"
					onOk={() => {
						PageAction.remove(record);
					}}
					onCancel={() => {}}
				>
					<Button
						type="text"
						status="danger"
					>
						删除
					</Button>
				</Popconfirm>
			</>
		);
	} else {
		return (
			<>
				<Button
					type="text"
					onClick={() => {
						PageAction.disable(record);
					}}
				>
					停用
				</Button>
			</>
		);
	}
};
export default DictGrid;
