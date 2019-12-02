

class testModule {
  calc () {
    const waarde = 100
    const dert = 30

    console.log(Math.floor(waarde / dert));
  }

  multiply_array() {
    let arr = [1]
    let full_arr = arr.concat(arr)
    console.log(full_arr);

  }
}
module.exports = new testModule()
