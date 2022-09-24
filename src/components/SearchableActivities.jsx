import { Fragment, useState } from 'react';

import Activities from './Activities.jsx';
import Search from './Search.jsx';


function SearchableActivities() {
  const [filterText, setFilterText] = useState("");
  return (
    <Fragment>
      <Search onChangeText={setFilterText} />
      <Activities filterText={filterText} />
    </Fragment>
  )
}

export default SearchableActivities;