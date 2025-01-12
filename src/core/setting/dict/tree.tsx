import { Dropdown, Input, Menu, Tree } from "@arco-design/web-react";
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
						<IconRefresh />
						<IconPlus />
					</div>
				</div>
				<div className="bm-v-split bm-bg-gray-1"></div>
				<div className="bm-tree-search">
					<Input.Search
						placeholder="输入关键词"
						searchButton={true}
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
							selectedKeys: string[],
							extra: {
								selected: boolean;
								selectedNodes: NodeInstance[];
								node: NodeInstance;
								e: Event;
							}
						) => {
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
const generatorTreeNodes = (treeData) => {
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
					<MenuItem
						key="remove"
						onClick={() => {
							PageAction.remove(node);
						}}
					>
						删除
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
