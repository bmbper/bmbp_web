import { Form, Input, InputNumber } from "@arco-design/web-react";
import { useEffect } from "react";
import { PageState } from "./store";

export const AddForm = () => {
	useEffect(() => {
		if (PageState.addDialogShow) {
			PageState.addFormRef.current?.setFieldsValue(PageState.currentFormData);
		}
	}, [PageState.addDialogShow]);
	return (
		<>
			<Form ref={PageState.addFormRef}>
				<FormItems />
			</Form>
		</>
	);
};

export const EditForm = () => {
	useEffect(() => {
		if (PageState.editDialogShow) {
			PageState.editFormRef.current?.setFieldsValue(PageState.currentFormData);
		}
	}, [PageState.editDialogShow]);
	return (
		<>
			<Form ref={PageState.editFormRef}>
				<FormItems />
			</Form>
		</>
	);
};

export const InfoForm = () => {
	return (
		<>
			<Form>
				<FormItems />
			</Form>
		</>
	);
};

export const ChangeParentForm = () => {
	return (
		<>
			<Form>
				<FormItems />
			</Form>
		</>
	);
};

const FormItems = () => {
	return (
		<>
			<Form.Item
				label="字典主键"
				field="dataId"
				hidden={true}
			>
				<Input placeholder="字典主键" />
			</Form.Item>
			<Form.Item
				label="上级字典编码"
				field="dictParentCode"
				hidden={true}
			>
				<Input placeholder="上级字典编码" />
			</Form.Item>
			<Form.Item
				label="上级字典"
				field="dictParentNamePath"
			>
				<Input
					placeholder=""
					readOnly
				/>
			</Form.Item>
			<Form.Item
				label="字典名称"
				field="dictName"
				rules={[
					{ required: true, message: "请输入字典名称" },
					{ maxLength: 64, message: "字典名称长度不能超过64个字符" },
				]}
			>
				<Input placeholder="请输入字典名称" />
			</Form.Item>
			<Form.Item
				label="字典值"
				field="dictValue"
				rules={[
					{ required: true, message: "请输入字典值" },
					{ maxLength: 64, message: "字典值长度不能超过64个字符" },
				]}
			>
				<Input placeholder="请输入字典值" />
			</Form.Item>
			<Form.Item
				label="字典别名"
				field="dictAlias"
				rules={[
					{ required: true, message: "请输入字典别名" },
					{ maxLength: 64, message: "字典别名长度不能超过64个字符" },
				]}
			>
				<Input placeholder="请输入字典别名" />
			</Form.Item>
			<Form.Item
				label="显示顺序"
				field="dataOrder"
				required
			>
				<InputNumber placeholder="请输入显示顺序" />
			</Form.Item>
		</>
	);
};
