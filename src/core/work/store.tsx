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

    const [breadcrumItems, setBreadcrumItems] = useState([]);
    PageState.breadcrumItems = breadcrumItems;
    PageState.setBreadcrumItems = setBreadcrumItems;


  },
  loadInitData: () => {
      let bread = ["首页","测试","DEMO"]
    PageState.setBreadcrumItems(bread);
  }

}
export { PageState,PageAction};
