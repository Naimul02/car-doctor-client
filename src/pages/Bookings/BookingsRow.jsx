import React from 'react';

const BookingsRow = ({booking}) => {
  const { date , service , price , img} = booking
  return (
    <div className="overflow-x-auto">
    <table className="table">
      
      <tbody>
        {/* row 1 */}
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <td>
          <div className="avatar">
                <div className="rounded w-24 h-24">
                  {img && <img src={img} />}
                </div>
              </div>
          </td>
          <td>
           {
            service
           }
          </td>
          <td>{date}</td>
          <td>${price}</td>
          <th>
            <button className="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
      
       
      </tbody>
     
      
    </table>
  </div>
  );
};

export default BookingsRow;