<script>
  export let type = 'button';
  export let disabled = false;
</script>

<button {type} {disabled} on:click>
  <slot />
</button>

<style>
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
    width: 100%;
    margin: 10px 0;
    border: var(--main-color) solid 3px;
    border-radius: 20px;
    cursor: pointer;
    background-color: transparent;
    color: var(--text-color);
    font-size: 25px;
    box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.5);
    padding: 15px;
    margin-bottom: 1rem;
    transition: all 0.3s ease;
  }

  button:hover:enabled {
    background-color: var(--main-color);
    color: var(--text-color);
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>
