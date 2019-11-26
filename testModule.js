class testModule {
  calc () {
    const waarde = 100
    const dert = 30

    console.log(Math.floor(waarde / dert));
  }
}
module.exports = new testModule()
