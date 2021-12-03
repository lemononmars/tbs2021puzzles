<script>
	import Tab, {Label} from '@smui/tab';
  import TabBar from '@smui/tab-bar';
 
  let tabs = [
    {
      href: './home',
      label: 'หน้าแรก',
	 },
	 {
      href: './round1puzzles',
      label: 'ปริศนาด่านที่ 1',
	 },
   {
      href: './round2puzzles',
      label: 'ปริศนาด่านที่ 2',
	 },
   {
      href: './leaderboard',
      label: 'ตารางอันดับ',
	 },
	 {
      href: './wrapup',
      label: 'สรุปงาน',
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
