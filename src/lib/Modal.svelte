<script>
  export let message = '';
  export let type = 'success';
  export let onClose = () => {};
</script>

<div class="modal-backdrop" on:click={onClose}>
  <div class="modal-window" on:click|stopPropagation>
    <h2 class={type === 'success' ? 'success' : 'error'}>
      {type === 'success' ? 'Onnistui' : 'Virhe'}
    </h2>
    <p>{message}</p>
    <button on:click={onClose}>Sulje</button>
  </div>
</div>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
  }

  .modal-window {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px);
    border-radius: 16px;
    padding: 2rem;
    color: white;
    width: 90%;
    max-width: 400px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
  }

  h2.success {
    color: #4caf50;
  }

  h2.error {
    color: #f44336;
  }

  button {
    margin-top: 1.5rem;
    padding: 0.5rem 1.5rem;
    border: 2px solid var(--main-color);
    background: transparent;
    color: var(--text-color);
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  button:hover {
    background: var(--main-color);
    color: var(--bg-color);
  }
</style>
