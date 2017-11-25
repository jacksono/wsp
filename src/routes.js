import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import HomePage from './components/home/HomePage'
import PraisePage from './components/praise/PraisePage'
import WorshipPage from './components/worship/WorshipPage'
import OthersPage from './components/others/OthersPage'
import S2gPage from './components/s2g/S2gPage'
import Search from './components/admin/search/Search'
import AddPage from './components/admin/addnew/AddPage'
import DetailsPage from './components/details/DetailsPage'
import LyricsPage from './components/lyrics/LyricsPage'


export default (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/home" component={HomePage} />
      <Route path="/praise" component={PraisePage} />
      <Route path="/worship" component={WorshipPage} />
      <Route path="/others" component={OthersPage} />
      <Route path="/s2g" component={S2gPage} />
      <Route path="/details/:song" component={DetailsPage} />
      <Route path="/lyrics/:song" component={LyricsPage} />
      <Route path="/admin" component={Search} />
      <Route path="/admin/new" component={AddPage} />
      <Route path="*" component={HomePage} />
    </Route>
  );
