new Vue({
  el: '#app',
  data: {
    showGameButtons: false,
    showGameLog: false,
    showStartGame: true,
  },
  methods: {
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
