<script>
  import { register, activeRoute } from "./Router.svelte";
  export let path = "/";
  // primaryPath is meant to be used for the navigation "active" class
  export let primaryPath = "/";
  export let component = null;
  export let middleware = [];
  // page.js params placeholder
  let params = {};
  register({ path, component, middleware, primaryPath });
  $: if ($activeRoute.path === path) {
    params = $activeRoute.params;
  }
</script>

<!-- if this is current active route -->
{#if $activeRoute.path === path}
  <!-- prefer component over slot -->
  {#if $activeRoute.component}
    <svelte:component
      this={$activeRoute.component}
      {...$$restProps}
      {...params}
    />
  {:else}
    <slot {params} />
  {/if}
{/if}
