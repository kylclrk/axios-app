<script>
  export let title = "";
  export let tags = [];
  export let workFlowId = "";
</script>

<div class="card m-3">
  <div class="card-header has-background-red">
    <h2 class="card-header-title">{title}</h2>
  </div>
  <div class="card-content has-background-lighter-red">
    <div class="tags has-addons">
      {#each tags as { color, name }}
        <span class="tag" style="background-color: {color};">{name}</span>
      {/each}
    </div>
    <p><strong>Workflow ID</strong></p>
    <p>{workFlowId}</p>
  </div>
</div>

<style>
  .has-background-red {
    background-color: #a8b1c7 !important;
  }
  .has-background-lighter-red {
    background-color: #d7e2ff;
  }
</style>
