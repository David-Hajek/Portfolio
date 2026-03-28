import { a as attr, e as escape_html } from "../../../chunks/attributes.js";
import "svelte-reveal";
function _page($$payload) {
  let contactName = "";
  let contactEmail = "";
  let contactMessage = "";
  $$payload.out += `<div class="contact-section svelte-z0jhy3"><div id="glass-contact" class="svelte-z0jhy3"></div> <div class="contact-container svelte-z0jhy3"><div class="contact-content svelte-z0jhy3"><h1 class="contact-title svelte-z0jhy3">Get in Touch</h1> <div class="accent-bar contact-accent svelte-z0jhy3"></div> <div class="contact-description svelte-z0jhy3"><p class="svelte-z0jhy3">Have a project in mind or want to discuss a collaboration? I'd love to hear from you!</p></div> <div class="contact-form-wrapper svelte-z0jhy3">`;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<form action="https://api.web3forms.com/submit" method="POST" class="contact-form svelte-z0jhy3">`;
    {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <input type="hidden" name="access_key" value="f137eaa0-a7d6-46b3-8abb-3e3d55cd79da"> <div class="form-group svelte-z0jhy3"><label for="contactName" class="svelte-z0jhy3">Name</label> <input type="text" name="name" id="contactName"${attr("value", contactName)} placeholder="Your name" required class="svelte-z0jhy3"></div> <div class="form-group svelte-z0jhy3"><label for="contactEmail" class="svelte-z0jhy3">Email</label> <input type="email" name="email" id="contactEmail"${attr("value", contactEmail)} placeholder="Your email address" required class="svelte-z0jhy3"></div> <div class="form-group svelte-z0jhy3"><label for="contactMessage" class="svelte-z0jhy3">Message</label> <textarea name="message" id="contactMessage" placeholder="Tell me about your project or inquiry" rows="5" required class="svelte-z0jhy3">`;
    const $$body = escape_html(contactMessage);
    if ($$body) {
      $$payload.out += `${$$body}`;
    }
    $$payload.out += `</textarea></div> <input type="checkbox" name="botcheck" class="hidden" style="display: none;"> <button type="submit" class="submit-btn svelte-z0jhy3">Send Message</button></form>`;
  }
  $$payload.out += `<!--]--></div></div></div></div>`;
}
export {
  _page as default
};
