import { Modal } from "@arco-design/web-react";
import { PageState } from "./store";
import { AddForm, ChangeParentForm, EditForm, InfoForm } from "./form";

export const AddDictDialog=()=>{
  return (<>
    <Modal
          title='新增字典'
          visible={PageState.addDialogShow}
          onOk={() => {
            PageState.setAddDialogShow(false)
          }}
          onCancel={() => {
            PageState.setAddDialogShow(false)
          }}
        >
          <AddForm/>
        </Modal>
  </>);
}
export const EditDictDialog=() => {
  return (<>
    <Modal
          title='编辑字典'
          visible={PageState.editDialogShow}
          onOk={() => {
            PageState.setEditDialogShow(false)
          }}
          onCancel={() => {
            PageState.setEditDialogShow(false)
          }}
        >
          <EditForm/>
        </Modal>
  </>);
}
export const InfoDictDialog=()=>{
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
export const ChangeParentDialog=() => {
  return (<>
    <Modal
          title='变更上级'
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
