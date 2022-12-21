import {connectDB} from '../../util/mongodb';

export default async function(req, res) {
  const {db} = await connectDB();

  const data = await db
    .collection('listingsAndReviews')
    .find()
    .limit(20)
    .project({_id: 1, name: 1})
    .toArray()
  ;

  res.json(data);
}