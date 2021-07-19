<script lang="ts">
  import {Tabs, TabList, Tab, TabPanel} from '../../lib/components/Tabs';

  function select({detail}) {
    console.log('select', detail);
  }
</script>

<Tabs on:selectTab={select}>
  <TabList>
    <Tab tab={{id: 1}}>Tab1</Tab>
    <Tab tab="mytab">My</Tab>
    <Tab>Contact</Tab>
    <Tab>Notice</Tab>
  </TabList>

  <TabPanel>
    tab1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quam sequi sunt vitae, voluptate voluptatibus? Molestiae officia repellendus reprehenderit voluptates.
  </TabPanel>
  <TabPanel>
    my Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quam sequi sunt vitae, voluptate voluptatibus? Molestiae officia repellendus reprehenderit voluptates.
  </TabPanel>
  <TabPanel>
    contact Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quam sequi sunt vitae, voluptate voluptatibus? Molestiae officia repellendus reprehenderit voluptates.
  </TabPanel>
  <TabPanel>
    notice Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quam sequi sunt vitae, voluptate voluptatibus? Molestiae officia repellendus reprehenderit voluptates.
  </TabPanel>
</Tabs>


<div class="h-8"></div>
<Tabs width="w-1/2" on:selectTab={select}>
  <TabList>
    <Tab tab={{id: 1}}>50%</Tab>
    <Tab tab="mytab">width</Tab>
    <Tab>tabs</Tab>
    <Tab>"w-1/2"</Tab>
  </TabList>

  <TabPanel>
    tab1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quam sequi sunt vitae, voluptate voluptatibus? Molestiae officia repellendus reprehenderit voluptates.
  </TabPanel>
  <TabPanel>
    my Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quam sequi sunt vitae, voluptate voluptatibus? Molestiae officia repellendus reprehenderit voluptates.
  </TabPanel>
  <TabPanel>
    contact Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quam sequi sunt vitae, voluptate voluptatibus? Molestiae officia repellendus reprehenderit voluptates.
  </TabPanel>
  <TabPanel>
    notice Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quam sequi sunt vitae, voluptate voluptatibus? Molestiae officia repellendus reprehenderit voluptates.
  </TabPanel>
</Tabs>
