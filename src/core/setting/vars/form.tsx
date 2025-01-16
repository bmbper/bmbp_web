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
				label="参数主键"
				field="dataId"
				hidden={true}
			>
				<Input placeholder="参数主键" />
			</Form.Item>
			<Form.Item
				label="上级参数编码"
				field="varsParentCode"
				hidden={true}
			>
				<Input placeholder="上级参数编码" />
			</Form.Item>
			<Form.Item
				label="上级参数"
				field="varsParentNamePath"
			>
				<Input
					placeholder=""
					readOnly
				/>
			</Form.Item>
			<Form.Item
				label="参数名称"
				field="varsName"
				rules={[
					{ required: true, message: "请输入参数名称" },
					{ maxLength: 64, message: "参数名称长度不能超过64个字符" },
				]}
			>
				<Input placeholder="请输入参数名称" />
			</Form.Item>
			<Form.Item
				label="参数值"
				field="varsValue"
				rules={[
					{ required: true, message: "请输入参数值" },
					{ maxLength: 64, message: "参数值长度不能超过64个字符" },
				]}
			>
				<Input placeholder="请输入参数值" />
			</Form.Item>
			<Form.Item
				label="参数别名"
				field="varsAlias"
				rules={[
					{ required: true, message: "请输入参数别名" },
					{ maxLength: 64, message: "参数别名长度不能超过64个字符" },
				]}
			>
				<Input placeholder="请输入参数别名" />
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
