<template>
  <header>
    <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light fixed-top">
      <div class="container-fluid">
        <div>
          Help R-Project // onGRID Challenge
        </div>
        <button data-mdb-button-init class="navbar-toggler" type="button" data-mdb-collapse-init data-mdb-target="#sidebarMenu"
          aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>
        <form id="packages-search-form" class="d-none d-md-flex input-group w-auto my-auto">
          <input autocomplete="off" type="search" class="form-control rounded" placeholder='Search (ctrl + "/" to focus)' />
        </form>
      </div>
    </nav>
  </header>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#packages-search-form > button {

}

nav.fixed-top {
  background-color: #dddddd;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
