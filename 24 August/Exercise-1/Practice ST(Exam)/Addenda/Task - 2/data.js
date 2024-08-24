/* 
MapReduce is a processing technique and a program model for distributed computing. The MapReduce algorithm contains two important tasks, namely Map and Reduce. 
Map takes a set of data and converts it into another set of data, where individual elements are broken down into tuples (key/value pairs).
Given the data below, use these two functions to solve the problem that follows this description. Please note that the addenda contains the code displayed below.
*/

let debtors = [
  { name: "John Doe", amount: 1200000 },
  { name: "Jack Sparrow", amount: 300000 },
  { name: "Judy Graham", amount: 7784 },
  { name: "Ted Talks", amount: 44212 },
  { name: "Ben Dover", amount: 600 },
];

// Problem: Calculate the average amount owed by the debtors.
