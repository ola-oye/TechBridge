//interval

// let name;
// setTimeout(() => {
//   name = "GoldBolder";
// }, 5000);

// setInterval(() => {
//   console.log(name);
// }, 1000);

// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("gold");
//   }, 5000);
// });

// p.then((value) => {
//   return value;
// });

const page = document.getElementsByClassName("body");

newName = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("GoldBolder");
  }, 3000);
});

console.log(newName)

const greeting = async () => {
  page[0].textContent = "...Loading";
  page[0].style = "text-align: center";

  name = await newName;
  page[0].textContent = "Welcome" + name;
};

