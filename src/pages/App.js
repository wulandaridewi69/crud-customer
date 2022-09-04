import { useState, useEffect, useContext } from "react";
import { TokenContext } from '../utils/Context';
import Loading from "../component/Loading";
import Layout from '../component/Layout';
import Cards from '../component/Cards';

import { useParams, useNavigate } from "react-router-dom"


const App = ({ remove, update }) => {

  const [loading, setLoading] = useState(true);
  const { token } = useContext(TokenContext);
  const [data, setData] = useState({});
  const navigate = useNavigate()

  // useEffect(() => {
  //   try{
  //     fetchData();
  //   }catch(error){
  //     navigate(`/login`)
  //   }
  // }, []);

  // const fetchData = () => {
  //   let myHeaders = new Headers();
  //   myHeaders.append(`Authorization`, `Bearer ${token}`);

  //   let requestOptions = {
  //     method: 'GET',
  //     headers: myHeaders,
  //     redirect: 'follow'
  //   };

  //   fetch(`https://mitramas-test.herokuapp.com/customers`, requestOptions)
  //     .then(response => response.json())
  //     .then((result) => {
  //       setData();
  //     })
  //     .catch((error) => navigate(`/login`))
  //     .finally(() => setLoading(false))
  // }

  // const handleDelete = (id) => {
  //   var myHeaders = new Headers();
  //   myHeaders.append(`Authorization`, `Bearer ${token}`);
  //   myHeaders.append(`Content-Type`, `application/json`);

  //   var raw = JSON.stringify({
  //     "id": id
  //   });

  //   var requestOptions = {
  //     method: 'DELETE',
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: 'follow'
  //   };

  //   fetch("https://mitramas-test.herokuapp.com/customers", requestOptions)
  //     .then(response => response.json())
  //     .then((result) => {
  //       alert('Success to delete')
  //     })
  //     .catch((error) => {
  //       if (error.response.status === 401) {
  //         navigate(`/${id}/Not Found`)
  //     } else {
  //         alert(error)
  //     }
  //     })
  //     .finally(() => setLoading(false));
  // }

  // if (token !== "0") {
  //   if (loading) {
  //     return (<Loading />);
  //   } else {
      return (
        <Layout>
          <div className="text-center font-bold text-3xl text-orange-400 pt-12 pb-12">
            <h1>CUSTOMER LIST</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:mx-24 md:mx-16 mx-6 mb-12">
            {/* {data.map((item) => ( */}
              {/* <Cards
                key={item.id}
                name={item.name}
                address={item.address}
                country={item.country}
                phone={item.phone_number}
                job={item.job_title}
                status={item.status}
                edit={item.id}
                delete={item.id}
              /> */}
            {/* ))} */}
          </div>
        </Layout>
      );
    }
  // } else {
  //   navigate("/login")
  // }
// }

export default App;