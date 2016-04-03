RefreshSound = {
  hasPlayedOnce: false,
  playAtStartUp: true,
  isCorrectEnv: Meteor.isClient &&
    !Meteor.isProduction &&
    !Meteor.isTest &&
    /localhost/.test(Meteor.absoluteUrl()),
  //waterdrop sound
  sound: Meteor.isClient && new Audio("data:audio/wav;base64,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"),
  play() {
    if (!this.isCorrectEnv) {
      return
    }
    this.sound.play()
    this.hasPlayedOnce = true
    console.info('RefreshSound.play()')
    return this
  },
  playOnce() {
    if (!this.hasPlayedOnce) {
      this.play()
    }
    return this
  },
  setVolume(volume) {
    if (volume >= 0 && volume <= 1) {
      this.sound.volume = volume
    }
    return this
  }
}

Meteor.startup(function () {
  if (RefreshSound.playAtStartUp) {
    RefreshSound.playOnce()
  }
})