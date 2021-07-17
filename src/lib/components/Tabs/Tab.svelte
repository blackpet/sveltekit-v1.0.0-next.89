<script>
  import { getContext } from 'svelte';
  import { TABS } from './Tabs.svelte';

  const tab = {};
  const { registerTab, selectTab, selectedTab } = getContext(TABS);

  registerTab(tab);
</script>

<li class="w-full text-center"
    class:selected={$selectedTab === tab} on:click={() => selectTab(tab)}>
  <span><slot></slot></span>
</li>

<style>
  li {@apply cursor-pointer;}
  li.selected {@apply relative;}
  li.selected::after {
    content: '';
    @apply absolute w-full h-0.5 bg-blue-600 left-0 -bottom-0.5 rounded;
  }
  li.selected span {
    @apply bg-blue-500 text-white font-semibold;
  }

  span {@apply px-6 py-2 rounded bg-gray-100;}
</style>
