<script setup></script>

<template>
  <div>
    <header>
      <nav>
        <div class="space-x-6">
          <Link
            :href="route('home')"
            class="nav-link"
            :class="{ 'bg-slate-700': $page.component === 'Home' }"
            >Home</Link
          >
        </div>

        <!-- Auth section -->
        <div v-if="$page.props.auth.user" class="space-x-6 flex">
          <img
            class="avatar"
            :src="
              $page.props.auth.user.avatar
                ? 'storage/' + $page.props.auth.user.avatar
                : 'storage/avatars/default.jpeg'
            "
            alt=""
          />
          <Link
            :href="route('dashboard')"
            class="nav-link"
            :class="{ 'bg-slate-700': $page.component === 'Dashboard' }"
            >Dashboard</Link
          >
          <Link
            :href="route('logout')"
            method="post"
            as="button"
            type="button"
            class="nav-link"
            >Logout</Link
          >
        </div>
        <!-- Guest section -->
        <div v-else class="space-x-6">
          <Link
            :href="route('register')"
            class="nav-link"
            :class="{ 'bg-slate-700': $page.component === 'Auth/Register' }"
            >Register</Link
          >
          <Link
            :href="route('login')"
            class="nav-link"
            :class="{ 'bg-slate-700': $page.component === 'Auth/Login' }"
            >Login</Link
          >
        </div>
      </nav>
    </header>

    <main class="p-4 mx-auto max-w-screen-lg">
      <slot />
    </main>
  </div>
</template>
