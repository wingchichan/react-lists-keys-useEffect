import { useState, useEffect } from "react";
export default function App() {
  // const numbers = [1, 2, 3, 4, 5];

  // // const doubledNumbers = numbers.map((number) => number * 3);
  // // console.log(doubledNumbers);

  // const numberList = numbers.map((number) => <li key={number}>{number}</li>);

  // return <ul>{numberList}</ul>;

  // INLINE method instead of creating a separate var numberList
  // const numbers = [1, 2, 3, 4, 5];

  // return (
  //   <ul>
  //     {numbers.map((number) => (
  //       <li key={number}>{number}</li>
  //     ))}
  //   </ul>
  // );

  // -------------- USEEFFECT WORKSHOP

  // JSON Placeholder todos API

  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos"
  //     );
  //     const data = await response.json();
  //     setItems(data);
  //   }
  //   fetchData();
  // }, []);

  // return (
  //   <div>
  //     <h1>Items</h1>
  //     <ul>
  //       {items.map((item) => (
  //         <li key={item.id}>
  //           {item.userId}
  //           {item.id}
  //           {item.title}
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );

  // JSON placeholder users API

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} {user.email} <br />
            {user.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
}
