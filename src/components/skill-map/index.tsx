import { useCallback,} from 'react'
import './index.scss'
import {  technicalList } from '@/utils/constants'
import classNames from 'classnames'
import { getColor } from '@/utils/util'

const SkillMap = () => {

  const generateGridTemplateAreas = useCallback(() => {
    const grid_template_areas_arr: any[] = []

    technicalList.forEach(item => {
      const gridArea = item.gridArea
      const gridAreaArr: string[] = item.gridArea.split('/')

      gridAreaArr.forEach((itemGridArea: string) => {
        const row = Number(itemGridArea?.match(/r\d+/)?.toString().replace('r', ''))
        const column = Number(itemGridArea?.match(/c\d+/)?.toString().replace('c', ''))
        if (grid_template_areas_arr[row] === undefined) {
          grid_template_areas_arr[row] = []
          grid_template_areas_arr[row][column] = [gridArea.replaceAll('/', '-')]
        } else {
          grid_template_areas_arr[row][column] = (gridArea.replaceAll('/', '-'))
        }
      })
    })
    const grid_template_areas_string = grid_template_areas_arr
      .map(item => item.join(' '))
      .map(item => ('"' + item + '"'))
      .toString()
      .replaceAll(',', " ")
    console.log('gridTemplateAreas:', grid_template_areas_string);

    return grid_template_areas_string
  }, [])


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

      return <div className={classNames('grid-item',
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
    })
  }, [])

  return (
    <>
      <div className='grid-container' style={{
        gridTemplateAreas: generateGridTemplateAreas()
      }}>
        {
          generateGridItem()
        }
      </div>
    </>
  )
}

export default SkillMap
