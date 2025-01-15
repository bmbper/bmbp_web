import { Dropdown, Input, Menu, Popconfirm, Tree } from "@arco-design/web-react";
import { NodeInstance } from "@arco-design/web-react/es/Tree/interface";
import { IconMore, IconPlus, IconRefresh } from "@arco-design/web-react/icon";
import { PageAction, PageState } from "./store";
import { BmbpDict } from "./types";

const MenuItem = Menu.Item;
const DictTree = () => {
	return (
		<>
			<div className="bm-tree">
				<div className="bm-tree-header">
					<div className="bm-tree-header-title">字典设置</div>
					<div className="bm-tree-header-action">
						<IconRefresh
							onClick={() => {
								PageState.setTreeSearchValue("");
								PageAction.findTreeData();
							}}
						/>
						<IconPlus
							onClick={() => {
								PageAction.addBrother(null);
							}}
						/>
					</div>
				</div>
				<div className="bm-v-split bm-bg-gray-1"></div>
				<div className="bm-tree-search">
					<Input.Search
						placeholder="输入关键词"
						searchButton={true}
						value={PageState.treeSearchValue}
						onChange={(value) => {
							PageState.setTreeSearchValue(value);
						}}
						onSearch={() => {
							PageAction.findTreeData();
						}}
					/>
				</div>
				<div className="bm-v-split  bm-bg-gray-1"></div>
				<div className="bm-tree-body">
					<Tree
						blockNode
						showLine={true}
						renderExtra={(node: any) => {
							return renderTreeNodeAction(node.dataRef);
						}}
						onSelect={(
							_selectedKeys: string[],
							extra: {
								selected: boolean;
								selectedNodes: NodeInstance[];
								node: NodeInstance;
								e: Event;
							}
						) => {
							debugger;
							PageState.setCurrentTreeNodeData(extra.node.props.dataRef);
						}}
					>
						{generatorTreeNodes(PageState.treeData)}
					</Tree>
				</div>
			</div>
		</>
	);
};
const generatorTreeNodes = (treeData: BmbpDict[]) => {
	return treeData.map((item) => {
		const { dictChildren, dictCode, dictName } = item;
		return (
			<Tree.Node
				key={dictCode}
				title={dictName}
				dataRef={item}
			>
				{dictChildren ? generatorTreeNodes(item.dictChildren) : null}
			</Tree.Node>
		);
	});
};
const renderTreeNodeAction = (node: BmbpDict) => {
	const moreActionMenu = (
		<Menu>
			<MenuItem
				key="add"
				onClick={() => {
					PageAction.addBrother(node);
				}}
			>
				新增平级
			</MenuItem>
			<MenuItem
				key="addChild"
				onClick={() => {
					PageAction.addChild(node);
				}}
			>
				新增子级
			</MenuItem>
			{node.dataStatus == "0" ? (
				<>
					{" "}
					<MenuItem
						key="edit"
						onClick={() => {
							PageAction.edit(node);
						}}
					>
						编辑
					</MenuItem>
					<MenuItem
						key="enable"
						onClick={() => {
							PageAction.enable(node);
						}}
					>
						启用
					</MenuItem>
					<MenuItem key="remove">
						<Popconfirm
							title="删除确认？"
							content="删除后，字典将无法选择和回显，是否删除?"
							onOk={() => {
								PageAction.remove(node);
							}}
							onCancel={() => {}}
						>
							删除
						</Popconfirm>
					</MenuItem>
				</>
			) : (
				<>
					{" "}
					<MenuItem
						key="disable"
						onClick={() => {
							PageAction.disable(node);
						}}
					>
						停用
					</MenuItem>
				</>
			)}
		</Menu>
	);
	return (
		<>
			<Dropdown
				position={"br"}
				droplist={moreActionMenu}
			>
				<IconMore style={{ color: "#165DFF" }} />
			</Dropdown>
		</>
	);
};
export default DictTree;
