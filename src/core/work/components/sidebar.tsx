import { Menu } from "@arco-design/web-react"
import {
  IconApps,
} from '@arco-design/web-react/icon';
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const Sidebar = () => {
  return (<>
    <div className="bm-full bm-bg-blue-1">
      <Menu
             style={{ width: '100%', height:'100%' }}
             collapse={false}
             defaultOpenKeys={['0']}
             defaultSelectedKeys={['0_2']}
           >
             <SubMenu
               key='0'
               title={
                 <>
                   <IconApps /> Navigation 1
                 </>
               }
             >
               <MenuItem key='0_0'>Menu 1</MenuItem>
               <MenuItem key='0_1'>Menu 2</MenuItem>
               <MenuItem key='0_2'>Menu 3</MenuItem>
               <MenuItem key='0_3'>Menu 4</MenuItem>
             </SubMenu>
             <SubMenu
               key='1'
               title={
                 <>
                   <IconApps /> Navigation 1
                 </>
               }
             >
               <MenuItem key='1_0'>Menu 1</MenuItem>
               <MenuItem key='1_1'>Menu 2</MenuItem>
               <MenuItem key='1_2'>Menu 3</MenuItem>
               <MenuItem key='1_3'>Menu 4</MenuItem>
             </SubMenu>
           </Menu>
    </div>
  </>)
}
export default Sidebar
