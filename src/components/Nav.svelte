<script>
  export let segment
	import Tab, {Label} from '@smui/tab';
   import TabBar from '@smui/tab-bar';
 
  let tabs = [
    {
      href: '/',
      label: 'หน้าแรก',
	 },
	 {
      href: '/puzzles',
      label: 'ปริศนา',
	 },
	 {
      href: '/submit',
      label: 'ส่งคำตอบ',
	 },
	 {
      href: '/leaderboard',
      label: 'อันดับ',
	 },
	 {
      href: '/about',
      label: 'เกี่ยวกับ',
	 },
  ];
  let active = tabs[0];
</script>

<TabBar {tabs} let:tab bind:active>
  <Tab {tab} href={tab.href} minWidth>
    <Label>{tab.label}</Label>
  </Tab>
</TabBar>
