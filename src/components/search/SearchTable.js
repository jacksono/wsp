import React from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";

const SearchTable = (props) => {
    let dataArray = [];
    const columns = [
      {
      id: '#',
      Header: '#',
      accessor: d => d.id,
      maxWidth: 40
      },
      {
      id: 'title',
      Header: 'TITLE',
      accessor: d => d.title,
      maxWidth: 1000
      },
      {
        id: 'cat',
        Header: 'CATEGORY',
        accessor: d => d.category,
        maxWidth: 100
      },
      {
      id: 'origin',
      Header: 'ORIGIN',
      accessor: d => d.origin,
      maxWidth: 100
      },
      {
        id: 'lang',
        Header: 'LANGUAGE',
        accessor: d => d.language,
        maxWidth: 80
      },
      {
      id: 'tempo',
      Header: 'TEMPO',
      accessor: d => d.tempo,
      maxWidth: 70
      },
      {
      id: 'msg',
      Header: 'MESSAGE',
      accessor: d => d.message,
      maxWidth: 200
      },
          ];

    return (
      <div>
        <div className="">
          <div className="">
              <div>
              <ReactTable
                className="-striped -highlight"
                data={props.songs}
                pageSize= {10}
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
