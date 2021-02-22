<script>
  import JobCardAlt from "../../components/operations/Job-Card-Alt.svelte";

  const jobs = {
    newJobs: [
      {
        title: "RR25/RR61 2x2 to 4x4",
        workFlowId: "B482-332092",
        tags: [
          {
            name: "Optics Only Upgrade",
            color: "#3298DC",
          },
          {
            name: "Eugene",
            color: "#FFD500",
          },
        ],
      },
      {
        title: "(HE10A) EUEUH01500",
        workFlowId: "B482-331254",
        tags: [
          {
            name: "Node Split",
            color: "#13F0F0",
          },
          {
            name: "Eugene",
            color: "#FFD500",
          },
        ],
      },
    ],
    missingParts: [
      {
        title: "River Road US4",
        workFlowId: "B819-280315",
        tags: [
          {
            name: "New FSA or US",
            color: "#F52EBD",
          },
          {
            name: "Eugene",
            color: "#FFD500",
          },
        ],
      },
    ],
  };

  let activePhase = "newJobs";
</script>

<div class="section is-small">
  <div class="box">
    <div class="buttons is-centered">
      <button
        on:click={() => {
          activePhase = "newJobs";
        }}
        class="button button-font is-rounded has-background-offwhite has-bold-text {activePhase ===
        'newJobs'
          ? 'is-active'
          : ''}">New Jobs Awaiting on Parts</button
      >
      <button
        on:click={() => {
          activePhase = "missingParts";
        }}
        class="button button-font is-rounded has-background-offwhite has-bold-text {activePhase ===
        'missingParts'
          ? 'is-active'
          : ''}">Missing Parts</button
      >
      <button
        class="button button-font is-rounded has-background-offwhite has-bold-text"
        >Parts Received</button
      >
      <button
        class="button button-font is-rounded has-background-offwhite has-bold-text"
        >Installing</button
      >
      <button
        class="button button-font is-rounded has-background-offwhite has-bold-text"
        >Quality Control</button
      >
      <button
        class="button button-font is-rounded has-background-offwhite has-bold-text"
        >QC Needs Resolution</button
      >
      <button
        class="button button-font is-rounded has-background-offwhite has-bold-text"
        >Ready to Schedule for Optimize</button
      >
      <button
        class="button button-font is-rounded has-background-offwhite has-bold-text"
        >Scheduled Optimization</button
      >
      <button
        class="button button-font is-rounded has-background-offwhite has-bold-text"
        >Wreck Out Old Cables</button
      >
      <button
        class="button button-font is-rounded has-background-offwhite has-bold-text"
        >Work Complete</button
      >
    </div>
  </div>
</div>
<div class="section is-small">
  <!-- <div class="box"> -->
  <div class="columns is-multiline">
    {#if jobs[activePhase]}
      {#each jobs[activePhase] as { title, tags, workFlowId }}
        <JobCardAlt {title} {tags} {workFlowId} />
      {/each}
    {/if}
  </div>
</div>

<style>
  .button.is-active {
    background-color: #dae3fa;
  }

  .has-bold-text {
    font-weight: bold;
  }

  .button.button-font {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  @media screen and (min-width: 1024px) {
    .section.is-small {
      padding: 1rem 1.5rem;
    }
  }
</style>
