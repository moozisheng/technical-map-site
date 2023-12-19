import { useCallback,} from 'react'
import './index.scss'
import {  technicalList } from './data'
import classNames from 'classnames'
import { generateGridTemplateAreas, getColor } from '@/utils/util'
import { Popover } from 'antd'

const ProjectMap = () => {

  const generateGridItem = useCallback(() => {

    return technicalList.map((item, index) => {

      const num = Math.floor(Math.random() * 10)

      const onMouseEnterHandle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const element = e.target as HTMLElement
        element.style.backgroundColor = getColor(index).backgroundColorHover
        element.style.borderColor = getColor(index).borderColorHover
      }

      const onMouseLeaveHandle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const element = e.target as HTMLElement
        element.style.backgroundColor = getColor(index).backgroundColor
        element.style.borderColor = getColor(index).borderColor
      }

      return  <Popover placement="top" title={item.title} content={<div style={{width: 400}}>
        <div>{item.description}</div>
        {item.technologyStack &&  <div>技术栈：{item.technologyStack}</div>}
        {/* <a>查看更多</a> */}
      </div>}>
          <div className={classNames('grid-item',
        item.gridArea.replaceAll('/', '-')
      )}
        key={item.gridArea}
        style={{
          gridArea: item.gridArea.replaceAll('/', '-'),
          borderStyle: num > 7 && num < 10 ? 'dashed' : 'solid',
          backgroundColor: getColor(index).backgroundColor,
          borderColor: getColor(index).borderColor
        }}
        onMouseEnter={onMouseEnterHandle}
        onMouseLeave={onMouseLeaveHandle}
      >
        {item.title}
      </div>
        </Popover>
    })
  }, [])

  return (
    <>
    <div>负责过的项目</div>
      <div className='grid-container' style={{
        gridTemplateAreas: generateGridTemplateAreas(technicalList)
      }}>
        {
          generateGridItem()
        }
      </div>
    </>
  )
}

export default ProjectMap
