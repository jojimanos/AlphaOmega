import { connectToDatabase } from "../../util_file";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const newtest = await db
    .collection("newtest")
    .find({})
    .sort({})
    .limit(20)
    .toArray();

  res.json(newtest);
};