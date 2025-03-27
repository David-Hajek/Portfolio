<script>
// Contact form data
let contactName = '';
let contactEmail = '';
let contactMessage = '';
let formSubmitted = false;
let formError = '';
import { reveal } from 'svelte-reveal';
// Handle contact form submission
function handleContactSubmit() {
  // Form validation
  if (!contactName || !contactEmail || !contactMessage) {
    formError = 'Please fill out all fields';
    return;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(contactEmail)) {
    formError = 'Please enter a valid email address';
    return;
  }
  
  // Clear any previous errors
  formError = '';
  
  // Handle form submission - This would typically send data to a server
  console.log('Form submitted:', { contactName, contactEmail, contactMessage });
  formSubmitted = true;
  
  // Reset form after delay
  setTimeout(() => {
    contactName = '';
    contactEmail = '';
    contactMessage = '';
    formSubmitted = false;
  }, 5000);
}
</script>
 <!-- Contact Form Section -->
 <div class="contact-section">
    <div id="glass-contact"></div>
    <div class="contact-container">
      <div class="contact-content" use:reveal={{ preset: "slide", delay: 300 }}>
        <h1 class="contact-title" >Get in Touch</h1>
        <div class="accent-bar contact-accent"></div>
        
        <div class="contact-description">
          <p>Have a project in mind or want to discuss a collaboration? I'd love to hear from you!</p>
        </div>
        
        <div class="contact-form-wrapper">
          {#if formSubmitted}
            <div class="success-message">
              <h3>Thank you for your message!</h3>
              <p>I'll get back to you as soon as possible.</p>
            </div>
          {:else}
            <form  action="https://api.web3forms.com/submit" method="POST" class="contact-form">
              {#if formError}
                <div class="error-message">
                  <p>{formError}</p>
                </div>
              {/if}
              <input type="hidden" name="access_key" value="f137eaa0-a7d6-46b3-8abb-3e3d55cd79da">
              <div class="form-group">
                <label for="contactName">Name</label>
                <input 
                  type="text" 
                  name="name"
                  id="contactName" 
                  bind:value={contactName} 
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div class="form-group">
                <label for="contactEmail">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="contactEmail"
                  bind:value={contactEmail} 
                  placeholder="Your email address"
                  required
                />
              </div>
              
              <div class="form-group">
                <label for="contactMessage">Message</label>
                <textarea 
                  name="message"
                  id="contactMessage" 
                  bind:value={contactMessage} 
                  placeholder="Tell me about your project or inquiry"
                  rows="5"
                  required
                ></textarea>
              </div>
              <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
              <button type="submit" class="submit-btn">Send Message</button>
            </form>
          {/if}
        </div>
      </div>
    </div>
  </div>
  <style>
     @media (max-width: 480px) {
    .contact-section {
      min-height: auto;
      padding: 1rem;
    }

    .contact-container {
      padding: 0;
    }

    .form-group label {
      font-size: 0.9rem;
    }

    .submit-btn {
      width: 100%;
      padding: 0.8rem;
    }
  }

   /* Contact Section Styles */
   .contact-section {
    width: 100%;
    min-height: 91vh;
    position: relative;
    padding: 2rem;
    background: linear-gradient(135deg, rgba(2, 19, 31, 0.76), rgba(3, 31, 17, 0.575));
  }

  #glass-contact {
    z-index: -5;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(40, 145, 231, 0.1);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  }

  .contact-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0rem 0.5rem;
  }

  .contact-content {
    display: flex;
    flex-direction: column;
    align-items: left;
  }

  .contact-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1rem;
    text-align: left;
    justify-content: left;
  }
  .accent-bar.contact-accent {
    width: 100%;
    height: 6px;
    margin: 0 0 3rem 0;
    background: linear-gradient(90deg, #4a90e2 0%, #67b26f 100%);
    border-radius: 3px;
  }

  .contact-description {
    text-align: left;
    max-width: 700px;
    margin-bottom: 3rem;
  }

  .contact-description p {
    font-size: clamp(1.1rem, 1.8vw, 1.3rem);
    color: var(--text-secondary);
    line-height: 1.6;
  }

  .contact-form-wrapper {
    width: 100%;
    max-width: 100%;
    background: rgba(115, 199, 233, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    padding: 2.5rem;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form-group label {
    font-size: 1rem;
    font-weight: 500;
    color: var(--text-primary);
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    color: var(--text-primary);
    font-size: 1rem;
    transition: all 0.3s ease;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
  }

  .form-group textarea {
    resize: vertical;
    min-height: 120px;
  }

  .submit-btn {
    padding: 1rem 2rem;
    background: linear-gradient(45deg, #4a90e2, #67b26f);
    border: none;
    border-radius: 12px;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 1rem;
    position: relative;
    overflow: hidden;
  }

  .submit-btn:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: all 0.6s;
  }

  .submit-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .submit-btn:hover:before {
    left: 100%;
  }

  .submit-btn:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  .success-message {
    text-align: center;
    padding: 3rem 2rem;
  }

  .success-message h3 {
    font-size: 1.8rem;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  .success-message p {
    font-size: 1.2rem;
    color: var(--text-secondary);
  }

  .error-message {
    background: rgba(255, 59, 48, 0.2);
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid rgba(255, 59, 48, 0.3);
  }

  .error-message p {
    color: var(--text-primary);
    font-size: 1rem;
    margin: 0;
    text-align: center;
  }

  </style>