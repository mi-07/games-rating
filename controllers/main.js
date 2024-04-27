const { staticFile } = require("../appModules/http-utils/");
const { getData, endpoints } = require("../appModules/api/");
const { makeRatingFile } = require("../appModules/rating/");

async function mainRouteController(res, publicUrl, extname) {
  const data = await getData(endpoints.games);
  await makeRatingFile("./dataset/rating.json", data);
  res.statusCode = 200;
  staticFile(res, publicUrl, extname);
}
module.exports = mainRouteController;
