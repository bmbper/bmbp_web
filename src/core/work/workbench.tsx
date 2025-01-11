import { Outlet, useNavigate } from "react-router";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Bread from "./components/bread";
import { useEffect } from "react";
import {PageAction, PageState } from "./store";

const Workbench = () => {
  const  navigate = useNavigate();
  PageAction.init();
  useEffect(() => {
    PageState.navigate = navigate;
    PageAction.loadInitData();
  },[])
  return (
    <>
      <div className="bm-v-layout">
        <div className="bm-v-header bm-h-48 bm-bg-blue-6 bm-text-white bm-p-h-5">
          <Header/>
        </div>
        <div className="bm-v-grow bm-h-layout">
          <div className="bm-h-aside bm-w-200">
           <Sidebar />
          </div>
          <div className="bm-v-split bm-bg-gray-1"/>
          <div className="bm-v-grow bm-v-layout">
            <div className="bm-v-header bm-h-32 bm-p-h-5 bm-bg-gray-1">
              <Bread/>
            </div>
            <div className="bm-v-grow bm-page-full">
              <Outlet/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Workbench;
