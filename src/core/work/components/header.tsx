import { Avatar, Badge, Dropdown, Menu } from "@arco-design/web-react"
import { IconFullscreen, IconNotification } from "@arco-design/web-react/icon"
import './header.scss';
const UserSetting = () => {
  return (
    <>
      <div className="header-full">
        <div className="header-item">
          <IconFullscreen style={{
            color: '#fff',
            fontSize: 24,
          }} />
        </div>
        <div className="header-item">
          <Badge count={9} dot offset={[2, -2]}>
                  <IconNotification
                    style={{
                      color: '#fff',
                      fontSize: 24,
                    }}
                  />
                </Badge>
        </div>

        <div className="header-item">
          <Dropdown position={'br'} droplist={
                      <Menu>
                        <Menu.Item key='1'>个人中心</Menu.Item>
                        <Menu.Item key='2'>修改密码</Menu.Item>
                        <div style={{ width: "100%",height:'1px',padding:0,margin:0,background:"#F2F3F5"}}/>
                        <Menu.Item key='3'>退出</Menu.Item>
                      </Menu>
                    }
          >
            <Avatar size={24} style={{
              background:"#FFF"
            }}>
                  <span style={{color:'#165DFF'}}>M</span>
            </Avatar>
          </Dropdown>
        </div>


      </div>

    </>
  )
}

const Header = () => {
  return (<>
    <div className="bm-full bm-flex">
      <div className="bm-h-aside bm-w-200 bm-flex-start">
        <div className="bm-logo bm-w-32 bm-h-32">
          <img src="/favicon.ico"/>
        </div>
        <div className="bm-font-18 bm-font-title">
          简逸认证中心
        </div>
      </div>
      <div className="bm-h-grow bm-flex-start bm-p-h-5" >

      </div>
      <div className="bm-h-aside bm-w-200  bm-flex-end" >
        <UserSetting/>
      </div>
    </div>
  </>)
}
export default Header
