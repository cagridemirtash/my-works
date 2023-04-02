const usersList = {
  Istanbul: ["Ayşe", "Hakan"],
  Ankara: ["Mehmet", "Fatma"],
  Niğde: ["Ali", "Veli"],
}

usersList[Symbol.iterator] = function* () {
  for (const city in this) {
    yield* this[city]
  }
}

for (const as of usersList) {
  console.log(as)
}
