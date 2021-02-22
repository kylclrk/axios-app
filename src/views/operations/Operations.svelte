<script>
  import RegionOverview from "../../components/operations/Region-Overview.svelte";
</script>

<section class="mt-4">
  <div class="columns mx-4 is-multiline">
    <RegionOverview
      regionName="Comcast Node Seg"
      activeJobs="13"
      newJobs="34"
      regionID="1"
    />
    <RegionOverview
      regionName="Critical Infrastructure"
      activeJobs="5"
      newJobs="4"
      regionID="2"
    />
    <RegionOverview
      regionName="Mountain West"
      activeJobs="8"
      newJobs="13"
      regionID="3"
    />
    <RegionOverview
      regionName="TDS Bend"
      activeJobs="4"
      newJobs="7"
      regionID="4"
    />
  </div>
</section>

<section class="section">
  <div class="columns">
    <div class="column">
      <article class="panel is-primary">
        <p class="panel-heading">Active Jobs</p>
        <div class="panel-block">
          <p class="control has-icons-left">
            <input class="input" type="text" placeholder="Search" />
            <span class="icon is-left">
              <i class="fas fa-search" aria-hidden="true" />
            </span>
          </p>
        </div>
        <p class="panel-tabs">
          <a href="/" class="is-active">Comcast Node Seg</a>
          <a href="/">Critical Infrastructure</a>
          <a href="/">Mountain West</a>
          <a href="/">TDS Bend</a>
        </p>
        <a href="/" class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true" />
          </span>
          Gateway FS17
        </a>
        <a href="/" class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true" />
          </span>
          Gateway US5
        </a>
        <a href="/" class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true" />
          </span>
          (ECF7A) ECH9
        </a>
        <a href="/" class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true" />
          </span>
          VAVAN02701
        </a>
        <a href="/" class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-code-branch" aria-hidden="true" />
          </span>
          VAVAN02700
        </a>
        <a href="/" class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-code-branch" aria-hidden="true" />
          </span>
          (HD77D) VAHDH01700
        </a>
      </article>
    </div>
    <div class="column">
      <article class="panel is-warning">
        <p class="panel-heading">Jobs That Need Attention</p>
        <div class="panel-block">
          <p class="control has-icons-left">
            <input class="input" type="text" placeholder="Search" />
            <span class="icon is-left">
              <i class="fas fa-search" aria-hidden="true" />
            </span>
          </p>
        </div>
        <a href="/" class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-code-branch" aria-hidden="true" />
          </span>
          (HD77D) VAHDH01700
        </a>
        <a href="/" class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true" />
          </span>
          (ECF7A) ECH9
        </a>
      </article>
    </div>
  </div>
</section>
