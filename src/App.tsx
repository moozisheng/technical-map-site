import './App.css'

const jsonData = [

  {
    "title": "r0c0",
    "floor": 1,
    "gridArea": "r0c0",
    "url": "",
    "implement": true,
    color: "yellow"
  },
  {
    "title": "r0c1",
    "floor": 1,
    "gridArea": "r0c1",
    "url": "",
    "implement": true,
    color: "yellow"
  },
  {
    "title": "r0c2/r0c2",
    "floor": 1,
    "gridArea": "r0c2/r0c2",
    "url": "",
    "implement": true,
    color: "yellow"
  },
  {
    "title": "行业洞察",
    "floor": 2,
    "gridArea": "r1c0",
    "//url": "https://yuque.antfin.com/aligames_dt/ww6sdg",
    "//description": "发现游戏行业热点和动向、发现新游",
    "//detail": "基于外部市场数据和自身数据的深入分析，建立游戏基础信息数据库，具备基础的游戏基础信息、舆情、用户画像等分析洞察能力，为新游分析决策提供数据支持",
    "implement": false,
    color: "yellow"
  },
  {
    "title": "r1c1",
    "floor": 1,
    "gridArea": "r1c1",
    "url": "",
    "implement": true,
    color: "yellow"
  },
  {
    "title": "r1c2",
    "floor": 1,
    "gridArea": "r1c2",
    "url": "",
    "implement": true,
    color: "yellow"
  },
  {
    "title": "r1c3",
    "floor": 1,
    "gridArea": "r1c3",
    "url": "",
    "implement": true,
    color: "yellow"
  },
  {
    "title": "r2c0",
    "floor": 1,
    "gridArea": "r2c0",
    "url": "",
    "implement": true,
    color: "yellow"
  },
  {
    "title": "r2c1",
    "floor": 1,
    "gridArea": "r2c1",
    "url": "",
    "implement": true,
    color: 'red'
  },
  {
    "title": "r2c2/r2c2",
    "floor": 1,
    "gridArea": "r2c2/r2c2",
    "url": "",
    "implement": true,
    color: 'green'
  }
]

function App() {



  const grid_template_areas_arr: any = []


  jsonData.forEach(item => {
    const gridAreaArr: string[] = item.gridArea.split('/')
    gridAreaArr.forEach((gridArea: string) => {
      const row = Number(gridArea?.match(/r\d+/)?.toString().replace('r', ''))
      if (grid_template_areas_arr[row] === undefined) {
        grid_template_areas_arr[row] = [gridArea]
      } else {
        grid_template_areas_arr[row].push(gridArea)
      }
    })
  })



  const grid_template_areas_string = grid_template_areas_arr
    .map(item => item.join(' '))
    .map(item => ('"' + item + '"'))
    .toString()
    .replaceAll(',', " ")









  return (
    <>
      <div className='grid-container' style={{
        gridTemplateAreas: grid_template_areas_string
      }}>
        {
          jsonData.map(item => {
            return <div className='' key={item.gridArea} style={{ gridArea: item.gridArea, color: 'white', backgroundColor: item.color }}>{item.title}</div>
          })
        }
      </div>




    </>
  )
}

export default App
