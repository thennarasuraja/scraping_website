<template>
  <div>
    <div class="flex w-full h-full bg-slate-100">
      <div class="flex w-full justify-end p-5 border-b">
        <button
          @click="add = true"
          class="bg-blue-500 px-5 py-3 rounded-[6px] text-white"
        >
          Add
        </button>
      </div>
      <div
        v-if="add == true"
        class="w-full h-screen absolute z-10 bg-slate-100 flex justify-center items-center"
      >
        <div class="w-[350px] h-[250px] bg-sky-200 rounded-[8px]">
          <div class="w-full h-full flex justify-center items-center">
            <div class="flex flex-col gap-6">
              <div class="flex gap-4">
                <span>URL :</span>
                <input
                  v-model="scraper.url"
                  class="border outline-none rounded-[4px]"
                />
              </div>
              <div class="flex justify-between w-full h-full">
                <button
                  @click="createScrap()"
                  class="px-3 py-2 bg-blue-600 text-white rounded-[6px]"
                >
                  submit
                </button>
                <button
                  @click="add = false"
                  class="px-3 py-2 bg-red-600 text-white rounded-[6px]"
                >
                  cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-full flex justify-center items-center">dfgdff</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      add: false,
      scraper: {
        url: "",
      },
    };
  },
  methods: {
    async createScrap() {
      const Details = await this.$http.$post(
        `http://localhost:5001/scraper/submit`,
        {
          body: {
            scraper: this.scraper,
          },
        }
      );
      this.add = false;
    },
  },
};
</script>
