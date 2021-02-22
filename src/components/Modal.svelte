<script>
  import { activeModal } from "../stores";
  const close = () => ($activeModal.isOpen = false);
</script>

{#if $activeModal.isOpen}
  <div class="modal is-active">
    <div class="modal-background" />
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{$activeModal.title}</p>
        <button class="delete" aria-label="close" on:click={close} />
      </header>
      <section class="modal-card-body">
        <slot name="content" />
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" on:click={close}>Save changes</button>
        <button class="button" on:click={close}>Cancel</button>
      </footer>
    </div>
  </div>
{/if}
