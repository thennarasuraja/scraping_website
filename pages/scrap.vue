<template>
  <div class="w-full max-h-full text-slate-700">
    <div class="flex w-full h-full bg-slate-50">
      <div class="flex w-full justify-between items-center p-5 border-b">
        <div class="text-[25px] font-semibold">Scraping Datas</div>
        <button
          @click="openAddscraper()"
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
      <div
        class="flex flex-col border-b border-x rounded-[12px]"
        v-for="(webscrap, index) in webscraps"
        :key="index"
      >
        <iframe :src="webscrap.url" class="h-[300px]"></iframe>
        <div class="flex justify-between px-3 items-center">
          <div class="text-[18px] overflow-hidden whitespace-nowrap">
            url : {{ webscrap.url }}
          </div>
          <div class="flex flex-row gap-3 pt-2">
            <div
              @click="openUpdate(webscrap)"
              class="flex flex-col cursor-pointer hover:bg-blue-500 px-3 py-1 rounded-[6px]"
            >
              <img src="/images/editicon.png" class="w-[25px] h-[25px]" />
              <div>Edit</div>
            </div>
            <div>
              <div
                @click="deleteWebScraper(webscrap)"
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
      webscraps: [
        // {
        //   url: "https://www.hackerrank.com/",
        // },
        // {
        //   url: "https://www.hackerrank.com/",
        // },
        // {
        //   url: "https://www.hackerrank.com/",
        // },
      ],
    };
  },
  mounted() {
    this.webScraps();
  },
  methods: {
    async webScraps() {
      const data = await this.$http.$get(`http://localhost:5001/scraper/get`);
      if (data.success) {
        this.webscraps = data.data;
      }
    },
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
    openAddscraper() {
      this.scraper = {
        url: "",
      };
      this.add = true;
    },
    openUpdate(item) {
      this.scraper = item;
      this.add = true;
    },
    deleteWebScraper(item) {
      this.scraper = item;
      this.scraper.status = "deleted";
      this.updateScrap();
    },
    async updateScrap() {
      const update = await this.$http.$put(
        "http://localhost:5001/scraper/update",
        {
          body: {
            scraper: this.scraper,
          },
        }
      );
      this.add = false;
      this.webScraps();
    },
  },
};
</script>
