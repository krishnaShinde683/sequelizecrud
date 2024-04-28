const {user_model}=require("../model")


exports.test= async (req, res)=> {
    try {
        console.log("test=====>")
      let u = await user_model.findOne({ id: 1 });
  
      return res.status(201).send(u??{test:"test"});
    } catch (error) {
      console.log(error);
      return res.status(400).send("Something went wrong");
    }
  }