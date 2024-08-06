export default function QueryParameters(app) {
    app.get("/lab5/calculator", (req, res) => {
      const { a, b, operation } = req.query;
      let result = 0;
      switch (operation) {
        case "add":
          result = parseInt(a) + parseInt(b);
          break;
        case "subtract":
          result = parseInt(a) - parseInt(b);
          break;
        case "multiply":
            result = numA * numB;
            break;
        case "divide":
            if (numB === 0) {
              result = "Cannot divide by zero";
            } else {
              result = numA / numB;
            }
            break;
        default:
          result = "Invalid operation";
      }
      res.send(result.toString());
    });
  }