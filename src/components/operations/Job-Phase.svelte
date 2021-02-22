<script>
  import JobCard from "./Job-Card.svelte";
</script>

<div
  class="column is-one-fifth-widescreen is-one-quarter-desktop is-half-tablet"
>
  <div class="box has-background-blue">
    <div class="p-2 has-background-blue">
      <div class="container">
        <h3 class="subtitle has-text-centered">New Jobs Awaiting Parts</h3>
      </div>
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
    </div>
  </div>
</div>

<style>
  .has-background-blue {
    background-color: #d5d6d8 !important;
  }

  .column {
    /* border-width: 1px !important; */
    border-radius: 50px !important;
  }

  .subtitle {
    margin: auto;
  }
</style>
