import AddMeeting from '../../Pages/AddMeeting/AddMeeting'
import Main from '../../Pages/Main/Main'
import Page404 from '../../Pages/Page404/Page404'
import './MainRoute.css'
import { Route, Routes } from 'react-router-dom'

function MainRoute(): JSX.Element {
  return (
    <div className="MainRoute">
      <Routes>
        <Route path="/newMeeting" element={<AddMeeting />} />
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  )
}

export default MainRoute
