import { Form,Input } from "@arco-design/web-react"
import React from "react";

export const AddForm = () => {
  return (<>
    <Form>
      <FormItems/>
    </Form>
  </>)
}


export const EditForm = () => {
  return (<>
    <Form>
      <FormItems/>
    </Form>
  </>)
}


export const InfoForm = () => {
  return (<>
    <Form>
      <FormItems/>
    </Form>
  </>)
}

export const ChangeParentForm = () => {
  return (<>
    <Form>
      <FormItems/>
    </Form>
  </>)
}


const FormItems = () => {
  return (<>
    <Form.Item label="字典名称" name="name" required>
      <Input placeholder="请输入字典名称" />
    </Form.Item>
    <Form.Item label="字典名称" name="name" required>
      <Input placeholder="请输入字典名称" />
    </Form.Item>
    <Form.Item label="字典名称" name="name" required>
      <Input placeholder="请输入字典名称" />
    </Form.Item>
    <Form.Item label="字典名称" name="name" required>
      <Input placeholder="请输入字典名称" />
    </Form.Item>
    <Form.Item label="字典名称" name="name" required>
      <Input placeholder="请输入字典名称" />
    </Form.Item>
    <Form.Item label="字典名称" name="name" required>
      <Input placeholder="请输入字典名称" />
    </Form.Item>
    <Form.Item label="字典名称" name="name" required>
      <Input placeholder="请输入字典名称" />
    </Form.Item>
  </>)
}
