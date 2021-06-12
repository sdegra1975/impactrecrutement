<script>
	let src = './Logo-150.png';
</script>
<div class="navbar-brand">
  <a
    class="navbar-item"
    href="https://svelte.dev/"
    target="_blank"
    rel="noopener noreferrer">
    <img src="./svelte-icon.png" alt="Svelte" />
  </a>
  <router-link to="/" class="navbar-item nav-home">
    <img {src} alt="Logo d'Impact Recrutement">
  </router-link>
</div>
