import data from "../data/db.json"; // Data pulled from local json file
import { users } from "../util/fetchData.js"; // Data pulled from REST API

export default function Home() {
  return (
    <>
      <h2>Sample local json data</h2>
      {data.users.map((user) => (
        <div key={user.id}>
          <div><strong>{user.name}</strong></div>
          <div>{user.age}</div>
          <div>{user.email}</div>
          <br />
        </div>
      ))}

      <h2>Sample REST API data</h2>

      <div><strong>{users[0].name}</strong></div>
      <div>{users[0].username}</div>
      <div>{users[0].email}</div>
      <div>{users[0].address.street}</div>
      <div>{users[0].address.suite}</div>
      <div>{users[0].address.city}, {users[0].address.zipcode}</div>
      <br />
    </>
  )
}
