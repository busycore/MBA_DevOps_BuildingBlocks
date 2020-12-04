import User from "./modules/User/entities/User.entity";
import cors from "cors";
import express, { NextFunction, Response, Request } from "express";

// respond with "hello world" when a GET request is made to the homepage
const appInsights = require("applicationinsights");

appInsights
  .setup("ab27de42-b07f-4752-a8e9-0c20ea37ff90")
  .setAutoDependencyCorrelation(true)
  .setAutoCollectRequests(true)
  .setAutoCollectPerformance(true, true)
  .setAutoCollectExceptions(true)
  .setAutoCollectDependencies(true)
  .setAutoCollectConsole(true)
  .setUseDiskRetryCaching(true)
  .setSendLiveMetrics(false)
  .setDistributedTracingMode(appInsights.DistributedTracingModes.AI)
  .start();
const app = express();
app.use(cors());
const user = new User("Joao", "213");

app.listen(3333, () => {
  console.log("🟢 Server started !!");
  appInsights.defaultClient.trackEvent({
    name: "Server started",
    properties: { startedTime: new Date() },
  });
});

app.get("/", function (req, res) {
  appInsights.defaultClient.trackRequest({
    name: "GET /",
    url: req.url,
  });
  res.send("<b>Hello World</b>");
});
