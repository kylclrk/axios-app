<script>
  import { activeRoute } from "../router/Router.svelte";
  import { activeRole } from "../stores";

  let navState = false;
  const toggleNav = () => {
    navState = !navState;
    console.log(navState);
  };
</script>

<nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img
        alt="Axios Corporation Logo"
        src="/assets/images/Axios_Logo_XL.png"
      />
    </a>

    <a
      on:click={toggleNav}
      role="button"
      class="navbar-burger {navState ? 'is-active' : ''}"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
      href={""}
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>

  <div class="navbar-menu {navState ? 'is-active' : ''}">
    <div class="navbar-start">
      <a
        class="navbar-item {$activeRoute.primaryPath === '/'
          ? 'is-active'
          : ''}"
        href="/"
      >
        Home
      </a>
      <a
        class="navbar-item {$activeRoute.primaryPath === '/operations'
          ? 'is-active'
          : ''}"
        href="/operations"
      >
        Operations
      </a>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <p>(For demo only)</p>
      </div>
      <div class="navbar-item">
        <div class="select is-rounded">
          <select bind:value={$activeRole}>
            <option value="Technician">Technician</option>
            <option value="Project Manager">Project Manager</option>
            <option value="Human Resources">Human Resources</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</nav>
