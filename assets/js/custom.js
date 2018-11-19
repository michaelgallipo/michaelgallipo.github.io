// $(document).ready(function() {
let quoteIndex = 0;
const quotes = [
  {
    text: "People like to think they know things, even the unknowable",
    author: "Malka Ann Older, 'Infomocracy'"
  },
  {
    text:
      "Always remember, your ego is an obstacle to your work. If you start believing in your greatness, it is the death of your creativity. Your learning stops the day you start believing that there is nothing more to learn.",
    author: "Ravi Rajan"
  },
  {
    text:
      "Very few people are willing to do what it takes to do extraordinary things. They talk about what they want. But to be the best, you have to pay the price to be the best. And you have to be willing to pay the price every day. It isn’t easy, but it’s absolutely worth it.",
    author: "Tom Izzo"
  },
  {
    text:
      "Life, Stormy says, is not about how fast you run or even with what degree of grace. It's about perserverance, about staying on your feet and slogging forward no matter what.",
    author: "Dean Koontz, 'Odd Thomas'"
  },
  {
    text: "Revolutions only get names after it's clear who won.",
    author: "G. Willow Winslow, 'Alif the Unseen'"
  }
];

document.querySelector(".quote").innerHTML = quotes[quoteIndex].text;
document.querySelector(".author").innerHTML = "- " + quotes[quoteIndex].author;

const scrollQuotesUp = () => {
  if (quoteIndex < quotes.length - 1) {
    quoteIndex += 1;
    document.querySelector(".quote").innerHTML = quotes[quoteIndex].text;
    document.querySelector(".author").innerHTML =
      "- " + quotes[quoteIndex].author;
  }
  // $("#quoteUp").click(console.log("clicked"));
};

const scrollQuotesDown = () => {
  if (quoteIndex > 0) {
    quoteIndex -= 1;
    document.querySelector(".quote").innerHTML = quotes[quoteIndex].text;
    document.querySelector(".author").innerHTML =
      "- " + quotes[quoteIndex].author;
  }
};
// });
