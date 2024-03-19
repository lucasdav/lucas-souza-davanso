import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'
import MainContentPdf from './pdf/MainContentPdf'
import MainContentEnglishPdf from './pdfEnglish/MainContentEnglishPdf'

import './styles/components/app.sass'


function App() {

  return (
    <div>
      <div id="portfolio">
        <Sidebar />
        <MainContent />
      </div>
      <div id="portfolio-pdf">
        <MainContentPdf />
      </div>
      <div id="portfolio-pdf">
        <MainContentEnglishPdf />
      </div>
    </div>
  )
}

export default App
