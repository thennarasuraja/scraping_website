<template>
  <div class="w-full h-full">
    <div
      class="flex w-full h-screen justify-center items-center bg-[url('/images/scrap.jpg')] text-white"
    >
      <div class="grid text-xl gap-[60px]">
        <div class="text-[80px] font-bold">
          <div>Let's Web Scrap From Here</div>
        </div>
        <NuxtLink to="scrap">
          <div class="flex justify-center">
            <button
              class="p-2 bg-blue-600 font-semibold rounded-[6px] text-[24px] focus:scale-90 hover:scale-110 w-[100px]"
            >
              Click
            </button>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
