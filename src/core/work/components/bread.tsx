import { Breadcrumb } from '@arco-design/web-react';
import { PageState } from '../store';
const BreadcrumbItem = Breadcrumb.Item;
const Bread = () => {
  return (
    <>
      <div className='bm-flex-start bm-h-full bm-w-full bm-p-0'>
      <Breadcrumb>
          {
            PageState.breadcrumItems.map((item:any) => {
              return <BreadcrumbItem key={item}>{item}</BreadcrumbItem>
            })
          }
      </Breadcrumb>
      </div>
    </>
  )
}
export default Bread
