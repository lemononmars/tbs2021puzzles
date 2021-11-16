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
      label: 'ปริศนา (ตารางตัวอักษร 5x5)',
	 },
	 {
      href: '/round1/submit',
      label: 'ส่งคำตอบ',
	 },
	 {
      href: '/round1/about',
      label: 'เกี่ยวกับ',
	 },
  ];
  let active = tabs[0];
</script>

<nav>
  <TabBar {tabs} let:tab bind:active>
    <Tab {tab} href={tab.href} minWidth>
      <Label>{tab.label}</Label>
    </Tab>
  </TabBar>
</nav>
