import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import CategoriesPage from './components/categories/CategoriesPage'
import PraisePage from './components/praise/PraisePage'
import WorshipPage from './components/worship/WorshipPage'
import OthersPage from './components/others/OthersPage'
import S2gPage from './components/s2g/S2gPage'
import Search from './components/admin/search/Search'
import AddPage from './components/new/AddPage'
import DetailsPage from './components/details/DetailsPage'
import LyricsPage from './components/lyrics/LyricsPage'
import Dashboard from './components/home/Dashboard'


export default (
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="/home" component={Dashboard} />
      <Route path="/praise" component={PraisePage} />
      <Route path="/worship" component={WorshipPage} />
      <Route path="/others" component={OthersPage} />
      <Route path="/s2g" component={S2gPage} />
      <Route path="/details/:song" component={DetailsPage} />
      <Route path="/lyrics/:song" component={LyricsPage} />
      <Route path="/admin" component={Search} />
      <Route path="/add" component={AddPage} />
      <Route path="/categories" component={CategoriesPage} />
      <Route path="*" component={Dashboard} />
    </Route>
  );
