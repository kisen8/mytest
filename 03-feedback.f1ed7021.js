const e=document.querySelector(".feedback-form"),t=document.querySelector('input[name="email"]'),a=document.querySelector('textarea[name="message"]');e.addEventListener("input",(function(){const e={email:t.value,message:a.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))})),e.addEventListener("submit",(function(r){r.preventDefault();const{email:o,message:l}=r.currentTarget;if(""===o.value||""===l.value)return alert("Please take info for all of fields");JSON.parse(localStorage.getItem("feedback-form-state")),console.log({mail:t.value,mess:a.value}),e.reset(),localStorage.removeItem("feedback-form-state")}));const r=(e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}})("feedback-form-state");r&&(t.value=r.email,a.value=r.message);
//# sourceMappingURL=03-feedback.f1ed7021.js.map
