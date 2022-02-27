module.exports = mongoose => {
  const exampleSchema = mongoose.Schema(
    {
        username: {type: String, unique: true, required: true}
    },
    {timestamps: true}
  );


  const Example = mongoose.model(
      "example",
      exampleSchema
  );

  return Example;
};
