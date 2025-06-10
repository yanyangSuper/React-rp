export default function Card() {
    return (
        <div class="container mx-auto p-4 bg-gray-50">
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img
              class="h-48 w-full object-cover md:h-full md:w-48"
              src="https://jfjs-1301526884.cos.ap-chengdu.myqcloud.com/jfjs/2025/06/10/cc6f90ea1ddf4163bebff8146b0c571e.jpg"
              alt="Modern building architecture"
            />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Company retreats
            </div>
            <a
              href="#"
              class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Incredible accommodation for your team
            </a>
            <p class="mt-2 text-slate-500">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that.
            </p>
          </div>
        </div>
      </div>
      </div>
    )
}