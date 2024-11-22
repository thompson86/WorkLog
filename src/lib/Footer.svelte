<!-- Tämä komponentti vastaa alhaalla olevasta footer -elementistä. -->

<script>
  import '../app.css';
</script>

<footer><slot /></footer>

<style>
  footer {
    font-size: 15px;
    font-weight: 500;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    background-color: var(--bg-color);
    color: var(--text-color);
    height: 2.5em;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
