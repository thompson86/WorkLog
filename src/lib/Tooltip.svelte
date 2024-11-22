<!-- Tooltipin käyttö slotilla -->

<!-- <script>
  import Tooltip from './Tooltip.svelte';
</script>

<Tooltip text="Tämä on tooltip-teksti">
  <button>Hover over me</button>
</Tooltip> -->

<script>
  export let text = '';
  let show = false;
</script>

<div
  class="tooltip"
  on:mouseover={() => (show = true)}
  on:mouseleave={() => (show = false)}
>
  <slot></slot>
  <!-- Tämä paikkaa sen elementin, jonka päälle tooltip tulee -->
  {#if show}
    <div class="tooltip-text">{text}</div>
  {/if}
</div>

<style>
  .tooltip {
    position: relative;
    display: inline-block;
  }

  .tooltip-text {
    visibility: hidden;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 125%; /* Sijoita tooltip elementin yläpuolelle */
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;
  }

  .tooltip:hover .tooltip-text {
    visibility: visible;
    opacity: 1;
  }
</style>
