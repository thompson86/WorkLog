<!-- Tämä komponentti vastaa ylhäällä olevasta header -elementistä. -->

<script>
  import '../app.css';
  export let name = 'WorkLog Pro v1.0.1';
  export let resetApp;
</script>

<body>
  <header>
    <p on:click={resetApp}>{name}</p>
  </header>
</body>

<style>
  header {
    font-size: 25px;
    font-weight: 400;
    background-color: var(--bg-color);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    color: var(--text-color);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 2em;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
  }

  p {
    margin: 30px;
    cursor: pointer;
  }
</style>
