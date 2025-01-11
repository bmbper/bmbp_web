import {
  Button,
  Form,
  Grid,
  Input,
  Pagination,
  Space,
  Table,
} from "@arco-design/web-react";
import { useState } from "react";
const Row = Grid.Row;
const Col = Grid.Col;
const DictGrid = () => {
  return (
    <>
      <div className="bm-grid">
        <div className="bm-grid-search">
          <GridSearchForm />
        </div>
        <div className="bm-grid-toolbar">
          <Button type="primary">新增</Button>
          <Button type="primary">批量启用</Button>
          <Button type="primary">批量停用</Button>
          <Button type="primary" status="danger">
            批量删除
          </Button>
        </div>
        <div className="bm-grid-body">
          <GridTable />
        </div>
        <div className="bm-grid-pagination">
          <Pagination
            total={50}
            current={1}
            pageSize={10}
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
      <Form>
        <Row gutter={24}>
          <Col span={10}>
            <Form.Item label="字典别名">
              <Input placeholder="请输入字典别名" />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item label="字典别名">
              <Input placeholder="请输入字典别名" />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="">
              <Space size={8}>
                <Button type="primary">查询</Button>
                <Button>重置</Button>
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
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Salary",
      dataIndex: "salary",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
  ];
  const data = [
    {
      id: "1",
      name: "Jane Doe",
      salary: 23000,
      address: "32 Park Road, London",
      email: "jane.doe@example.com",
    },
    {
      id: "2",
      name: "Alisa Ross",
      salary: 25000,
      address: "35 Park Road, London",
      email: "alisa.ross@example.com",
    },
    {
      id: "3",
      name: "Kevin Sandra",
      salary: 22000,
      address: "31 Park Road, London",
      email: "kevin.sandra@example.com",
    },
    {
      id: "4",
      name: "Ed Hellen",
      salary: 17000,
      address: "42 Park Road, London",
      email: "ed.hellen@example.com",
    },
    {
      id: "5",
      name: "William Smith",
      salary: 27000,
      address: "62 Park Road, London",
      email: "william.smith@example.com",
    },
  ];
  const [type, setType] = useState("checkbox");
  const [selectedRowKeys, setSelectedRowKeys] = useState(["4"]);

  return (
    <Table
      className={"bm-grid-table"}
      border={true}
      borderCell={true}
      stripe={true}
      checkbox={true}
      checkAll={true}
      rowKey="id"
      columns={columns}
      data={data}
      pagination={false}
      rowSelection={{
        type,
        selectedRowKeys,
        onChange: (selectedRowKeys, selectedRows) => {
          console.log("onChange:", selectedRowKeys, selectedRows);
          setSelectedRowKeys(selectedRowKeys);
        },
        onSelect: (selected, record, selectedRows) => {
          console.log("onSelect:", selected, record, selectedRows);
        },
        checkboxProps: (record) => {
          return {
            disabled: record.id === "4",
          };
        },
      }}
    />
  );
};

export default DictGrid;
