import { useContext , useEffect , useState} from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingsRow from './BookingsRow'
const Bookings = () => {
  const {user} = useContext(AuthContext);
  const [bookings , setBookings] = useState([]);
  const url =`http://localhost:4000/bookings?email=${user?.email}`
 useEffect(() => {
  fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    setBookings(data)
  })
 } , [])
  return (
    <div>
      <h2>Your Bookings : {bookings.length}</h2>

      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
      <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
        
        
      </tr>
    </thead>
    <tbody>
      {
        bookings?.map(booking => <BookingsRow
          key={booking._id}
          booking={booking}
        ></BookingsRow>)
      }
      
    </tbody>
    
    
  </table>
</div>
    </div>
  );
};

export default Bookings;