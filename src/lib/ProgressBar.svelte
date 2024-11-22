<!-- Tämä komponentti kertoo lomakkeen edistymisestä -->

<script>
  export let step = 1;
</script>

<!-- Tähän hain apuja tutoriaalista uDemyn kurssista -->

<div class="progress-bar">
  <div class="bar segment-1 {step >= 1 ? 'completed' : 'inactive'}"></div>
  <div class="bar segment-2 {step >= 2 ? 'completed' : 'inactive'}"></div>
  <div class="bar segment-2 {step >= 3 ? 'completed' : 'inactive'}"></div>
  <div class="circle {step === 4 ? 'completed' : 'inactive'}"></div>
</div>

<style>
  .progress-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0;
  }

  .bar {
    width: 60px;
    height: 10px;
    background-color: var(--text-color);
    margin: 0 5px;
    border-radius: 2px;
  }

  .circle {
    width: 20px;
    height: 20px;
    background-color: var(--text-color);
    border-radius: 50%;
    margin-left: 10px;
  }

  .completed {
    background-color: var(--main-color);
  }

  .inactive {
    background-color: var(--text-color);
  }
</style>
