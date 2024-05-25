<script lang="ts">
  import Logo from "../assets/svelte.svg";
  import Icon from "@iconify/svelte";
  import Button from "./Button.svelte";
  import HeaderLink from "./HeaderLink.svelte";

  export let isLoggedIn = false;
</script>

<header
  id="header"
  class="container mx-auto bg-stone-950 flex items-center justify-between text-white h-16 max-w-full"
>
  <div id="logo" class="flex m-3">
    <img src={Logo} alt="Logo" class="mr-3" />
    <p class="font-bold text-lg">Stream Tools</p>
  </div>

  <nav id="menu" class="hidden sm:flex items-center">
    <ul id="menu-list" class="inline-flex items-center">
      {#if isLoggedIn}
        <HeaderLink text="Song requests" />
        <HeaderLink text="Settings" />
      {/if}
    </ul>
    <ul id="menu-login" class="inline-flex">
      <li>
        {#if isLoggedIn}
          <Button additionalClasses="px-5 py-2 m-2">Logout</Button>
        {:else}
          <Button additionalClasses=" px-5 py-2 m-2"
            ><Icon
              icon="mdi:twitch"
              height="32"
              class="inline-flex items-baseline align-middle mr-2"
            />Login</Button
          >
        {/if}
      </li>
    </ul>
  </nav>

  <button id="menu-toggle" class="inline-block sm:hidden m-3">
    <Icon icon="ci:hamburger-lg" height="32" />
  </button>
</header>
