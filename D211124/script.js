// let credentials = [
//   {
//     name: "Gold",
//     picture:
//       "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1732180499~exp=1732184099~hmac=dda124752b19569fd0fb3546081636e00f1f19124abf13a147cfd5c69b8cf159&w=740",
//     ooccupation: "lawyer",
//   },
//   {
//     name: "Bold",
//     picture:
//       "https://img.freepik.com/free-vector/mysterious-mafia-man-wearing-hat_52683-34829.jpg?ga=GA1.1.1842793619.1732178924&semt=ais_hybrid",
//     ooccupation: "Software engieer",
//   },
//   {
//     name: "John",
//     picture:
//       "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1732180499~exp=1732184099~hmac=dda124752b19569fd0fb3546081636e00f1f19124abf13a147cfd5c69b8cf159&w=740",
//     ooccupation: "joker",
//   },
//   {
//     name: "Ade",
//     picture:
//       "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1732180499~exp=1732184099~hmac=dda124752b19569fd0fb3546081636e00f1f19124abf13a147cfd5c69b8cf159&w=740",
//     ooccupation: "doctor",
//   },
//   {
//     name: "Sola",
//     picture:
//       "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1732180499~exp=1732184099~hmac=dda124752b19569fd0fb3546081636e00f1f19124abf13a147cfd5c69b8cf159&w=740",
//     ooccupation: "driver",
//   },
//   {
//     name: "Man",
//     picture:
//       "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436190.jpg?ga=GA1.1.1842793619.1732178924&semt=ais_hybrid",
//     ooccupation: "chemist",
//   },
//   {
//     name: "Simi",
//     picture:
//       "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1732180499~exp=1732184099~hmac=dda124752b19569fd0fb3546081636e00f1f19124abf13a147cfd5c69b8cf159&w=740",
//     ooccupation: "boxer",
//   },
//   {
//     name: "Tade",
//     picture:
//       "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?ga=GA1.1.1842793619.1732178924&semt=ais_hybrid",
//     ooccupation: "sprinter",
//   },
//   {
//     name: "Dense",
//     picture:
//       "https://media.istockphoto.com/id/1407087145/vector/hand-drawn-abstract-vector-graphic-clipart-illustration-boho-cowgirl-in-hat-portrait-western.jpg?s=612x612&w=0&k=20&c=eefCvVzuZhqEUTfoLmRpGLF1d3dglH2G6nrWIB5VYbE=",
//     ooccupation: "musician",
//   },
//   {
//     name: "Dane",
//     picture:
//       "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1732180499~exp=1732184099~hmac=dda124752b19569fd0fb3546081636e00f1f19124abf13a147cfd5c69b8cf159&w=740",
//     ooccupation: "tailor",
//   },
//   {
//     name: "Tom",
//     picture:
//       "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833548.jpg?t=st=1732180649~exp=1732184249~hmac=becbc3f2c75c9c98b89ee27ce5086d809d494d602e716f931a761b396fada9cc&w=740",
//     ooccupation: "event moderator",
//   },
// ];

// let body = document.getElementById("body");

// credentials.forEach((person) => {
//   let card = document.createElement("div");
//   card.classList.add("card");
//   body.appendChild(card);

//   let image = document.createElement("img");
//   image.src = person.picture;
//   image.classList.add("avatar")
//   card.appendChild(image);

//   let name = document.createElement("h2");
//   name.textContent = person.name;
//   card.appendChild(name);

//   let job = document.createElement("p");
//   job.textContent = person.ooccupation;
//   card.appendChild(job);
// });

const reqt = new XMLHttpRequest();

// req.open("GET", "https://catfact.ninja/facts");
// req.send();
// req.responseType = "json";
// req.onload = () => console.log(req.response.data);

const getFacts = new Promise((resolve, reject) => {
  reqt.open("GET", "https://catfact.ninja/facts?limit=15&max_length=60");
  reqt.send();

  reqt.responseType = "json";
  reqt.onload = () => resolve(reqt.response);
  reqt.onerror = () => reject(reqt.statusText);
});

getFacts.then(
    result => result.data
)
getFacts.then(
    result => console.log(result.data)
)
getFacts.catch(
    error => console.log(error)
)