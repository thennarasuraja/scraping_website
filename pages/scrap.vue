<template>
  <div class="w-full max-h-full text-slate-700 bg-slate-100">
    <div class="flex w-full h-full ">
      <div class="flex w-full justify-between items-center p-5 border-b">
        <div class="text-[25px] font-semibold">Scraping Datas</div>
        <button
          @click="add = true"
          class="bg-blue-500 px-5 py-3 rounded-[6px] hover:scale-110 focus:scale-95 text-white"
        >
          Add
        </button>
      </div>
      <div
        v-if="add == true"
        class="w-full h-screen fixed bg-opacity-60 backdrop-blur-sm z-10 bg-slate-950 flex justify-center items-center"
      >
        <div
          @click="add = false"
          class="flex justify-center items-center absolute right-10 top-10 bg-white border border-slate-200 text-slate-850 w-[50px] h-[50px] rounded-full text-[28px]"
        >
          <button class="mb-[9px]">x</button>
        </div>
        <div
          class="w-[350px] h-[250px] bg-slate-100 shadow-2xl text-black rounded-[8px]"
        >
          <div class="w-full h-full flex justify-center items-center">
            <div class="flex flex-col gap-10">
              <div class="flex gap-4">
                <span class="font-bold text-[18px]">URL :</span>
                <input
                  v-model="scraper.url"
                  class="border outline-none px-2 py-1 rounded-[4px] w-[250px]"
                />
              </div>
              <div class="flex justify-between px-3 w-full h-full">
                <button
                  @click="createScrap()"
                  class="px-3 py-2 bg-blue-600 focus:scale-95 text-white rounded-[6px]"
                >
                  submit
                </button>
                <button
                  @click="add = false"
                  class="px-3 py-2 bg-red-600 focus:scale-95 text-white rounded-[6px]"
                >
                  cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-full grid grid-cols-3 gap-8 pt-5 px-4">
      <div class="flex flex-col border-b border-x rounded-[12px]">
        <iframe src="https://www.hackerrank.com/" class="h-[300px]"></iframe>
        <div class="flex justify-between px-3 items-center">
          <div class="text-[18px] overflow-hidden whitespace-nowrap">url : https://www.hackerrank.com/gfffhbfvdfgfdvfdfxddfbvd</div>
          <div class="flex flex-row gap-3 pt-2">
            <div
              class="flex flex-col cursor-pointer hover:bg-blue-500 px-3 py-1 rounded-[6px]"
            >
              <img src="/images/editicon.png" class="w-[25px] h-[25px]" />
              <div>Edit</div>
            </div>
            <div>
              <div
                class="flex flex-col items-center rounded-[6px] cursor-pointer hover:bg-red-500 py-1 px-2"
              >
                <img src="/images/trash.png" class="w-[25px] h-[25px]" />
                <div>Delete</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col border-b border-x rounded-[12px]">
        <iframe src="https://www.hackerrank.com/" class="h-[300px]"></iframe>
        <div class="flex justify-between px-3 items-center">
          <div class="text-[18px]">url : https://www.hackerrank.com/</div>
          <div class="flex flex-row gap-3 pt-2">
            <div
              class="flex flex-col cursor-pointer hover:bg-blue-500 px-3 py-1 rounded-[6px]"
            >
              <img src="/images/editicon.png" class="w-[25px] h-[25px]" />
              <div>Edit</div>
            </div>
            <div>
              <div
                class="flex flex-col items-center rounded-[6px] cursor-pointer hover:bg-red-500 py-1 px-2"
              >
                <img src="/images/trash.png" class="w-[25px] h-[25px]" />
                <div>Delete</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col border-b border-x rounded-[12px]">
        <iframe src="https://www.hackerrank.com/" class="h-[300px]"></iframe>
        <div class="flex justify-between px-3 items-center">
          <div class="text-[18px]">url : https://www.hackerrank.com/</div>
          <div class="flex flex-row gap-3 pt-2">
            <div
              class="flex flex-col cursor-pointer hover:bg-blue-500 px-3 py-1 rounded-[6px]"
            >
              <img src="/images/editicon.png" class="w-[25px] h-[25px]" />
              <div>Edit</div>
            </div>
            <div>
              <div
                class="flex flex-col items-center rounded-[6px] cursor-pointer hover:bg-red-500 py-1 px-2"
              >
                <img src="/images/trash.png" class="w-[25px] h-[25px]" />
                <div>Delete</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col border-b border-x rounded-[12px]">
        <iframe src="https://www.hackerrank.com/" class="h-[300px]"></iframe>
        <div class="flex justify-between px-3 items-center">
          <div class="text-[18px]">url : https://www.hackerrank.com/</div>
          <div class="flex flex-row gap-3 pt-2">
            <div @click="updateScrap()"
              class="flex flex-col cursor-pointer hover:bg-blue-500 px-3 py-1 rounded-[6px]"
            >
              <img src="/images/editicon.png" class="w-[25px] h-[25px]" />
              <div>Edit</div>
            </div>
            <div>
              <div
                class="flex flex-col items-center rounded-[6px] cursor-pointer hover:bg-red-500 py-1 px-2"
              >
                <img src="/images/trash.png" class="w-[25px] h-[25px]" />
                <div>Delete</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col border-b border-x rounded-[12px]">
        <iframe src="https://www.hackerrank.com/" class="h-[300px]"></iframe>
        <div class="flex justify-between px-3 items-center">
          <div class="text-[18px]">url : https://www.hackerrank.com/</div>
          <div class="flex flex-row gap-3 pt-2">
            <div
              class="flex flex-col cursor-pointer hover:bg-blue-500 px-3 py-1 rounded-[6px]"
            >
              <img src="/images/editicon.png" class="w-[25px] h-[25px]" />
              <div>Edit</div>
            </div>
            <div>
              <div
                class="flex flex-col items-center rounded-[6px] cursor-pointer hover:bg-red-500 py-1 px-2"
              >
                <img src="/images/trash.png" class="w-[25px] h-[25px]" />
                <div>Delete</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    // async updateScrap(){
    //   const update=await this.$http.$put()
    // }
  },
};
</script>
