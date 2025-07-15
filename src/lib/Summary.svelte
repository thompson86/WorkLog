<script>
  import Modal from './Modal.svelte';
  import { name, location, site, date, tasks } from '../store.js';
  import { supabase } from '../supabaseClient.js';

  let showModal = false;
  let modalMessage = '';
  let modalType = 'success';

  async function lahetaTiedot() {
    const payload = {
      name: $name,
      location: $location,
      site: $site,
      date: $date,
      tasks: $tasks,
      created_at: new Date().toISOString(),
    };

    const { error } = await supabase.from('worklogs').insert(payload);

    if (error) {
      modalMessage = 'Virhe tallennuksessa: ' + error.message;
      modalType = 'error';
    } else {
      modalMessage = 'Yhteenveto tallennettu onnistuneesti!';
      modalType = 'success';
    }

    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }
</script>

<div class="summaryboksi">
  <h2>Yhteenveto</h2>
  <p><strong>Nimi:</strong> {$name}</p>
  <p><strong>Paikkakunta:</strong> {$location}</p>
  <p><strong>Työmaa:</strong> {$site}</p>
  <p><strong>Päivämäärä:</strong> {$date}</p>
  <h3>Tehdyt työt</h3>
  <ul>
    {#each $tasks as task}
      <li>{task.text}</li>
    {/each}
  </ul>
  <button on:click={lahetaTiedot}>Lähetä työnjohdolle</button>
  {#if showModal}
    <Modal message={modalMessage} type={modalType} onClose={closeModal} />
  {/if}
</div>

<style>
  .summaryboksi {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 2rem;
    margin: 2rem auto 4rem;
    max-width: 600px;
    width: 90%;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
    animation: fadeInUp 0.6s ease;
  }

  h2 {
    font-size: 1.8rem;
    color: var(--main-color);
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.2rem;
    color: var(--main-color);
    margin-top: 2rem;
  }

  ul {
    padding-left: 1rem;
    list-style: disc;
  }

  li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }

  button {
    align-self: center;
    background: transparent;
    border: 2px solid var(--main-color);
    color: var(--text-color);
    padding: 0.75rem 2rem;
    border-radius: 10px;
    font-size: 1rem;
    margin-top: 3rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  button:hover {
    background: var(--main-color);
    color: var(--bg-color);
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
