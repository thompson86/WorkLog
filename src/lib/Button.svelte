<!-- Tämä komponentti vastaa napin tyylittelystä. -->
<script>
  export let disabled = false;
</script>

<button {disabled}><slot></slot> </button>

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
  }
  button:hover {
    transition: ease-in-out 1s;
    background-color: var(--main-color);
    color: var(--text-color);
  }

  button:disabled {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
    background-color: transparent;
    cursor: not-allowed;
  }
  button:disabled:hover {
    background-color: var(--secbg-color);
  }
</style>
