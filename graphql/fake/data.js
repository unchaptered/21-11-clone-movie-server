const data = [
  {
    id: 1,
    name: "MS",
  },
  {
    id: 2,
    name: "unchaptered",
  },
];

export const getUserData = () => data;

export const getUserOne = (id) => {
  let dataOne;
  for (let num = 0; num < data.length; num++) {
    if (data[num].id === id) {
      dataOne = data[num];
    }
  }
  return dataOne;
};

console.log("data.js on");
