import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

// const Home = () => {
//   const [number, setNumber] = useState(0);
//   const [posts, setPosts] = useState([]);

//   async function getData() {
//     try {
//       const response = await axios.get(
//         "http://jsonplaceholder.typicode.com/posts"
//       );

//       setPosts(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     console.log("Home mounted");
//     getData();

//     return () => {
//       console.log("Home unmounted");
//     };
//   }, []);

//   useEffect(() => {
//     console.log("State updated");
//   }, [number]);

//   return (
//     <div>
//       <h1>Home</h1>
//       <p>{number}</p>

//       {/* <Button variant="primary" onClick={() => setNumber(number + 1)}>
//         Add One
//       </Button> */}

//       {posts.map((post) => {
//         return <h1>{post.title}</h1>;
//       })}
//     </div>
//   );
// };

// export default Home;

class Home extends React.Component {
  constructor() {
    super();
    this.state = { number: 0, posts: [], query: "avengers" };
  }

  getData = async () => {
    try {
      // const response = await axios.get(
      //   "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=" +
      //     this.state.query +
      //     "&api-key=yourkey"
      // );

      const response = await axios.get(
        "https://api.nytimes.com/svc/movies/v2/reviews/search.json?",
        {
          params: {
            query: this.state.query,
            "api-key": "yourkey",
          },
        }
      );

      this.setState({ posts: response.data });
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount() {
    console.log("Home mounted");

    this.getData();
    // fetch("http://jsonplaceholder.typicode.com/posts").then((data) => {
    //   console.log(data.json());
    // });
  }

  // componentDidUpdate() {
  //   console.log("State updated");
  // }

  // componentWillUnmount() {
  //   console.log("Home unmounted");
  // }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>{this.state.number}</p>

        <input />

        {/* <Button
          variant="primary"
          onClick={() => this.setState({ number: this.state.number + 1 })}
        >
          Add one
        </Button> */}

        {this.state.posts.map((post) => {
          return <h1 key={post.id}>{post.title}</h1>;
        })}
      </div>
    );
  }
}

export default Home;
