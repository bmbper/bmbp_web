import DictGrid from "./grid"
import DictTree from "./tree"

const DictTreePage=()=> {
  return (
    <>
      <div className="bm-page-full bm-h-layout">
        <div className="bm-h-aside bm-w-320 bm-bg-blue-1">
          <DictTree/>
        </div>
        <div className="bm-h-split bm-bg-gray-1"/>
        <div className="bm-h-grow bm-bg-blue-1">
          <DictGrid/>
        </div>
        </div>
    </>
  )
}
export default DictTreePage
