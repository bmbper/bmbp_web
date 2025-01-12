import { useEffect } from "react";
import DictGrid from "./grid";
import { PageAction } from "./store";
import DictTree from "./tree";
import { AddDictDialog, ChangeParentDialog, EditDictDialog, InfoDictDialog } from "./dialog";

const DictTreePage = () => {
  PageAction.init();
  useEffect(() => {
    PageAction.findTreeData();
  }, []);
  return (
    <>
      <div className="bm-h-layout">
        <div className="bm-h-aside bm-w-260">
          <DictTree />
        </div>
        <div className="bm-h-split bm-bg-gray-1" />
        <div className="bm-h-grow ">
          <DictGrid />
          <AddDictDialog/>
          <EditDictDialog/>
          <InfoDictDialog/>
          <ChangeParentDialog/>
        </div>
      </div>
    </>
  );
};
export default DictTreePage;
