// Exports router modules for serverless env that doesn't support the dynamic import.
// This module will be updated automaticlly in develoment mode, do NOT edit it manually.

import * as $0 from "./_app.tsx";
import * as $1 from "./index.tsx";
import * as $2 from "./notes/$noteid.tsx";

export default {
  "/_app": $0,
  "/": $1,
  "/notes/:noteid": $2,
};
