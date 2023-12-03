const Assignment = require("../database/models/Assignment");

const getAssignments = (req, res) => {
  Assignment.find({})
    .then((assignments) => res.send(assignments))
    .catch((err) => res.send(err.message));
};

const postAssignment = (req, res) => {
  new Assignment(req.body)
    .save()
    .then((assignment) => res.send(assignment))
    .catch((err) => console.error(err.message));
};

module.exports = {
  getAssignments,
  postAssignment,
};
