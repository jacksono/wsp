import React from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import {withRouter} from 'react-router';



const SearchTable = (props) => {
    let dataArray = [];
    console.log("table", props)
    const columns = [
      {
      id: '#',
      Header: '#',
      accessor: d => d.id,
      maxWidth: 40,
      filterable: false
      },
      {
      id: 'title',
      Header: 'TITLE',
      accessor: d => d.title,
      maxWidth: 1000,
      headerClassName: 'left'
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
        Header: 'LANG',
        accessor: d => d.language,
        maxWidth: 80,
        className:'center'
      },
      {
      id: 'tempo',
      Header: 'TEMPO',
      accessor: d => d.tempo,
      maxWidth: 70,
      className:'center'
      },
      {
      id: 'msg',
      Header: 'MESSAGE/ALBUM',
      accessor: d => d.message,
      maxWidth: 200,
      headerClassName: 'left'
      },
      {
      id: 'links',
      Header: 'LINKS',
      accessor: d => d.lyrics === "True" ? "LYRICS" : "NONE",
      maxWidth: 70,
      className:'center'
      }
          ];

    return (
      <div>
        <div className="">
          <div className="">
              <div>
              <ReactTable
                className="-striped -highlight"
                data={props.songs}
                pageSize= {props.songs.length > 15 ? 15 : props.songs.length}
                columns={columns}
                showPageSizeOptions={false}
                filterable
                getTdProps={(state, rowInfo, column, instance) => {
                  return {
                    onClick: (e, handleOriginal) => {
                      if(rowInfo){
                        if((rowInfo.row.links === "LYRICS") && (column.Header === "LINKS")){
                          props.router.push("/lyrics/"+rowInfo.row.title)
                        }
                        else{
                          console.log("uhbhbkj",rowInfo)
                          props.router.push('/details/'+rowInfo.row.cat+"/"+rowInfo.row.title);
                          if (handleOriginal) {
                            handleOriginal()
                          }
                        }
                      }
                    }
                  }
                }}
              />
              </div>
              <div className='form-group  table-btn-pos'>
                <div className='col-sm-3'>
                  <input className='btn btn-success form-control'
                          name='edit'
                          type='button'
                          value='BACK TO SEARCH'
                          onClick={(e) => {e.preventDefault()
                                        props.toggle()}}
                      />
                </div>

            </div>
          </div>
        </div>

      </div>
    );
}
export default withRouter(SearchTable);
