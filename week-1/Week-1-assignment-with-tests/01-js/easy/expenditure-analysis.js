/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const result = {};
  for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];
    if (result[transaction.category]) {
      result[transaction.category] += transaction.price;
    } else {
      result[transaction.category] = transaction.price;
    }
  }
  const output = [];
  for (const category in result) {
    output.push({     category: category,
      totalSpent: result[category], });
  }
  return output;
}

module.exports = calculateTotalSpentByCategory;
