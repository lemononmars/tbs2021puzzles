<script>
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
      href: '/hints',
      label: 'คำใบ้',
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
