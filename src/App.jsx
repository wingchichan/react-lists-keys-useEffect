export default function App() {
  // const numbers = [1, 2, 3, 4, 5];

  // // const doubledNumbers = numbers.map((number) => number * 3);
  // // console.log(doubledNumbers);

  // const numberList = numbers.map((number) => <li key={number}>{number}</li>);

  // return <ul>{numberList}</ul>;

  // INLINE method instead of creating a separate var numberList
  const numbers = [1, 2, 3, 4, 5];

  return (
    <ul>
      {numbers.map((number) => (
        <li key={number}>{number}</li>
      ))}
    </ul>
  );
}
