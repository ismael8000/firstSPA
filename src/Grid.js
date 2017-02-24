import React, { Component } from 'react';
import Griddle, { plugins } from 'griddle-react';
import { BootstrapPager, GriddleBootstrap } from 'griddle-react-bootstrap';
import bootstrap from 'react-bootstrap';





let fakeData =  [
  {
    "id": 0,
    "name": "Mayer Leonard",
    "city": "Kapowsin",
    "state": "Hawaii",
    "country": "United Kingdom",
    "company": "Ovolo",
    "favoriteNumber": 7
  },
  {
    "id": 1,
    "name": "Koch Becker",
    "city": "Johnsonburg",
    "state": "New Jersey",
    "country": "Madagascar",
    "company": "Eventage",
    "favoriteNumber": 2
  },
  {
    "id": 2,
    "name": "Mayer Leonard",
    "city": "Kapowsin",
    "state": "Hawaii",
    "country": "United Kingdom",
    "company": "Ovolo",
    "favoriteNumber": 7
  },
  {
    "id": 3,
    "name": "Koch Becker",
    "city": "Johnsonburg",
    "state": "New Jersey",
    "country": "Madagascar",
    "company": "Eventage",
    "favoriteNumber": 2
  },
];

const styleConfig = {
  icons: {
    TableHeadingCell: {
      sortDescendingIcon: <small>(desc)</small>,
      sortAscendingIcon: <small>(asc)</small>,
    },
  },
  classNames: {
    Row: 'row-class',
  },
  styles: {
    Filter: { fontSize: 18 },
    Table: { border: "1px solid #555 "},
  }
}
class Grid extends Component {
  render() {
    return (
     <div>  
     <h1>Nova Grid CBMDF</h1>  
      < Griddle 
                 
                data={fakeData} 
                plugins={[plugins.LocalPlugin]}
                styleConfig={styleConfig}
                useCustomPagerComponent={true}
                customPagerComponent={ BootstrapPager }

     
         />
     </div>
     );
  }
}



// class Grid extends Component {
//   render() {
//     return (
//             <Griddle
//                     results={fakeData}
//                     data={fakeData}
//                     plugins={[plugins.LocalPlugin]}
//                     hover={true}
//                     striped={true}
//                     bordered={false}
//                     condensed={false}
//                     showFilter={true}
//                     showSettings={true}
//                     pagerOptions={{ maxButtons: 7 }}
//                     useCustomPagerComponent={true}
                  
                    
//                     />

//             );
//   }
// }
export default Grid;