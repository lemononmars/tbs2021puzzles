var r=[["READS","UNDER","CELLS","TAKEN","TWICE","ENTER"],["SKIP","ROLL","DRAW","PICK","PRIZE"]],E=[["ABC","(ด่าน 2 PUZZLE D) ใช่แล้ว เพลงนี้หละ! แล้วจะถอดรหัสต่ออย่างไรดี"],["ABCSONG","(ด่าน 2 PUZZLE D) ใช่แล้ว เพลงนี้หละ! แล้วจะถอดรหัสต่ออย่างไรดี"],["TOPRIGHTCORNER","(ด่าน 2 PUZZLE A) ถูกต้อง! แต่ยังไม่ใช่คำตอบ ทำต่ออีกนิด"],["CETER","(ด่าน 1 ข้อสุดท้าย) ใช่! ช่องเหล่านี้ถูกใช้สองครั้ง แต่คำสั่งไม่ได้บอกให้ตอบช่องนี้นะ"],["STAR","(ด่าน 2 PUZZLE D) ใช่แล้ว! คำที่หายไปในชื่อเพลงคือ STAR แต่นั่นไม่ใช่เพลงที่เป็นคำตอบ อ่านโจทย์อีกทีนะ ว่าเป็นเพลงอะไร"],["SONG","(ด่าน 2 PUZZLE D) เพลง... นั่นสิ เพลงอะไรนะ"],["READBLUE","(ด่าน 2 PUZZLE B) ถูกทางแล้ว ทำตามคำสั่งต่อเลย มีอะไรสีน้ำเงินบ้าง"],["RL","(ด่าน 2 PUZZLE B) ยังไม่ครบ ขาดอีกสองตัว"],["ROL","(ด่าน 2 PUZZLE B) ยังไม่ครบ ออกไปดื่มน้ำดื่มท่าแล้วกลับมาอีกทีนะ"],["TWINKLE","(ด่าน 2 PUZZLE D) เพลงนี้แหละ! มีอีกเพลงที่ทำนองเดียวกัน "],["TWINKLETWINKELITTLESTAR","(ด่าน 2 PUZZLE D) เพลงนี้แหละ! มีอีกเพลงที่ทำนองเดียวกัน"],["ANDER","(ด่าน 1 ข้อ 2) ตำแหน่งถูกหมด แต่พลิกจากแนวตั้งเป็นแนวนอนนะ"]],n=["ภาพที่เห็นเป็นส่วนหนึ่งของในงาน Thailand Board Game Show 2021 <br> คุ้น ๆ กันไหมว่ามันอยู่ตรงไหนบ้าง? <br> เติมคำในช่องว่าง แล้วลองเทียบตัวอักษรกับ EMOJI ดูสิ","4 อักษรงั้นเหรอ ทำไมเห็นแค่ 2 ล่ะ ?? <br> อักษร 1 ตัว ค่อนข้างต่างไปจากพวกหน่อย <br> อักษรอีก 1 ตัวต้องมองทั้งกระดานถึงจะเห็น","เลข 4 ลากผ่านตัว E <br> แต่เลข 2 ไม่ได้ลากผ่านตัว A","เพลงนี้เป็นเพลงที่คุณคุ้นเคยดีตอนเริ่มท่อง 'อักษรภาษาอังกฤษ' <br> เทียบเนื้อเพลงกับตัวโน้ตดูสิ <br>(ลองดีดเปียโน อาจจะช่วยให้นึกชื่อเพลงออกได้นะ)","คุณไขปริศนาด่านที่ 1 รอบ ๆ งานครบแล้วหรือยัง? <br> หากยัง คุณควรไปไขปริศนาให้ครบก่อน <br> จากนั้นลองดูในตาราง 5x5 ของด่านที่ 1 จะมีตำแหน่งของตัวอักษรที่ยังไม่ได้ถูกใช้อยู่ <br> ส่วนภาพปริศนาในข้อนี้ 1 ช่องเท่ากับอักษรภาษาอังกฤษ 1 ตัว <br> คุณผ่านมาแล้วทั้งนั้นแหละคุ้นเคยกันดีไม่ยากใช่ไหมล่ะ !!"];function e(n){var e={isCorrect:!1,isFinished:!1,message:""};if(!n||!n.answer)return e;const i=encodeURI(n.answer.split(" ").join("").toUpperCase()),L=r[n.round][n.id],Z=i===L;return e.isCorrect=Z,e.message=Z?"ถูกต้อง!✔️":function(r,n){const e=E.find((E=>E[0]===r));if(e)return"⚠️"+e[1];if(r.length!=n.length)return"ยังไม่ถูก ❌";var i=0;for(var L in n)i+=r[L]===n[L]?1:0;return i==n.length-1?"⚠️ ผิดตัวอักษรเดียว ตรวจคำตอบอีกที":"ยังไม่ถูก ❌"}(i,L),Z&&(0==n.round&&5==n.id||1==n.round&&4==n.id)&&(e.isFinished=!0),e}export{n as h,e as s};