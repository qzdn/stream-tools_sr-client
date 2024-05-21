<script>
  import logo from "../../static/img/Svelte_Logo.png";
</script>

<header class="header">
  <div class="header-item">
    <a class="header-item logo" href="/">
      <img src={logo} alt="Logo" />
    </a>
  </div>
  <div class="header-item">
    <nav class="header-item menu">
      <ul>
        <li>
          <a href="/">[home]</a>
        </li>
        <li>
          <a href="https://github.com/qzdn/song-requests">[github]</a>
        </li>
      </ul>
    </nav>
  </div>
</header>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    margin-bottom: 1rem;
    background-color: #103055;
    color: white;
  }

  .header-item {
    margin: 10px;
  }

  a.logo > img {
    width: 32px;
  }

  ul {
    display: flex;
    list-style: none;
  }

  ul > li > a {
    color: inherit;
    text-decoration: none;
  }

  ul > li > a:hover {
    font-weight: bold;
  }

  nav li + li:before {
    content: "/";
    padding: 0 10px;
  }
</style>
