<script>
  //export let segment
	import Tab, {Label} from '@smui/tab';
  import TabBar from '@smui/tab-bar';
 
  let tabs = [
    {
      href: '/round1/',
      label: 'หน้าแรก',
	 },
	 {
      href: '/round1/puzzles',
      label: 'ปริศนา',
	 },
	 {
      href: '/round1/about',
      label: 'รางวัล',
	 },
  ];
  let active = tabs[0];
</script>

<nav class='navbar'>
  <TabBar {tabs} let:tab bind:active>
    <Tab {tab} href={tab.href}>
      <Label>{tab.label}</Label>
    </Tab>
  </TabBar>
</nav>

<style>
  .navbar{
    background-color: white;
    position:fixed; 
    top:0; 
    width: 100%; 
    z-index: 1;
  }
</style>
