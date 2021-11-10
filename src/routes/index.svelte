<script>
	import {store} from '../stores/save'
	import {onMount} from 'svelte'
	import Textfield from '@smui/textfield'
	import Button, { Label } from '@smui/button';

	let isRegistered = false;
	let user = ''
	let email = ''

	onMount(async() => {
		store.useLocalStorage()
		if($store.user === '') 
			return;
			
		email = $store.email
		user = $store.user
		isRegistered = true
	})

	function submit(){
		$store.email = email
		$store.user = user
		isRegistered = true
	}
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

{#if !isRegistered}
<div style='text-align:center'>
<img src="./favicon.png/" alt="Thailand Board Game Show logo"/><br/>
<Textfield variant="outlined" label="e-mail (ที่ใช้สมัครงาน TBS2021)" bind:value={email}/><br/>
<Textfield variant="outlined" label="ชื่อ (สำหรับขึ้นในตารางอันดับ)" bind:value={user}/><br/>
<Button variant="outlined" on:click={submit}>
	<Label>Save</Label>
</Button>
</div>
{:else}
<div style = 'text-align:center'> 
	<h2>สวัสดี {$store.user} </h2>
	<Button variant="outlined" on:click={() => isRegistered = false}>
		<Label>แก้ใขข้อมูล</Label>
	</Button>
</div>



<h1>วิธีเล่น</h1>

<p>หาคำใบ้ในแผนที่ gather.town ในงาน Thailand Board Game Show 2021 และนำคำตอบมาใส่ในส่วน Puzzles (แถบด้านบน)</p>

<h1>กติกา</h1>
<ol>
	<li>คำตอบเป็นภาษาอังกฤษ (A-Z) โดยจะพิมพ์ตอบด้วยตัวใหญ่หรือเล็กก็ได้</li>
	<li>ใช้ข้อมูลจาก gather.town และจากตารางตัวอักษร 5x5 เท่านั้น</li> 
	<li>ไม่ต้อง Google หาข้อมูล ใช้ความรู้ทั่วไปพอ</li>
</ol>
{/if}