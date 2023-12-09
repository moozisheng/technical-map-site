import './App.scss'
import Blog from './components/blog'
import ProjectMap from './components/project-map'
import SkillMap from './components/skill-map'

function App() {


  return (
    <div className='app-container'>
      <h1>mozi 技能图谱</h1>
      <Blog />
      <SkillMap />
      <ProjectMap />
    </div>
  )
}

export default App
