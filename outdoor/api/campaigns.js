// customers.js

var faker = require('faker')

function generateAssets () {
  var assets = []
  faker.seed(1);
  for (var id = 0; id < 5; id++) {
    var owner = faker.random.arrayElement(['Clear Channel','Arcadia','Clover Outdoor'])
    var status = faker.random.arrayElement(['Potential','Unavailable'])
    var formatGroup = 'Billboard'
    var formats = ['Billboard G3', 'Billboard G4','96 Sheet Non Illuminated','96 Sheet Illuminated']
    var formatType = faker.random.arrayElement([0,1,2,3])
    var format = formats[formatType]
    var latitude = (faker.random.number(180 * 10000) / 10000.0 - 90.0).toFixed(4)
    var longitude = (faker.random.number(360 * 10000) / 10000.0 - 180.0).toFixed(4)
    //var panelRate = format === "Billboard G3" ? 360 : format === "Billboard G4" ? 480 : format === "96 Sheet Illuminated" ? 960 : 720
    var nFaces = faker.random.arrayElement([1,2])
    var panelRate = 360* (formatType+1) * nFaces
    var availableFrom = faker.date.future(1.0/24)
    var startDate = availableFrom
    var endDate = faker.date.future(1.0/24, startDate)
    var mediaCost = faker.finance.amount(10,1000,0)
    var productionCost = faker.finance.amount(10,1000,0)
    var despatchCost = faker.finance.amount(10,1000,0)
    
    assets.push({
      "id": id,
      "owner": owner,
      "status": status,
      "format_group": formatGroup,
      "format" : format,
      "lat" : latitude,
      "long" : longitude,
      "faces" : nFaces,
      "panel_rate" : panelRate,
      "avaiable_from" : availableFrom,
      "start_date": startDate,
      "end_date": endDate
    })
  }
  var campaigns = []
  for (var id = 0; id < 5; id++) {
    var client = faker.company.companyName()
    var brand = faker.commerce.productName()
    var title = client + '_' + brand + '_' + id
    var agency = faker.company.companyName()
    var category = faker.commerce.productName()
    var availableFrom = faker.date.future(1.0/24)
    var startDate = availableFrom
    var endDate = faker.date.future(1.0/6, startDate)
    var approvedBudget = faker.finance.amount(100000,1000000,0)
    var frames = []
    
    campaigns.push({
      "id": id,
      "title": title,
      "client": client,
      "brand": brand,
      "agency": agency,
      "category" : category,
      "start_date" : startDate,
      "end_date" : endDate,
      "approved_budget" : approvedBudget,
      "frames" : frames
    })
  }

  return { "assets": assets, "campaigns": campaigns }

}
  

// json-server requires that you export
// a function which generates the data set
module.exports = generateAssets