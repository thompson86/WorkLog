<script>
  import '../app.css';
  import { fade } from 'svelte/transition';
  import { writable } from 'svelte/store';
  import ProgressBar from './ProgressBar.svelte';
  import Summary from './Summary.svelte';
  import { tasks } from '../store.js';

  let entries = writable([]);
  let newEntry = '';
  let showSummary = false;

  function addEntry() {
    if (newEntry.trim()) {
      const entry = {
        id: Date.now(),
        text: newEntry.trim(),
      };
      entries.update((current) => [...current, entry]);
      newEntry = '';
    }
  }

  function removeEntry(id) {
    entries.update((current) => current.filter((e) => e.id !== id));
  }

  function handleNext() {
    tasks.set($entries);
    showSummary = true;
  }
</script>

{#if showSummary}
  <Summary />
{:else}
  <div class="kontti">
    <h2>Valmistuneet työt</h2>
    <input
      type="text"
      bind:value={newEntry}
      placeholder="Kirjaa tehdyt työt tähän"
    />
    <button class="add-entry" on:click={addEntry}>Lisää merkintä</button>

    <ul>
      {#each $entries as { id, text } (id)}
        <li transition:fade>
          <span>{text}</span>
          <button on:click={() => removeEntry(id)}>X</button>
        </li>
      {/each}
    </ul>

    {#if $entries.length > 0}
      <button class="next-step" on:click={handleNext}>Seuraava</button>
    {/if}

    <ProgressBar step={2} />
  </div>
{/if}

<style>
  .kontti {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 320px;
    padding: 30px;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    color: var(--main-color);
  }

  input {
    width: 100%;
    padding: 10px;
    border-radius: 6px;
    border: none;
    background-color: var(--bg-color);
    color: var(--text-color);
    margin-bottom: 0.75rem;
  }

  /* LISÄÄ MERKINTÄ -NAPPPI */
  .add-entry {
    background-color: var(--main-color);
    color: var(--bg-color);
    border: none;
    border-radius: 8px;
    margin-top: 1.2rem;
    padding: 10px 16px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-bottom: 1.2rem;
    width: 100%;
  }

  .add-entry:hover {
    background-color: #ffa500;
  }

  /* SEURAAVA -NAPPI */
  .next-step {
    background-color: transparent;
    color: var(--text-color);
    border: 2px solid var(--main-color);
    margin-top: 2rem;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 1.5rem;
    width: 100%;
  }

  .next-step:hover {
    background-color: var(--main-color);
    color: var(--bg-color);
  }

  ul {
    list-style: none;
    padding: 0;
    width: 100%;
    max-height: 220px;
    overflow-y: auto;
    margin-top: 1rem;
  }

  li {
    background-color: var(--sec-color);
    color: var(--text-color);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    padding: 0.5rem 1rem;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    word-wrap: break-word;
  }

  li button {
    background: none;
    border: none;
    color: var(--main-color);
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
  }

  li button:hover {
    color: red;
  }
</style>
