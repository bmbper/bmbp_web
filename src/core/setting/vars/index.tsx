import { useEffect } from "react";
import VarsGrid from "./grid";
import { PageAction } from "./store";
import VarsTree from "./tree";
import { AddDialog, ChangeParentDialog, EditDialog, InfoDialog } from "./dialog";

const VarsTreePage = () => {
  PageAction.init();
  useEffect(() => {
    PageAction.findTreeData();
  }, []);
  return (
    <>
      <div className="bm-h-layout">
        <div className="bm-h-aside bm-w-260">
          <VarsTree />
        </div>
        <div className="bm-h-split bm-bg-gray-1" />
        <div className="bm-h-grow ">
          <VarsGrid />
          <AddDialog/>
          <EditDialog/>
          <InfoDialog/>
          <ChangeParentDialog/>
        </div>
      </div>
    </>
  );
};
export default VarsTreePage;
