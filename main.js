function enterForest() {
  var choice = document.getElementById("choiceInput").value.toLowerCase();
  document.getElementById("choiceInput").value = "";

  if (choice === "yes") {
    document.getElementById("story-container").innerHTML = `
            <p>As you enter the forest, you encounter two paths.</p>
            <p>Take the left path <input type="text" id="choiceInput"> <button onclick="leftPath()">Submit</button></p>
            <p>Take the right path <input type="text" id="choiceInput"> <button onclick="rightPath()">Submit</button></p>
        `;
  } else if (choice === "no") {
    document.getElementById("story-container").innerHTML = `
            <p>You decide not to enter the forest. The adventure ends.</p>
        `;
  } else {
    document.getElementById("story-container").innerHTML = `
            <p>Invalid choice. Please enter 'yes' or 'no'.</p>
            <p>Do you want to enter the forest? <input type="text" id="choiceInput"> <button onclick="enterForest()">Submit</button></p>
        `;
  }
}

function leftPath() {
  var choice = document.getElementById("choiceInput").value.toLowerCase();
  document.getElementById("choiceInput").value = "";

  if (choice === "go left") {
    document.getElementById("story-container").innerHTML = `
            <p>You follow the left path and discover a hidden cave.</p>
            <p>Do you want to enter the cave? <input type="text" id="choiceInput"> <button onclick="enterCave()">Submit</button></p>
        `;
  } else if (choice === "no") {
    document.getElementById("story-container").innerHTML = `
            <p>You decide not to enter the cave and continue your journey.</p>
            <button onclick="continueJourney()">Continue Journey</button>
        `;
  } else {
    document.getElementById("story-container").innerHTML = `
            <p>Invalid choice. Please enter 'go left' or 'no'.</p>
            <p>Take the left path <input type="text" id="choiceInput"> <button onclick="leftPath()">Submit</button></p>
        `;
  }
}

function rightPath() {
  var choice = document.getElementById("choiceInput").value.toLowerCase();
  document.getElementById("choiceInput").value = "";

  if (choice === "go right") {
    document.getElementById("story-container").innerHTML = `
            <p>You take the right path and encounter a group of friendly elves.</p>
            <p>They offer you a magical amulet. Do you accept it? <input type="text" id="choiceInput"> <button onclick="acceptAmulet()">Submit</button></p>
        `;
  } else if (choice === "no") {
    document.getElementById("story-container").innerHTML = `
            <p>You politely decline the amulet. The elves wish you good luck.</p>
            <button onclick="continueJourney()">Continue Journey</button>
        `;
  } else {
    document.getElementById("story-container").innerHTML = `
            <p>Invalid choice. Please enter 'go right' or 'no'.</p>
            <p>Take the right path <input type="text" id="choiceInput"> <button onclick="rightPath()">Submit</button></p>
        `;
  }
}

function enterCave() {
  var choice = document.getElementById("choiceInput").value.toLowerCase();
  document.getElementById("choiceInput").value = "";

  if (choice === "yes") {
    document.getElementById("story-container").innerHTML = `
            <p>You find a treasure chest inside the cave. Congratulations, you win!</p>
        `;
  } else if (choice === "no") {
    document.getElementById("story-container").innerHTML = `
            <p>You decide not to enter the cave and continue your journey.</p>
            <button onclick="continueJourney()">Continue Journey</button>
        `;
  } else {
    document.getElementById("story-container").innerHTML = `
            <p>Invalid choice. Please enter 'yes' or 'no'.</p>
            <p>Do you want to enter the cave? <input type="text" id="choiceInput"> <button onclick="enterCave()">Submit</button></p>
        `;
  }
}

function acceptAmulet() {
  var choice = document.getElementById("choiceInput").value.toLowerCase();
  document.getElementById("choiceInput").value = "";

  if (choice === "yes") {
    document.getElementById("story-container").innerHTML = `
            <p>The amulet grants you special powers. You continue your journey.</p>
            <button onclick="continueJourney()">Continue Journey</button>
        `;
  } else if (choice === "no") {
    document.getElementById("story-container").innerHTML = `
            <p>You politely decline the amulet. The elves wish you good luck.</p>
            <button onclick="continueJourney()">Continue Journey</button>
        `;
  } else {
    document.getElementById("story-container").innerHTML = `
            <p>Invalid choice. Please enter 'yes' or 'no'.</p>
            <p>They offer you a magical amulet. Do you accept it? <input type="text" id="choiceInput"> <button onclick="acceptAmulet()">Submit</button></p>
        `;
  }
}

function continueJourney() {
  document.getElementById("story-container").innerHTML = `
        <p>You continue your journey through the forest.</p>
        <p>To be continued...</p>
    `;
}
