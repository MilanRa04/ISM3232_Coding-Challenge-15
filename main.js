// Task 4: Create the Main Application
import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

console.log('Initial Portfolio Value:', calculatePortfolioValue());
console.log('Initial Portfolio Allocation:', getPortfolioAllocation());

try {
  // Simulate buying 10 units of Stock A (id: 1)
  new Transaction(1, 'buy', 10);
  console.log('Portfolio Value after buying 10 units of Stock A:', calculatePortfolioValue());

  // Simulate selling 5 units of Bond B (id: 2)
  new Transaction(2, 'sell', 5);
  console.log('Portfolio Value after selling 5 units of Bond B:', calculatePortfolioValue());

  console.log('Updated Portfolio Allocation:', getPortfolioAllocation());
} catch (error) {
  console.error('Transaction error:', error.message);
}
