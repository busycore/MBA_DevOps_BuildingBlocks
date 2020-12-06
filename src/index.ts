import User from "./modules/User/entities/User.entity";
import http from "http";

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

const user = new User("Thiago", "123456");

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end(`Hello ${user.$name}`);
  appInsights.defaultClient.trackEvent({
    name: "Server started",
    properties: { startedTime: new Date() },
  });
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
