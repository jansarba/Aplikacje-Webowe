import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { ItemsPresenter } from './components/ItemsPresenter'
import './index.css'

function App() {

  return (
    <div className="max-w-full min-h-screen overflow-x-clip bg-darker scrollbar-hide">
      <Header />
        <div className='flex'>
          <Sidebar />
          <div className='flex flex-col text-text p-4 overflow-hidden'>
            <ItemsPresenter />
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default App
