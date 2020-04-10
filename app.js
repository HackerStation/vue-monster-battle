new Vue({
  el: '#app',
  data: {
    showGameButtons: false,
    showGameLog: false,
    showStartGame: true,
    playerHealth: 100,
    monsterHealth: 100,
  },
  methods: {
    attack: function () {
      const playerDamage = Math.ceil(Math.random() * 10);
      const monsterDamage = Math.ceil(Math.random() * 10);

      console.log(playerDamage);
      console.log(monsterDamage);

      this.playerHealth -= playerDamage;
      this.monsterHealth -= monsterDamage;
    },
    startGame: function () {
      this.showStartGame = false;
      this.showGameButtons = true;
    },
    stopGame: function () {
      this.showStartGame = true;
      this.showGameButtons = false;
      this.showGameLog = false;
    },
  },
});
