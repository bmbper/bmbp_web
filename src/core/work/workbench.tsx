import { Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

const Workbench = () => {
  return (
    <>
      <Layout className="tw-w-full tw-h-full tw-flex-col">
        <Header className="tw-w-full tw-h-[48px] tw-bg-blue-500">
          <div className="tw-text-xl tw-font-bold tw-px-4">顶部导航栏</div>
        </Header>
        <Layout className="tw-flex-auto tw-w-full">
          <Sider className="tw-w-240">
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={[
                { key: "1", label: "菜单项 1" },
                { key: "2", label: "菜单项 2" },
                { key: "3", label: "菜单项 3" },
              ]}
            />
          </Sider>
          <Layout>
            <Content className="tw-p-4 tw-bg-gray-100">
              <div className="tw-bg-white tw-p-6 tw-rounded shadow">
                <h1 className="tw-text-2xl tw-font-bold tw-mb-4">
                  主要内容区域
                </h1>
                <p>这里是页面的主要内容。</p>
              </div>
            </Content>
            <Footer className="tw-text-center tw-bg-gray-200 tw-p-1">
              底部信息 ©2023
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};
export default Workbench;
