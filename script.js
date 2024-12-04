let currentStory = 0;
const storyText = [
  {
    text: "You arrive at the eerie School Bus Cemetery. It's foggy, and the old buses are covered in vines. There's a path leading into the woods and another heading to an old bus.",
    choices: [
      { text: "Go into the woods", nextStory: 1 },
      { text: "Inspect the old bus", nextStory: 2 }
    ]
  },
  {
    text: "The woods are dark and full of strange sounds. You hear something moving behind you. Do you run or hide?",
    choices: [
      { text: "Run", nextStory: 3 },
      { text: "Hide", nextStory: 4 }
    ]
  },
  {
    text: "The bus looks abandoned, but you notice fresh footprints leading inside. Do you enter or leave?",
    choices: [
      { text: "Enter the bus", nextStory: 5 },
      { text: "Leave", nextStory: 6 }
    ]
  },
  {
    text: "You run as fast as you can, but something chases you. You trip and fall, unable to escape.",
    choices: [
      { text: "Restart", nextStory: 0 }
    ]
  },
  {
    text: "You hide in the bushes and wait. The thing passes by, but you feel like you're not alone.",
    choices: [
      { text: "Continue exploring", nextStory: 1 },
      { text: "Leave the woods", nextStory: 6 }
    ]
  },
  {
    text: "Inside the bus, you find a strange journal with stories of children who never left. The door slams shut behind you.",
    choices: [
      { text: "Escape", nextStory: 3 },
      { text: "Stay and read", nextStory: 7 }
    ]
  },
  {
    text: "You leave the bus and feel a sense of relief. The fog starts to clear, and you see the way out.",
    choices: [
      { text: "Exit the cemetery", nextStory: 8 }
    ]
  },
  {
    text: "The journal details dark secrets, but as you finish reading, something grabs your shoulder from behind.",
    choices: [
      { text: "Fight back", nextStory: 9 },
      { text: "Scream", nextStory: 10 }
    ]
  },
  {
    text: "You exit the cemetery and feel free. But something in the distance watches you from the fog.",
    choices: [
      { text: "End", nextStory: 0 }
    ]
  },
  {
    text: "As you scream, the ground shakes, and the cemetery crumbles, trapping you forever.",
    choices: [
      { text: "Restart", nextStory: 0 }
    ]
  },
  {
    text: "You fight back and manage to escape, but the fog swallows you whole.",
    choices: [
      { text: "Restart", nextStory: 0 }
    ]
  }
];

function updateStory() {
  const current = storyText[currentStory];
  document.getElementById("story").textContent = current.text;
  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";
  current.choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice.text;
    button.onclick = () => {
      currentStory = choice.nextStory;
      updateStory();
    };
    choicesDiv.appendChild(button);
  });
}

updateStory();
