const express = require(`express`);

const router = require(`../data/users/users-router`);

const port = process.env.PORT || 4000;

const server = express();

server.use(`/api`, router);

const start = () =>
  server.listen(port, () =>
    console.log(`\n **Server running on port ${port}**\n`)
  );

  server.get('/', (req, res) => {
      res.json({message: 'server is sane'})
  })

module.exports = { start };