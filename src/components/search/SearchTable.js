import React from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";

const SearchTable = (props) => {
    let dataArray = [];
    const columns = [
      {
      id: 'title',
      Header: 'TITLE',
      accessor: d => "SONG"
      },
      {
        id: 'cat',
        Header: 'CATEGORY',
        accessor: d => "SONG"
      },
      {
      id: 'origin',
      Header: 'ORIGIN',
      accessor: d => "SONG"
      },
      {
        id: 'lang',
        Header: 'LANGUAGE',
        accessor: d => "SONG"
      },
      {
      id: 'tempo',
      Header: 'TEMPO',
      accessor: d => "SONG"
      },
      {
      id: 'msg',
      Header: 'MESSAGE',
      accessor: d => "SONG"
      },
      {
      id: 'date',
      Header: 'DATE ADDED',
      accessor: d => "SONG"
      },
          ];

    return (
      <div>
        <div className="">
          <div className="">
              <div>
              <ReactTable
                className="-striped -highlight"
                data={[1,2,3,4,5,6,7,8]}
                pageSize= {5}
                columns={columns}
                showPageSizeOptions={false}
              />
              </div>
              <div className='form-group'>
                <div className='col-sm-3'>
                <input className='btn btn-success form-control'
                        name='edit'
                        type='button'
                        value='SEARCH'
                    />
                </div>

            </div>
          </div>
        </div>

      </div>
    );
}
export default SearchTable;
