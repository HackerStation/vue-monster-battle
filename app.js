new Vue({
  el: '#app',
  data: {
    showGameButtons: false,
    showGameLog: false,
    showStartGame: true,
    playerHealth: 100,
    monsterHealth: 100,
    gameIsOn: false,
    hits: [],
    numOfHeals: 3,
    numOfSpecialAttacks: 3,
  },
  methods: {
    attack: function (e, playerAttackLevel = 10) {
      this.showGameLog = true;

      const damageOnPlayer = Math.ceil(Math.random() * playerAttackLevel);
      const damageOnMonster = Math.ceil(Math.random() * 10);

      this.hits.push({
        player: damageOnPlayer,
        monster: damageOnMonster,
      });

      this.playerHealth -= damageOnPlayer;
      this.monsterHealth -= damageOnMonster;

      this.checkGameOver();
    },
    checkGameOver: function () {
      if (this.playerHealth <= 0 || this.monsterHealth <= 0) {
        this.isGameOn = false;
        this.showStartGame = true;
        this.showGameButtons = false;
      }
    },
    heal: function () {
      if (this.gameIsOn && this.numOfHeals > 0) {
        let healBy = Math.ceil(Math.random() * 20);
        let damageOnPlayer = Math.ceil(Math.random() * 10);

        while (healBy < damageOnPlayer) {
          healBy = Math.ceil(Math.random() * 20);
          damageOnPlayer = Math.ceil(Math.random() * 10);
        }

        this.playerHealth = this.playerHealth + healBy - damageOnPlayer;
        this.numOfHeals--;

        this.checkGameOver();
      }
    },
    specialAttack: function name() {
      if (this.numOfSpecialAttacks > 0) {
        this.showGameLog = true;

        let damageOnPlayer = Math.ceil(Math.random() * 20);
        let damageOnMonster = Math.ceil(Math.random() * 30);

        while (damageOnPlayer > damageOnMonster) {
          damageOnPlayer = Math.ceil(Math.random() * 20);
          damageOnMonster = Math.ceil(Math.random() * 30);
        }

        this.hits.push({
          player: damageOnPlayer,
          monster: damageOnMonster,
        });

        this.playerHealth -= damageOnPlayer;
        this.monsterHealth -= damageOnMonster;

        this.checkGameOver();
      }
    },
    startGame: function () {
      this.resetGame();
      this.gameIsOn = true;
      this.showStartGame = false;
      this.showGameButtons = true;
    },
    resetGame: function () {
      this.isGameOn = false;
      this.showStartGame = true;
      this.showGameButtons = false;
      this.showGameLog = false;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.hits = [];
      this.numOfHeals = 3;
      this.numOfSpecialAttacks = 3;
    },
  },
});
