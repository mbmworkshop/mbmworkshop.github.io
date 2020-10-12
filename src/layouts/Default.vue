<template>
  <div class="container mx-auto mt-12">
    <header class="ml-4 font-semibold text-xl">
      {{ $static.metadata.siteName }}
    </header>
    <div class="mx-4 mt-8">
      <slot/>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>