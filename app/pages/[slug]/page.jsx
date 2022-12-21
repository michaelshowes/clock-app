import getPages from '../../../util/getPages';

export default async function Page({ params }) {
  const data = await getPages(params);

  return (
    <div>
      <h1>{ data.title }</h1>
      <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
    </div>
  )
}
