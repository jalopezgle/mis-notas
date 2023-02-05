module.exports = app => {
  const customers = require("../controllers/customer.controller.js");

  // Create a new Customer
  app.post("/customersAntArtiC_1936", customers.create);
  
  app.get("/customersAdd/:nota", customers.createget);

  // Retrieve all Customers
  app.get("/customersAntArtiC_1936", customers.findAll);
  
  // Retrieve all Customers
  app.get("/customersAntArtiC_1939", customers.findAllBck);

  // Retrieve a single Customer with customerId
  app.get("/customersAntArtiC_1936/:customerId", customers.findOne);

  // Update a Customer with customerId
  app.put("/customersAntArtiC_1936/:customerId", customers.update);

  // Delete a Customer with customerId
  app.delete("/customersAntArtiC_1936/:customerId", customers.delete);

  // Create a new Customer
  app.delete("/customersAntArtiC_1936", customers.deleteAll);
};
