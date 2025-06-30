<script>
  import '../app.css';
  import ProgressBar from './ProgressBar.svelte';
  import Diary from './Diary.svelte';
  import TextInput from './TextInput.svelte';
  import { name, location, site, date } from '../store.js';
  import { fade } from 'svelte/transition';

  let userName = '';
  let userLocation = '';
  let userSite = '';
  let userDate = '';
  let showDiary = false;

  $: name.set(userName);
  $: location.set(userLocation);
  $: site.set(userSite);
  $: date.set(userDate);

  $: validName = userName.length >= 2;
  $: validLocation = userLocation.length >= 2;
  $: validSite = userSite.length >= 2;
  $: validDate = userDate.length >= 2;
  $: validForm = validName && validLocation && validSite && validDate;

  function handleNext() {
    if (validForm) showDiary = true;
  }
</script>

{#if showDiary}
  <Diary />
{:else}
  <div class="form-container" in:fade>
    <form on:submit|preventDefault={handleNext} class="form">
      <TextInput
        bind:value={userName}
        valid={validName}
        label="Nimesi:"
        placeholder="Kirjoita tähän nimesi"
        minlength={2}
        virhe="Nimessä tulee olla vähintään kaksi merkkiä."
      />

      <TextInput
        bind:value={userLocation}
        valid={validLocation}
        label="Työmaan osoite:"
        placeholder="Esim. Urheilukatu 29, Helsinki"
        minlength={2}
        virhe="Paikkakunnan nimessä tulee olla vähintään kaksi merkkiä."
      />

      <TextInput
        bind:value={userSite}
        valid={validSite}
        label="Työmaa:"
        placeholder="Esim. REDI, Tripla, Satamatyömaa"
        minlength={2}
        virhe="Työmaan nimessä tulee olla vähintään kaksi merkkiä."
      />

      <TextInput
        type="date"
        bind:value={userDate}
        valid={validDate}
        label="Päivämäärä:"
        placeholder="Valitse päivämäärä"
        virhe="Valitse päivämäärä."
      />

      <div class="button-wrapper">
        {#if validForm}
          <button on:click={handleNext}>Seuraava</button>
        {:else}
          <p class="error-text">Täytä kaikki kentät jatkaaksesi.</p>
        {/if}
      </div>
    </form>

    <ProgressBar step={1} />
  </div>
{/if}

<style>
  .form-container {
    background: rgba(20, 20, 20, 0.75);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 2.5rem;
    max-width: 480px;
    margin: 0 auto;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }

  button {
    background-color: transparent;
    border: 2px solid var(--main-color);
    color: var(--text-color);
    padding: 0.75rem 2rem;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition:
      background 0.3s ease,
      color 0.3s ease;
  }

  button:hover {
    background-color: var(--main-color);
    color: var(--color-dark);
  }

  .error-text {
    color: #f88;
    text-align: center;
    font-size: 0.95rem;
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
