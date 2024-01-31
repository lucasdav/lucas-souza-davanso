import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'
import MainContentPdf from './pdf/MainContentPdf'

import './styles/components/app.sass'


function App() {

  return (
    <div id="portfolio-pdf">
      {/* <Sidebar />
      <MainContent /> */}
      <MainContentPdf/>
    </div>
  )
}

export default App
