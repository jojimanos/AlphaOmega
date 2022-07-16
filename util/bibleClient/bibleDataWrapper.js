import { connectToDatabase } from "../mongodb";

function fetchNewTestCollection() {

    async (req, res) => {
        const { db } = await connectToDatabase();
      
        const newtest = await db
          .collection("newtest")
          .find({})
          .sort({})
          .limit(20)
          .toArray();
      
        res.json(newtest);
      };
} 

export default fetchNewTestCollection