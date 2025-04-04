// Income-based discount factors
export const incomeDiscounts = [
  { range: "Up to $19,999", factors: [1, 1, 1, 1, 1] },
  { range: "$20,000 - $39,999", factors: [0.6, 0.6, 0.7, 0.8, 0.8] },
  { range: "$40,000 - $49,999", factors: [0.5, 0.5, 0.6, 0.7, 0.7] },
  { range: "$50,000 - $59,999", factors: [0.4, 0.4, 0.5, 0.6, 0.6] },
  { range: "$60,000 - $69,999", factors: [0.3, 0.3, 0.4, 0.5, 0.5] },
  { range: "$70,000 - $79,000", factors: [0.2, 0.2, 0.3, 0.4, 0.4] }
];

// Membership rates and requirements
export const membershipRates = [
  { type: "Youth", baseRate: 23, minPeople: 1 },
  { type: "Youth 2", baseRate: 46, minPeople: 2 },
  { type: "Youth 3", baseRate: 69, minPeople: 3 },
  { type: "Young Adult", baseRate: 33, minPeople: 1 },
  { type: "Young Adult +1", baseRate: 45, minPeople: 2 },
  { type: "Young Adult +2", baseRate: 57, minPeople: 3 },
  { type: "Young Adult +3", baseRate: 69, minPeople: 4 },
  { type: "Young Adult +Children", baseRate: 45, minPeople: 2 },
  { type: "Young Adult Family", baseRate: 57, minPeople: 2 },
  { type: "Young Adult Family +1", baseRate: 69, minPeople: 3 },
  { type: "Young Adult Family +2", baseRate: 81, minPeople: 4 },
  { type: "Young Adult Family +3", baseRate: 93, minPeople: 5 },
  { type: "Adult", baseRate: 57, minPeople: 1 },
  { type: "Adult +1", baseRate: 69, minPeople: 2 },
  { type: "Adult +2", baseRate: 81, minPeople: 3 },
  { type: "Adult +3", baseRate: 93, minPeople: 4 },
  { type: "Adult +Children", baseRate: 69, minPeople: 2 },
  { type: "Family", baseRate: 81, minPeople: 2 },
  { type: "Family +1", baseRate: 93, minPeople: 3 },
  { type: "Family +2", baseRate: 105, minPeople: 4 },
  { type: "Family +3", baseRate: 117, minPeople: 5 },
  { type: "Senior Adult", baseRate: 52, minPeople: 1 },
  { type: "Senior Adult +1", baseRate: 64, minPeople: 2 },
  { type: "Senior Adult +2", baseRate: 81, minPeople: 3 },
  { type: "Senior Adult +3", baseRate: 88, minPeople: 4 },
  { type: "Senior Adult +Children", baseRate: 64, minPeople: 2 },
  { type: "Senior Family", baseRate: 76, minPeople: 2 },
  { type: "Senior Family +1", baseRate: 88, minPeople: 3 },
  { type: "Senior Family +2", baseRate: 100, minPeople: 4 },
  { type: "Senior Family +3", baseRate: 112, minPeople: 5 }
];