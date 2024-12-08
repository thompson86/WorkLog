<script>
  import { name, location, tasks, date } from '../store.js';

  function lahetaTiedot() {
    console.log('Yhteenveto lähetetty:', $name, $location, $date, $tasks);
  }
</script>

<div class="summaryboksi">
  <h2>Yhteenveto</h2>
  <p><strong>Nimi:</strong> {$name}</p>
  <p><strong>Paikkakunta:</strong> {$location}</p>
  <p><strong>Päivämäärä:</strong> {$date}</p>
  <h3>Tehdyt työt</h3>
  <ul>
    {#each $tasks as task}
      <li>{task.text}</li>
    {/each}
  </ul>
  <button on:click={lahetaTiedot}>Lähetä työnjohdolle</button>
</div>

<style>
  .summaryboksi {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    width: 300px;
    padding: 30px;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.8);
  }

  h2,
  h3 {
    color: var(--main-color);
    margin: 10px 0;
  }

  li {
    margin-left: -30px;
  }

  button {
    font-family: 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
    width: 100%;
    margin: 5px 0;
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
</style>
