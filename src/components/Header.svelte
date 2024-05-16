<script>
  //
</script>

<header>
  <nav>
    <div class="logo">
      <a href="/">
        <img src="./src/static/img/Svelte_Logo.png" alt="Logo" />
      </a>
    </div>
    <div class="menu">
      <ul>
        <li>
          <a href="/">[home]</a>
        </li>
        <li>
          <a href="https://github.com/qzdn/song-requests">[github]</a>
        </li>
      </ul>
    </div>
  </nav>
</header>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .logo {
    display: flex;
  }

  div.logo > a > img {
    width: 32px;
    margin-bottom: 0;
  }

  div.logo > a:hover {
    border: none;
  }

  .menu {
    display: flex;
  }

  ul {
    display: flex;
    list-style: none;
    margin: auto;
  }

  nav li + li:before {
    content: "/";
    padding: 0 10px;
  }
</style>
