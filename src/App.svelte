<script>
  import './app.css';
  import { writable } from 'svelte/store';
  import Button from './lib/Button.svelte';
  import Header from './lib/Header.svelte';
  import Footer from './lib/Footer.svelte';
  import Information from './lib/Information.svelte';
  import Diary from './lib/Diary.svelte';
  import Summary from './lib/Summary.svelte';
  import { fade } from 'svelte/transition';

  const role = writable(null);
  const step = writable(1);

  function handleLogin(roleValue) {
    role.set(roleValue);
  }

  function nextStep() {
    step.update((n) => Math.min(n + 1, 3));
  }

  function prevStep() {
    step.update((n) => Math.max(n - 1, 1));
  }

  export function resetApp() {
    role.set(null);
    step.set(1);
  }

  const diaryHasEntries = writable(false);
</script>

<main>
  <Header {resetApp} />

  {#if $role === null}
    <div class="login-box" in:fade={{ duration: 600 }}>
      <img
        class="kuva"
        src="/WorkLog_logo.svg"
        alt="WorklogPro Logo"
        in:fade={{ duration: 1200 }}
      />
      <p>Smoother Work Experience for Businesses</p>
      <h2>Kirjaudu sisään</h2>
      <button on:click={() => handleLogin('employee')}>Työntekijä</button>
      <Button disabled>Työnantaja</Button>
    </div>
  {:else if $role === 'employee'}
    {#if $step === 1}
      <Information />
    {:else if $step === 2}
      <Diary bind:hasEntries={$diaryHasEntries} />
      {#if $diaryHasEntries}
        <button on:click={nextStep}>Seuraava</button>
      {/if}
    {:else if $step === 3}
      <Summary />
    {/if}
  {/if}

  <Footer>Copyright © Tommi Hallila. 2024.</Footer>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: url('/taustakuva.jpg') no-repeat center fixed;
    background-size: cover;
  }

  .kuva {
    min-width: 300px;
    min-height: 200px;
    max-width: 300px;
    max-height: 200px;
    display: block;
  }

  .login-box {
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

  .login-box img {
    width: 150px;
    height: auto;
  }

  .login-box p {
    margin-top: -30px;
    margin-bottom: 20px;
    text-align: center;
  }

  .login-box h2 {
    margin-bottom: 20px;
    font-size: 20px;
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
