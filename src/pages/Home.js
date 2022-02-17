import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [number, setNumber] = useState(0);
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("Avengers");

  const getPost = async () => {
    try {
      const response = await axios.get(
        "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=" +
          query +
          "&api-key=yourkey"
      );

      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }

    // fetch("http://jsonplaceholder.typicode.com/posts")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   });
  };

  useEffect(() => {
    getPost();

    return () => {
      console.log("Home unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Home updated");
  }, [number]);

  return (
    <>
      {posts.map((post) => {
        return (
          <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </>
        );
      })}
      {/* <h1>{number}</h1>
      <Button onClick={() => setNumber(number + 1)}>Add one</Button> */}
    </>
  );
};

// class Home extends React.Component {
//   constructor() {
//     super();

//     this.state = { number: 0 };
//   }

//   componentDidMount() {
//     console.log("Home mounted");
//   }

//   componentDidUpdate() {
//     console.log("Home updated");
//   }

//   componentWillUnmount() {
//     console.log("Home unmounted");
//   }

//   render() {
//     return (
//       <>
//         <h1>{this.state.number}</h1>
//         <Button
//           onClick={() => this.setState({ number: this.state.number + 1 })}
//         >
//           Add one
//         </Button>
//       </>
//     );
//   }
// }

// function Home() {
//   const navigate = useNavigate();

//   const users = ["Kofi", "Ama", "Kwesi", "John", "James"];

//   return (
//     <div>
//       <h1>Home</h1>
//       <Button onClick={() => navigate("/about")}>Go to about page</Button>

//       {users.map((user) => {
//         return <h4 onClick={() => navigate(`/profile/${user}`)}>{user}</h4>;
//       })}
//     </div>
//   );
// }

export default Home;
