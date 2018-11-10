export const airportCode = {
  filters: {
    airportCode: function (value) {
      let re = /(\[(\w{3})\])/
      let codeMatch = re.exec(value)
      if (codeMatch) {
        return codeMatch[2]
      } else {
        return value
      }
    }
  }
}
