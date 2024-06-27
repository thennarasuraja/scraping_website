<template>
  <div
    class="flex w-full h-screen justify-center items-center bg-[url('/images/scrap.jpg')]  text-white"
  >
    <div class="flex flex-col text-xl gap-5">
      <div>Are you visited your url website Click the button,</div>
      <NuxtLink to="scrap">
        <div class="flex justify-center">
          <button class="p-4 bg-blue-600 rounded-[6px] focus:scale-95 hover:scale-110 w-[100px]">Click</button>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
