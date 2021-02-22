<script>
  import { Router, Route, NotFound } from "./router";
  import Navigation from "./components/Navigation.svelte";

  // Routes
  import Home from "./views/Home.svelte";
  import Operations from "./views/operations/Operations.svelte";
  import Region from "./views/operations/Region.svelte";
  import RegionAlt from "./views/operations/RegionAlt.svelte";
</script>

<Navigation />
<Router>
  <Route path="/" primaryPath="/" component={Home} />
  <Route path="/operations" primaryPath="/operations" component={Operations} />
  <Route
    path="/operations/pipeline"
    primaryPath="/operations"
    component={RegionAlt}
  />
  <Route
    path="/operations/:region"
    primaryPath="/operations"
    component={Region}
    let:params
  />
  <NotFound>
    <h2>404, page not found</h2>
  </NotFound>
</Router>

<style global>
  @import "src/styles/global.scss";
</style>
