<template>
  <UPage>
    <template #left>
      <div class="p-4">
        <h2 class="text-lg font-semibold mb-4">Sidebar</h2>
        <ul class="space-y-2">
          <li><a href="#" class="text-blue-500 hover:underline">Home</a></li>
          <li><a href="#" class="text-blue-500 hover:underline">About</a></li>
          <li><a href="#" class="text-blue-500 hover:underline">Contact</a></li>
        </ul>
      </div>
    </template>
    <UPageBody>
      <h1>Welcome to Nuxt Almacen</h1>
      <p>This is the home page.</p>
      <p>
        <UButton color="warning" label="Click me" />
      </p>
    </UPageBody>
  </UPage>
</template>
