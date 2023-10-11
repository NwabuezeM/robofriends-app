import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import '../index.css';
import Scroll from "../components/Scroll";

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        setRobots(users);
        setLoading(false);
      });
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  }

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className="tc">
      <h1 className="heading">Robofriends</h1>
      <SearchBox searchChange={onSearchChange} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Scroll>
        <CardList robots={filteredRobots} />
        </Scroll>
      )}
    </div>
  );
}

export default App;