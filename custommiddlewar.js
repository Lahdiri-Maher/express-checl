const workingTime = (req, res, next) => {
  const today = new Date();
  req.date = today;

  req.date.getDay() !== 0 ||
  req.date.getDay() !== 6 ||
  req.date.getHours() > 9 ||
  req.date.getHours() <= 17
    ? res.send("<h2>We Are resting !!</h2>")
    : next();
};

module.exports = { workingTime };
