import {Modal} from "@arco-design/web-react";
import {PageAction, PageState} from "./store";
import {AddForm, ChangeParentForm, EditForm, InfoForm} from "./form";

export const AddDialog = () => {
    return (<>
        <Modal
            title='新增字典'
            visible={PageState.addDialogShow}
            mountOnEnter={false}
            onOk={() => {
                PageState.addFormRef.current?.validate().then((data) => {
                    PageAction.save(data, (respData) => {
                        PageAction.findTreeData();
                    })
                    PageState.addFormRef.current?.resetFields();
                    PageState.setAddDialogShow(false);

                });
            }}
            onCancel={() => {
                PageState.addFormRef.current?.resetFields();
                PageState.setAddDialogShow(false)
            }}
        >
            <AddForm/>
        </Modal>
    </>);
}
export const EditDialog = () => {
    return (<>
        <Modal
            title='编辑字典'
            mountOnEnter={false}
            visible={PageState.editDialogShow}
            onOk={() => {

                PageState.editFormRef.current?.validate().then((data) => {
                    PageAction.save(data, (respData) => {
                        PageAction.findTreeData();
                    })
                    PageState.editFormRef.current?.resetFields();
                    PageState.setEditDialogShow(false)

                });
            }}
            onCancel={() => {
                PageState.editFormRef.current?.resetFields();
                PageState.setEditDialogShow(false);
            }}
        >
            <EditForm/>
        </Modal>
    </>);
}
export const InfoDialog = () => {
    return (<>
        <Modal
            title='查看字典'
            visible={PageState.infoDialogShow}
            onOk={() => {
                PageState.setInfoDialogShow(false)
            }}
            onCancel={() => {
                PageState.setInfoDialogShow(false)
            }}
        >
            <InfoForm/>
        </Modal>
    </>);
}
export const ChangeParentDialog = () => {
    return (<>
        <Modal
            title='变更上级'
            mountOnEnter={false}
            visible={PageState.changeParentDialogShow}
            onOk={() => {
                PageState.setChangeParentDialogShow(false)
            }}
            onCancel={() => {
                PageState.setChangeParentDialogShow(false)
            }}
        >
            <ChangeParentForm/>
        </Modal>
    </>);
}
