export const players = [
  {
    id: 0,
    color: "bg-green-300",
    name: "Roger",
    position: 0,
    money: 2000,
    prison: 0,
    properties: ["Bond Street"],
  },
  {
    id: 1,
    color: "bg-orange-300",
    name: "Sammy",
    position: 0,
    money: 2000,
    prison: 1,
    properties: ["King's Cross", "Angel", "Euston"],
  },
  {
    id: 2,
    color: "bg-blue-300",
    name: "Helen",
    position: 0,
    money: 2000,
    prison: 0,
    properties: [],
  },
  {
    id: 3,
    color: "bg-purple-300",
    name: "Timothy",
    position: 0,
    money: 2000,
    prison: 0,
    properties: [],
  },
];

export const fields = [
  {
    id: 0,
    streetName: "Start",
    color: "bg-green-400",
    buyoutPrice: null,
    startingPenalty: null,
    ownedBy: null,
    occupied: [],
    rank: 0,
  },
  {
    id: 1,
    streetName: "Bond Street",
    color: "bg-orange-700",
    buyoutPrice: 400,
    startingPenalty: 100,
    ownedBy: "Roger",
    occupied: ["Timothy", "Helen"],
    rank: 2,
    set: 1,
    total: 2,
    get penalty() {
      if (this.startingPenalty === null) return;
      const penaltyPercentages = [1, 1.25, 1.5, 1.75, 2];
      return this.startingPenalty * penaltyPercentages[this.rank];
    },
  },
  {
    id: 2,
    streetName: "Baker Street",
    color: "bg-orange-700",
    buyoutPrice: 450,
    startingPenalty: 125,
    ownedBy: "Roger",
    occupied: [],
    rank: 1,
    set: 1,
    total: 2,
    get penalty() {
      if (this.startingPenalty === null) return;
      const penaltyPercentages = [1, 1.25, 1.5, 1.75, 2];
      return this.startingPenalty * penaltyPercentages[this.rank];
    },
  },
  {
    id: 3,
    streetName: "Community Chest",
    color: "bg-blue-800",
    buyoutPrice: null,
    startingPenalty: null,
    ownedBy: null,
    occupied: [],
    rank: 0,
  },
  {
    id: 4,
    streetName: "Go To Jail",
    color: "bg-red-600",
    buyoutPrice: null,
    startingPenalty: null,
    ownedBy: null,
    occupied: [],
    rank: 0,
  },
  {
    id: 5,
    streetName: "The Angel",
    color: "bg-blue-400",
    buyoutPrice: 475,
    startingPenalty: 150,
    ownedBy: "Sammy",
    occupied: [],
    rank: 2,
    set: 2,
    total: 3,
    get penalty() {
      if (this.startingPenalty === null) return;
      const penaltyPercentages = [1, 1.25, 1.5, 1.75, 2];
      return this.startingPenalty * penaltyPercentages[this.rank];
    },
  },
  {
    id: 6,
    streetName: "King's Cross",
    color: "bg-blue-400",
    buyoutPrice: 500,
    startingPenalty: 175,
    ownedBy: "Sammy",
    occupied: [],
    rank: 3,
    set: 2,
    total: 3,
    get penalty() {
      if (this.startingPenalty === null) return;
      const penaltyPercentages = [1, 1.25, 1.5, 1.75, 2];
      return this.startingPenalty * penaltyPercentages[this.rank];
    },
  },
  {
    id: 7,
    streetName: "Euston",
    color: "bg-blue-400",
    buyoutPrice: 525,
    startingPenalty: 200,
    ownedBy: "Sammy",
    occupied: [],
    rank: 2,
    set: 2,
    total: 3,
    get penalty() {
      if (this.startingPenalty === null) return;
      const penaltyPercentages = [1, 1.25, 1.5, 1.75, 2];
      return this.startingPenalty * penaltyPercentages[this.rank];
    },
  },
  {
    id: 8,
    streetName: "Free Parking",
    color: "bg-purple-600",
    buyoutPrice: null,
    startingPenalty: null,
    ownedBy: null,
    occupied: [],
    rank: 0,
  },
  {
    id: 9,
    streetName: "Bow Street",
    color: "bg-teal-400",
    buyoutPrice: 550,
    startingPenalty: 225,
    ownedBy: "",
    occupied: [],
    rank: 0,
    set: 3,
    total: 2,
    get penalty() {
      if (this.startingPenalty === null) return;
      const penaltyPercentages = [1, 1.25, 1.5, 1.75, 2];
      return this.startingPenalty * penaltyPercentages[this.rank];
    },
  },
  {
    id: 10,
    streetName: "Vine Street",
    color: "bg-teal-400",
    buyoutPrice: 600,
    startingPenalty: 250,
    ownedBy: "",
    occupied: ["Roger"],
    rank: 0,
    set: 3,
    total: 0,
    get penalty() {
      if (this.startingPenalty === null) return;
      const penaltyPercentages = [1, 1.25, 1.5, 1.75, 2];
      return this.startingPenalty * penaltyPercentages[this.rank];
    },
  },
  {
    id: 11,
    streetName: "Chance",
    color: "bg-blue-800",
    buyoutPrice: null,
    startingPenalty: null,
    ownedBy: null,
    occupied: [],
    rank: 0,
  },
  {
    id: 12,
    streetName: "Pentonville Prison",
    color: "bg-red-600",
    buyoutPrice: null,
    startingPenalty: null,
    ownedBy: null,
    occupied: ["Sammy"],
    rank: 0,
  },
  {
    id: 13,
    streetName: "Park Lane",
    color: "bg-purple-500",
    buyoutPrice: 650,
    startingPenalty: 275,
    ownedBy: "",
    occupied: [],
    rank: 0,
    set: 4,
    total: 2,
    get penalty() {
      if (this.startingPenalty === null) return;
      const penaltyPercentages = [1, 1.25, 1.5, 1.75, 2];
      return this.startingPenalty * penaltyPercentages[this.rank];
    },
  },
  {
    id: 14,
    streetName: "Mayfair",
    color: "bg-purple-500",
    buyoutPrice: 700,
    startingPenalty: 300,
    ownedBy: "",
    occupied: [],
    rank: 0,
    set: 4,
    total: 2,
    get penalty() {
      if (this.startingPenalty === null) return;
      const penaltyPercentages = [1, 1.25, 1.5, 1.75, 2];
      return this.startingPenalty * penaltyPercentages[this.rank];
    },
  },
  {
    id: 15,
    streetName: "Tax Office",
    color: "bg-yellow-500",
    buyoutPrice: null,
    startingPenalty: null,
    ownedBy: null,
    occupied: [],
    rank: 0,
  },
];
