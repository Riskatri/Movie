// import React, { useState, useMemo, useEffect } from "react";
// import axios from "axios";
// import { Redirect } from "react-router-dom";
// import { Link } from "react-router-dom";
// import moment from "moment";

// function Movie(props) {
//   const [data, setData] = useState([]);
//   const [filtered, setFiltered] = useState([]);
//   const [res, setRes] = useState("");

//   const token = JSON.parse(
//     // sessionStorage.getItem("persisted_state_hook:token")
//     sessionStorage.getItem("persisted_state_hook:token")
//   );

//   useMemo(() => {
//     const fetchData = async () => {
//       const result = await axios({
//         method: "get",
//         url: `https://api.themoviedb.org/3/discover/movie?api_key=f7b67d9afdb3c971d4419fa4cb667fbf`,
//         headers: {
//           Authorization: token.token.accessToken,
//         },
//         data: data,
//       });
//       setData(result.data.results);
//       setFiltered(result.data.results);
//     };
//     try {
//       fetchData();
//     } catch (err) {
//       alert(err);
//     }
//     // console.log(data);
//   }, []);

//   useEffect(() => {
//     const results = filtered.filter((result) =>
//       result.original_title.toLowerCase().includes(res)
//     );
//     setData(results);
//   }, [res]);

//   onchange = (e) => {
//     setRes(e.target.value);
//   };

//   console.log(data);
//   if (!token) {
//     return <Redirect to="/login" />;
//   }

//   console.log(data);

//   const showMovie = () => {
//     return data.map((results, i) => {
//       if (results.popularity >= 190) {
//         return (
//           <div key={i} className="container">
//             <div className="post-info flex-row">
//               <h1> {results.original_title}</h1>
//               <span>
//                 release date:
//                 {moment(results.overview.release_date).format("DD/MM/YYYY")}
//               </span>
//             </div>
//           </div>
//         );
//       }
//     });
//   };
//   return (
//     <div className="container">
//       <div>
//         <input
//           type="text"
//           placeholder="search"
//           value={res}
//           onChange={onchange}
//         />
//       </div>
//       {showMovie()}
//     </div>
//   );
// }
// export default Movie;

import React, { Component } from "react";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const url =
      "https://api.themoviedb.org/3/discover/movie?api_key=f7b67d9afdb3c971d4419fa4cb667fbf";
    const res = await fetch(url);

    const data = await res.json();
    console.log(data);
    this.setState({ data: data.results });
  }

  render() {
    return (
      <div className="container">
        {this.state.data.map((results) => (
          <h1 key={results.id}>
            {results.original_title}: {results.release_date}
          </h1>
        ))}
      </div>
    );
  }
}

export default Movies;
