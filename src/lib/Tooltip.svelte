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
    position: absolute;
    bottom: -40px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(20, 20, 20, 0.8);
    backdrop-filter: blur(10px);
    color: var(--text-color);
    padding: 4px 10px;
    font-size: 0.8rem;
    border-radius: 8px;
    white-space: nowrap;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
    z-index: 1000;
  }

  .tooltip:hover .tooltip-text {
    opacity: 1;
    pointer-events: auto;
  }
</style>
