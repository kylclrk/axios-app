<script>
  import JobPhase from "../../components/operations/Job-Phase.svelte";

  export let region;
</script>

<div class="container mb-4">
  <h1 class="title">
    Region # {region} (Once hooked up to a database, this will say the name of the
    "region" or "pipeline")
  </h1>
</div>

<div class="columns mx-4 is-multiline">
  <JobPhase />
  <JobPhase />
  <JobPhase />
  <JobPhase />
  <JobPhase />
</div>
