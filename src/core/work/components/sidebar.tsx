import { Menu } from "@arco-design/web-react"
import { PageAction, PageState } from "../store";
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const renderSubMenu = (menus:any[]) => {
  return menus.map((item) => {
      if (item.children && item.children.length > 0) {
        return (
          <SubMenu
            key={item.menuCode}
            title={
              <>
                {item.menuName}
              </>
            }
            onClick={(e) => {
               e.stopPropagation();
              PageAction.onSideMenuClick(item);
            }}
          >
            {renderSubMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <MenuItem key={item.menuCode}  onClick={(e) => {
           e.stopPropagation();
          PageAction.onSideMenuClick(item);
        }}>
          {item.menuName}
        </MenuItem>
      );
    });
}
const Sidebar = () => {
  return (<>
    <div className="bm-full bm-bg-blue-1">
      <Menu
             style={{ width: '100%', height:'100%' }}
             collapse={false}
             ellipsis={true}
             accordion
           >
            {
              renderSubMenu(PageState.sideMenu)
            }
           </Menu>
    </div>
  </>)
}
export default Sidebar
