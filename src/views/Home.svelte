<script>
  import TechnicianDashboard from "./dashboards/Technician-Dashboard.svelte";
  import { activeRole } from "../stores";
  import PmDashboard from "./dashboards/PM-Dashboard.svelte";
  import HrDashboard from "./dashboards/HR-Dashboard.svelte";
</script>

{#if $activeRole === "Technician"}
  <TechnicianDashboard />
{:else if $activeRole === "Project Manager"}
  <PmDashboard />
{:else}
  <HrDashboard />
{/if}
