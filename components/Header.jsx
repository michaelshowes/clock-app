import data from "../data/db.json";

export default function Header() {
  return (
    <header>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </header>
  )
}