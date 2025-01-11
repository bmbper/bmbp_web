import { useState } from "react"
// 全局状态
const PageState: {[key:string]:any} = {
}

// 全局事件
const PageAction = {
  init: () => {
    const [sideMenu, setSideMenu] = useState([]);
    PageState.sideMenu = sideMenu;
    PageState.setSideMenu = setSideMenu;
    const [sideMenuSelectedKey, setSideMenuSelectedKey] = useState([]);
    PageState.sideMenuSelectedKey = sideMenuSelectedKey;
    PageState.setSideMenuSelectedKey = setSideMenuSelectedKey;

    const [breadcrumItems, setBreadcrumItems] = useState([]);
    PageState.breadcrumItems = breadcrumItems;
    PageState.setBreadcrumItems = setBreadcrumItems;

  },
  loadInitData: () => {
    // 构建菜单数据
    const sideMenu:any[] = [
      {
        dataId:"001",
        menuCode:"001",
        menuUrl:"",
        menuName:"配置中心",
        menuNamePath:'#/配置中心/',
        children: [
          {
            dataId: "001-002",
            menuCode: "001-002",
            menuUrl: "",
            menuName: "权限配置",
            menuNamePath:'#/配置中心/权限配置/',
            children: [
              {
                dataId:"001-002-001",
                menuCode:"001-002-001",
                menuUrl:"/rbac/app",
                menuName:"应用管理",
                menuNamePath:'#/配置中心/权限配置/应用管理',
              },
              {
                dataId:"001-002-004",
                menuCode:"001-002-004",
                menuUrl:"/rbac/role",
                menuName:"角色管理",
                menuNamePath:'#/配置中心/权限配置/角色管理',
              },
              {
                dataId:"001-002-002",
                menuCode:"001-002-002",
                menuUrl:"/rbac/organ",
                menuName:"组织管理",
                menuNamePath:'#/配置中心/权限配置/组织管理',
              },
              {
                dataId:"001-002-003",
                menuCode:"001-002-003",
                menuUrl:"/rbac/user",
                menuName:"用户管理",
                  menuNamePath:'#/配置中心/权限配置/用户管理',
              },

            ]
          },
          {
            dataId:"001-001",
            menuCode:"001-001",
            menuUrl:"#",
            menuName:"系统设置",
            menuNamePath:'#/配置中心/系统设置/',
            children:[
              {
                dataId:"001-001-001",
                menuCode:"001-001-001",
                menuUrl:"/config/dict",
                menuName:"字典管理",
                menuNamePath:'#/配置中心/系统设置/字典管理',
                openType:"route" // route | winodw | tab | iframe
              },
              {
                dataId:"001-001-002",
                menuCode:"001-001-002",
                menuUrl:"/config/vars",
                menuName:"参数设置",
                menuNamePath:'#/配置中心/系统设置/参数设置',
                openType:"tab"
              },
              {
                dataId:"001-001-003",
                menuCode:"001-001-003",
                menuUrl:"http://www.baidu.com",
                menuName:"百度一下",
                menuNamePath:'#/配置中心/系统设置/百度一下/',
                menuOpenType:'app',
              },
              {
                dataId:"001-001-004",
                menuCode:"001-001-004",
                menuUrl:"https://arco.design/react/docs/start",
                menuName:"ARCO",
                menuNamePath:'#/配置中心/系统设置/ARCO/',
                menuOpenType:'app',
              },


            ]
          }
        ]
      },
      {
        dataId:"002",
        menuCode:"002",
        menuUrl:"http://www.baidu.com",
        menuName:"百度一下",
        menuNamePath:'',
        menuOpenType:'link',
      },
      {
        dataId:"003",
        menuCode:"003",
        menuUrl:"/config/dict",
        menuName:"字典管理",
        menuNamePath:'',
        menuOpenType:'link',
      }
    ];
    PageState.setSideMenu(sideMenu);
  },
  onSideMenuClick: (item:any) => {
    PageState.setSideMenuSelectedKey([item.menuCode]);
    if (item.menuUrl && item.menuUrl != '#') {
      let menuNamePath = item.menuNamePath ? item.menuNamePath : "";
      if (menuNamePath.startsWith("#")) {
        menuNamePath = menuNamePath.substr(2, menuNamePath.length);
      }
      if (menuNamePath.endsWith("/")) {
        menuNamePath = menuNamePath.substr(0, menuNamePath.length - 1);
      }
      const breadcrumArray = menuNamePath ? menuNamePath.split("/") : [];
      PageState.setBreadcrumItems(breadcrumArray);

      if (item.menuOpenType === "link") {
        if (PageAction.isFullUrl(item.menuUrl)) {
          window.open(item.menuUrl);
        } else {
          let url = window.location.origin;
          if (url.endsWith("/")) {
            url = url.substring(0, url.length - 1) + item.menuUrl;
          } else {
            url += item.menuUrl;
          }
          window.open(url);
        }
      }else {
        if (PageAction.isFullUrl(item.menuUrl)) {
          PageState.navigate("/iframe", { state: { url: item.menuUrl } });
        } else {
          PageState.navigate(item.menuUrl);
        }
      }
    }
  },
  isFullUrl: (url: string)=> {
    return url && (url.startsWith("http://") || url.startsWith("https://"))
  }

}
export { PageState,PageAction};
