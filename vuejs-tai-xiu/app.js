const app = Vue.createApp({
  data() {
    return {
      money: Number(5000000),
      betting: false,
      dice1: 1,
      dice2: 2,
      dice3: 3,
      dice1Image: "dice-1.png",
      dice2Image: "dice-2.png",
      dice3Image: "dice-3.png",
      picked: "Tài",
      betMoney: Number(0),
      outOfMoney: false,
      result: "Bắt đầu cược đi nào!",
    };
  },
  computed: {
    diceSum() {
      return this.dice1 + this.dice2 + this.dice3;
    },
  },
  watch: {
    dice1(newDice) {
      switch (newDice) {
        case 1:
          this.dice1Image = "dice-1.png";
          break;
        case 2:
          this.dice2Image = "dice-2.png";
          break;
        case 3:
          this.dice1Image = "dice-3.png";
          break;
        case 4:
          this.dice1Image = "dice-4.png";
          break;
        case 5:
          this.dice1Image = "dice-5.png";
          break;
        default:
          this.dice1Image = "dice-6.png";
      }
    },
    dice1(newDice) {
      switch (newDice) {
        case 1:
          this.dice1Image = "dice-1.png";
          break;
        case 2:
          this.dice1Image = "dice-2.png";
          break;
        case 3:
          this.dice1Image = "dice-3.png";
          break;
        case 4:
          this.dice1Image = "dice-4.png";
          break;
        case 5:
          this.dice1Image = "dice-5.png";
          break;
        default:
          this.dice1Image = "dice-6.png";
      }
    },
    dice2(newDice) {
      switch (newDice) {
        case 1:
          this.dice2Image = "dice-1.png";
          break;
        case 2:
          this.dice2Image = "dice-2.png";
          break;
        case 3:
          this.dice2Image = "dice-3.png";
          break;
        case 4:
          this.dice2Image = "dice-4.png";
          break;
        case 5:
          this.dice2Image = "dice-5.png";
          break;
        default:
          this.dice2Image = "dice-6.png";
      }
    },
    dice3(newDice) {
      switch (newDice) {
        case 1:
          this.dice3Image = "dice-1.png";
          break;
        case 2:
          this.dice3Image = "dice-2.png";
          break;
        case 3:
          this.dice3Image = "dice-3.png";
          break;
        case 4:
          this.dice3Image = "dice-4.png";
          break;
        case 5:
          this.dice3Image = "dice-5.png";
          break;
        default:
          this.dice3Image = "dice-6.png";
      }
    },
  },
  methods: {
    makeMoney() {
      this.money += 5000000;
    },
    startBet() {
      this.betting = true;
    },
    cancelBet() {
      this.betting = false;
    },
    allIn() {
      this.betting = true;
      this.betMoney = this.money;
    },
    rollDice() {
      if (Number(this.betMoney) > Number(this.money)) {
        outOfMoney = true;
        return;
      }
      this.dice1 = Math.floor(Math.random() * 5 + 1);
      this.dice2 = Math.floor(Math.random() * 5 + 1);
      this.dice3 = Math.floor(Math.random() * 5 + 1);
      if (
        this.dice1 + this.dice2 + this.dice3 == 3 ||
        this.dice1 + this.dice2 + this.dice3 == 18
      ) {
        this.result = "Nhà cái ăn tất";
        this.money -= this.betMoney;
      } else if (
        this.dice1 + this.dice2 + this.dice3 > 3 &&
        this.dice1 + this.dice2 + this.dice3 < 11
      ) {
        this.result = "Xỉu";
        if (this.picked == "Xỉu") {
          this.money = Number(this.money) + Number(this.betMoney);
        } else if (this.picked == "Tài") {
          this.money = Number(this.money) - Number(this.betMoney);
        }
      } else if (
        this.dice1 + this.dice2 + this.dice3 > 10 &&
        this.dice1 + this.dice2 + this.dice3 < 18
      ) {
        this.result = "Tài";
        if (this.picked == "Tài") {
          this.money = Number(this.money) + Number(this.betMoney);
        } else if (this.picked == "Xỉu") {
          this.money = Number(this.money) - Number(this.betMoney);
        }
      }
      //this.betMoney = 0;
      this.betting = false;
    },
  },
});

app.mount("#game");
