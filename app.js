let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector("#resetbtn");
let newbtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; // O starts

const winningpattern = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];

/* ================= BOX CLICK ================= */
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      box.classList.add("o");
      turn0 = false;
    } else {
      box.innerText = "X";
      box.classList.add("x");
      turn0 = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

/* ================= CHECK WINNER ================= */
const checkwinner = () => {
  for (let pattern of winningpattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
      showwinner(pos1);
      return;
    }
  }
};

/* ================= SHOW WINNER PAGE ================= */
const showwinner = (winner) => {
  msg.innerText = `🎉 Congratulations! Winner is ${winner}`;
  msgcontainer.classList.add("show");   // 🔥 IMPORTANT
  disableBoxes();
};

/* ================= DISABLE BOXES ================= */
const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

/* ================= ENABLE + RESET BOXES ================= */
const enableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
    box.classList.remove("x", "o");
  });
};

/* ================= RESET GAME ================= */
const resetgame = () => {
  turn0 = true;                         // ❌ let removed
  enableBoxes();
  msgcontainer.classList.remove("show");
};

/* ================= BUTTON EVENTS ================= */
newbtn.addEventListener("click", resetgame);
rstbtn.addEventListener("click", resetgame);
