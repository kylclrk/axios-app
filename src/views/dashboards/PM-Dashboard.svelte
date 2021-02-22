<script>
  import Modal from "../../components/Modal.svelte";
  import { activeModal } from "../../stores";

  const openModal = (title, content) => {
    $activeModal.title = title;
    $activeModal.content = content;
    $activeModal.isOpen = true;
  };
</script>

<div class="section is-small">
  <section class="tiles content">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-one-fifth">
          <a
            href={"#"}
            class="box has-shadow social"
            on:click={() => {
              openModal(
                "New Bid",
                "A form would go here to enter details of a new bid. We could open a new page if the quoting process is more involved."
              );
            }}
          >
            <p class="is-size-4 has-text-centered">New Bid</p>
          </a>
        </div>
      </div>
    </div>
  </section>
</div>
<div class="section is-small">
  <div class="container">
    <div class="columns">
      <div class="column">
        <article class="panel is-primary">
          <p class="panel-heading">Bids waiting on SOW</p>

          <a
            href={"#"}
            class="panel-block"
            on:click={() => {
              openModal(
                "Enter Bid for Gateway FS17",
                "We could show the existing bid here and then a place to attach a SOW toward the bottom. Or we could make a page specific to entering the details of the SOW which could then be referenced throughout the application."
              );
            }}
          >
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true" />
            </span>
            Gateway FS17
          </a>
          <a
            href={"#"}
            class="panel-block"
            on:click={() => {
              openModal(
                "Enter Bid for Gateway US5",
                "We could show the existing bid here and then a place to attach a SOW toward the bottom. Or we could make a page specific to entering the details of the SOW which could then be referenced throughout the application."
              );
            }}
          >
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true" />
            </span>
            Gateway US5
          </a>

          <a
            href={"#"}
            class="panel-block"
            on:click={() => {
              openModal(
                "Enter Bid for (HD77D) VAHDH01700",
                "We could show the existing bid here and then a place to attach a SOW toward the bottom. Or we could make a page specific to entering the details of the SOW which could then be referenced throughout the application."
              );
            }}
          >
            <span class="panel-icon">
              <i class="fas fa-code-branch" aria-hidden="true" />
            </span>
            (HD77D) VAHDH01700
          </a>
        </article>
      </div>
      <div class="column">
        <article class="panel is-primary">
          <p class="panel-heading">New Bid Requests</p>

          <a href={"#"} class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true" />
            </span>
            TC-191609072 PRJ00054127 CAP - PON Enablement EATNCOBJ - Eaton CO
          </a>
          <a href={"#"} class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true" />
            </span>
            CAP - Bend - Asotin 10G circuit upgrade
          </a>
        </article>
      </div>
    </div>
  </div>
</div>

<Modal title={$activeModal.title}>
  <div slot="content">{$activeModal.content}</div>
</Modal>

<style>
  @media screen and (min-width: 499px) {
    .section.is-small {
      padding: 1rem 1.5rem;
    }
  }
</style>
