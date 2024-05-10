<template>
  <div>
    <!-- Flash message -->
    <div v-if="$page.props.flash.message">
      <p class="p-4 bg-green-100 text-sm">{{ $page.props.flash.message }}</p>
    </div>

    <h1 class="title">Welcome back {{ $page.props.auth.user.name }}</h1>
  </div>
</template>
