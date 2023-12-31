import { Body } from './components/body'
import { Navbar } from './components/navbar'
import { OffcanvasSidebar } from './components/offcanvasSidebar'
import { Sidebar } from './components/sidebar'

function App() {
  return (
    <div className=" d-flex justify-content-between">
      <div className="sidebar-wrapper">
        <Sidebar />
      </div>
      <div
        className="w-100"
        style={{ height: '100svh', overflow: 'auto', paddingBottom: '100px' }}
      >
        <Navbar />
        <Body />
      </div>
    </div>
  )
}

export default App
