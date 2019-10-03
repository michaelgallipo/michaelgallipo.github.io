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
    text:
			"Words are a weapon stronger than he knows. And songs are even greater. The words wake the mind. The melody wakes the heart.",
    author: "Pierce Brown, 'Red Rising'"
  },
  {
    text: "Revolutions only get names after it's clear who won.",
    author: "G. Willow Winslow, 'Alif the Unseen'"
  },
  {
    text:
			"And yet the result has not been a greater respect for knowledge, but the growth of an irrational conviction among Americans that everyone is as smart as everyone else. This is the opposite of education which should aim to make people, no matter how smart or accomplished they are, learners for the rest of their lives. Rather we now live in a society where the acquisition of even a little learning is the endpoint, rather than the beginning of education.",
    author: "Tom Nichols, 'The Death of Expertise'"
  },
  {
    text:
			"First, and perhaps most important, if you are going to try to use new data to revolutionize a field, it is best to go into a field where the old methods are lousy.",
    author: "Seth Stephens-Davidowitz, 'Everybody Lies'"
  },
  {
    text:
			"You know I am really starting to think the whole world is just a patchwork quilt of crazy little cults, all with their own secret spaces, their own records, their own rules.",
    author: "Robin Sloan, 'Mr. Penumbra's 24-Hour Bookstore'"
  },
  {
    text:
			"No book is dangerous in and of itself, you know. But historically, reading a book the wrong way has led to terrible consequences.",
    author: "Edgar Cantero, 'Meddling Kids'"
  },
  {
    text:
			"Everyone can make a difference, no matter how short a time in this world they have, or how small a perceived contribution they make.",
    author: "J. Robert Kennedy, 'Brass Monkey'"
  },
  {
    text:
      "All you can do... all any of us can do - is work to be something positive instead. That is the choice that every [person] must make every day of their life. The universe is what we make of it. It's up to you to decide what part you will play.",
    author: "Becky Chambers, 'The Long Way to a Small Angry Planet'"
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
