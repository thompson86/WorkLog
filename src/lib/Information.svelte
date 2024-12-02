<script>
  import '../app.css';
  import ProgressBar from './ProgressBar.svelte';
  import Diary from './Diary.svelte';
  import TextInput from './TextInput.svelte';
  import { name, location, date } from '../store.js';

  let userName = '';
  let userLocation = '';
  let userDate = '';
  let showDiary = false;

  $: name.set(userName);
  $: location.set(userLocation);
  $: date.set(userDate);

  $: validName = userName.length >= 2;
  $: validLocation = userLocation.length >= 2;
  $: validDate = userDate.length >= 2;
  $: validForm = validName && validLocation && validDate;

  function handleNext() {
    if (validForm) {
      showDiary = true;
    }
  }
</script>

{#if showDiary}
  <Diary />
{:else}
  <div class="kontti">
    <form on:submit|preventDefault={handleNext} class="form">
      <TextInput
        bind:value={userName}
        valid={validName}
        label="Nimesi: "
        placeholder="Kirjoita tähän nimesi"
        minlength={2}
        virhe="Nimessä tulee olla vähintään kaksi merkkiä."
      />
      <TextInput
        bind:value={userLocation}
        valid={validLocation}
        label="Paikkakunta: "
        placeholder="Kirjoita tähän paikkakunta, jossa työskentelet"
        minlength={2}
        virhe="Paikkakunnan nimessä tulee olla vähintään kaksi merkkiä."
      />
      <TextInput
        type="date"
        bind:value={userDate}
        valid={validDate}
        label="Päivämäärä: "
        placeholder="Valitse päivämäärä"
        virhe="Kirjoita oikea päivämäärä."
      />
    </form>
    {#if validForm}
      <button on:click={handleNext}>Seuraava</button>
    {:else}
      <p>Täytä kaikki kentät jatkaaksesi.</p>
    {/if}
    <ProgressBar step={1} />
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

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

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
</style>
