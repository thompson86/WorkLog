<script>
  import '../app.css';
  import { writable } from 'svelte/store';
  import ProgressBar from './ProgressBar.svelte';
  import Summary from './Summary.svelte';
  import { tasks } from '../store.js';

  let entries = writable([]);
  let newEntry = '';
  let showSummary = false;

  function addEntry() {
    if (newEntry.trim()) {
      entries.update((currentEntries) => [...currentEntries, newEntry.trim()]);
      newEntry = '';
    }
  }

  function removeEntry(index) {
    entries.update((currentEntries) =>
      currentEntries.filter((_, i) => i !== index)
    );
  }

  function handleNext() {
    tasks.set($entries); // Tallennetaan merkinnät storeen
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
    <button on:click={addEntry}>Lisää merkintä</button>

    <ul>
      {#each $entries as entry, index}
        <li>
          <span>{entry}</span>
          <button on:click={() => removeEntry(index)}>X</button>
        </li>
      {/each}
    </ul>

    {#if $entries.length > 0}
      <button on:click={handleNext}>Seuraava</button>
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
    width: 300px;
    padding: 30px;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
  }

  input {
    width: calc(100% - 22px);
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 0.5rem;
  }

  button {
    font-family: 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
    width: 100%;
    margin: 10px 0;
    border: white solid 0.5px;
    border-radius: 10px;
    cursor: pointer;
    background-color: var(--sec-color);
    color: white;
    font-size: 20px;
    box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.5);
    padding: 10px;
    margin-top: 1.5rem;
  }

  button:hover {
    background-color: var(--main-color);
    transition: ease-in-out 1s;
    color: var(--bg-color);
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 0;
    list-style: none;
    width: 100%;
    max-height: 500px;
    overflow-y: auto;
  }

  ul::-webkit-scrollbar {
    width: 12px;
  }

  ul::-webkit-scrollbar-track {
    background: black;
  }

  ul::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 20px;
    border: 3px solid black;
  }

  li {
    flex: 0 1 100%;
    padding: 10px;
    position: relative;
    background: var(--sec-color);
    border-radius: 4px;
    border: 1px solid var(--text-color);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: pre-wrap;
  }

  li button {
    font-family: 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
    width: auto;
    height: auto;
    border: none;
    cursor: pointer;
    background-color: transparent;
    color: var(--secbg-color);
    font-size: 14px;
    padding: 2px 5px;
    margin: 0;
    top: 5px;
    right: 5px;
  }

  li span {
    margin-right: 15px;
  }
</style>
