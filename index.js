exports.helloWorld = (req, res) => {
  const message="<font color='blue'>СloudFunction of quickejeembo</font><br><b>App Version 1.1</b>";
  res.status(200).send(message);
};
