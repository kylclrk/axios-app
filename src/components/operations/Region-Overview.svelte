<script>
  export let regionName;
  export let activeJobs;
  export let newJobs;
  export let regionID;
</script>

<div class="column is-one-quarter">
  <div class="card">
    <div class="card-header has-background-primary">
      <h1 class="card-header-title has-text-light">{regionName}</h1>
    </div>
    <div class="card-content has-background-light">
      <strong>{activeJobs} Active Jobs</strong> | {newJobs} New Jobs
    </div>
    <div class="card-footer">
      <a href="/operations/{regionID}" class="card-footer-item">View Pipeline</a
      >
      <a href="/operations/pipeline" class="card-footer-item">View Jobs</a>
    </div>
  </div>
</div>

<style>
  .has-background-axios-red {
    background-color: #5d7a9a !important;
  }
</style>
