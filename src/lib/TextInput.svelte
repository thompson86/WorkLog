<!-- Tämän komponentin tarkoitus on luoda tekstikenttä, jota voidaan muokata haluamaksi -->
<script>
  export let label = '';
  export let placeholder = '';
  export let minlength = 2;
  export let maxlength = null;
  export let virhe = 'Virheellinen syöte';
  export let valid = true;
  export let value = '';
  export let type = '';
  import { fade } from 'svelte/transition';

  let showError = false;

  // Validoidaan input-arvo
  function validateInput() {
    if (type === 'date') {
      valid = value !== '';
    } else {
      valid =
        value.length >= minlength &&
        (maxlength === null || value.length <= maxlength);
    }
    showError = !valid;
  }

  function handleInput(event) {
    value = event.target.value;
    validateInput();
  }

  function handleBlur() {
    // Näytetään virheviesti vain, jos kentässä on käyty ja arvo ei ole validi
    showError = value.length > 0 && !valid;
  }

  function closeModal() {
    showError = false;
  }
</script>

<label>
  {label}
  {#if type === 'date'}
    <input
      type="date"
      {placeholder}
      bind:value
      {maxlength}
      {minlength}
      on:input={handleInput}
      on:blur={handleBlur}
    />
  {:else}
    <input
      type="text"
      {placeholder}
      bind:value
      {maxlength}
      {minlength}
      on:input={handleInput}
      on:blur={handleBlur}
    />
  {/if}
</label>

{#if showError}
  <div class="modal" in:fade={{ duration: 200 }}>
    <div class="modal-content">
      <span class="close" on:click={closeModal}>&times;</span>
      <p>{virhe}</p>
    </div>
  </div>
{/if}

<style>
  label {
    width: 100%;
    margin: 15px 0;
  }

  input {
    width: 100%;
    margin: 15px 0;
    padding: 10px;
    border-radius: 8px;
    border: none;
    background: var(--bg-color);
    color: var(--text-color);
  }

  .modal {
    display: flex;
    position: fixed;
    z-index: 1;
    left: 50%;
    top: 20%;
    transform: translate(-50%, -100%);
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal-content {
    background-color: var(--sec-color);
    padding: 20px;
    border: 1px solid var(--text-color);
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    text-align: center;
    width: 80%;
    max-width: 400px;
  }

  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  p {
    color: var(--text-color);
    font-size: 16px;
    font-weight: 400;
    margin: 0;
  }
</style>
