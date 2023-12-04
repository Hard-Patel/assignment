/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  if (transactions.length == 0) {
    return [];
  }

  let categories = [];
  for (let i = 0; i < transactions.length; i++) {
    let isAdded = false;
    const { price, category } = transactions[i];
    categories = categories.map((v) => {
      if (v["category"] == category) {
        isAdded = true;
        return { ...v, totalSpent: v.totalSpent + price };
      }
      return v;
    });
    if (!isAdded) {
      categories.push({ category, totalSpent: price });
    }
  }

  return categories;
}

module.exports = calculateTotalSpentByCategory;
