//Array.prototype.forEach()
const socials = ["Fb", "Amazon", "Netflix", "Twitter", "Instagram", "Snapchat"];

// socials.forEach(function (item) {
//   console.log(item);
// });

socials.forEach((item) => console.log(item));

//Any first variable in the prompt section is going to provide the value of each element one by one. The second variable will print the index, and the third one will print the entire array.
socials.forEach((item, index, arr) =>
  console.log(`${item}, ${index}, ${arr}--`)
);

const socialObj = [
  { name: "Fb", url: "https://www.facebook.com/" },
  { name: "Twitter", url: "https://twitter.com/" },
  { name: "Instagram", url: "https://www.instagram.com" },
  { name: "Amazon", url: "https://www.amazon.com" },
  { name: "Netflix", url: "https://www.netflix.com" },
];

socialObj.forEach(function (item) {
  console.log(item.name + ":" + item.url);
});
