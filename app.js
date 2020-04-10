new Vue({
  el: '#app',
  data: {
    showGameButtons: false,
    showGameLog: false,
    showStartGame: true,
    playerHealth: 100,
    monsterHealth: 100,
    hits: [],
  },
  methods: {
    attack: function () {
      this.showGameLog = true;

      const playerDamage = Math.ceil(Math.random() * 10);
      const monsterDamage = Math.ceil(Math.random() * 10);

      this.hits.push({
        player: playerDamage,
        monster: monsterDamage,
      });

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
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
  },
});
