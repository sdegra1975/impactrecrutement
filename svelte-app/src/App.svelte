<script>
  import './styles.scss';
  import { Router, Link, Route } from 'svelte-routing';
  import About from './About.svelte';
  import Candidats from './candidats/Candidats.svelte';

  import { HeaderBar, NavBar, PageNotFound, Redirect } from './components';

  export let url = '';
</script>

<HeaderBar />
<div class="section columns">
  <Router {url}>
    <NavBar />
    <main class="column">
      <div>
        <Route path="/">
          <Redirect path="/candidats" />
        </Route>
        <Route path="/candidats" component={Candidats} />
        <Route path="/about" component={About} />
        <Route path="**" component={PageNotFound} />
      </div>
    </main>
  </Router>
</div>
