import React from 'react'

const LogOut = React.lazy(() =>import('./Account/LogOut'))
const Profile = React.lazy(()=>import('./Account/Profile'))
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const TodoIndex = React.lazy(() => import('./views/base/TodoIndex/TodoIndex'))
const SavedNotes = React.lazy(() => import('./views/base/Note/SavedNotes'))
const ChangePassword = React.lazy(() =>import('./Account/ChangePassword'))



const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path:'dashboard', name: 'Dashboard', element: Dashboard },
  {path:'base/TodoIndex', name:'todoindex', element: TodoIndex},
  {path:'base/notes', name:'savedNotes', element: SavedNotes},
  { path: 'profile', name: 'ProfileView', element: Profile },
  { path: 'logout', name: 'LogOut', element: LogOut },
  { path: 'changePassword', name: 'changePassword', element: ChangePassword }
]

export default routes





