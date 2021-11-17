<script>
	import Button, { Label } from '@smui/button';
</script>

<div class = 'main'>
	<h1>ยินดีต้อนรับเข้าสู่ด่านที่ 1 ของเกมปริศนา <br> Thailand Board Game Show 2021</h1>
	<img src="./favicon.png/" alt="Thailand Board Game Show logo"/><br/>
	
	<h1>วิธีเล่น</h1>

	<ol>
		<li> คัดลอก <Button href='https://tbs2021puzzles.herokuapp.com/round1' target='_blank'>
			<Label>ลิงก์นี้</Label></Button> แล้วเปิดใหม่ใน web browser หรือกด Ctrl ค้างไว้แล้วคลิกที่ลิงก์</li>
		<li>แก้ปริศนา 5 ข้อ โดยอ่านโจทย์และส่งคำตอบในแถบ <Button href='/round1/puzzles'>
			<Label>ปริศนา</Label>
		</Button> (ด้านบน) </li>
		<li>นำคำตอบของปริศนาทั้ง 5 ข้อมาอ่านเรียงกัน เพื่อแก้ปริศนาข้อสุดท้าย</li>
		<li>นำคำตอบของปริศนาข้อสุดท้าย ใส่เป็นรหัสผ่านประตูเพื่อไปด่านถัดไป</li>
		<li><em>แนะนำ</em>ให้จดคำตอบของทุกข้อเก็บไว้ อาจเป็นประโยชน์</li>
	</ol>

	<Button href='/round1/puzzles'>
		<Label>เริ่มเลย!</Label>
	</Button>
</div>