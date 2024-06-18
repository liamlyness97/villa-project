<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import InfoBlocks from '$lib/components/InfoBlocks.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<Header />

<Hero />

<InfoBlocks />

<div class="flex h-[64vh] w-full overflow-hidden">
	<div class=" w-1/2 border-r-2 border-gray-200">
		<h2 class="text-claret px-10 py-8 text-3xl font-bold">Latest News</h2>
		<div class="flex">
			<div class="flex w-[33.33%] flex-col">
				<img class="h-64 w-full object-cover" src="/news1.jpg" alt="" />
				<div class="border-r-2 border-gray-200 p-10">
					<p class="font-medium uppercase text-gray-500">Club News</p>
					<h3 class="py-5 text-2xl font-semibold leading-7 text-gray-900">
						Lorem ipsum dolor sit amet
					</h3>

					<p class="text-claret font-medium uppercase">Read More</p>
				</div>
			</div>
			<div class="flex w-[33.33%] flex-col">
				<img class="h-64 w-full object-cover" src="/news2.jpg" alt="" />
				<div class="border-r-2 border-gray-200 p-10">
					<p class="font-medium uppercase text-gray-500">Club News</p>
					<h3 class="py-5 text-2xl font-semibold leading-7 text-gray-900">
						Lorem ipsum dolor sit amet
					</h3>

					<p class="text-claret font-medium uppercase">Read More</p>
				</div>
			</div>
			<div class="flex w-[33.33%] flex-col">
				<img class="h-64 w-full object-cover" src="/news3.jpg" alt="" />
				<div class="border-r-2 border-gray-200 p-10">
					<p class="font-medium uppercase text-gray-500">Club News</p>
					<h3 class="py-5 text-2xl font-semibold leading-7 text-gray-900">
						Lorem ipsum dolor sit amet
					</h3>

					<p class="text-claret font-medium uppercase">Read More</p>
				</div>
			</div>
		</div>
	</div>
	<div class="h-full w-1/2 border-r-2 border-gray-200">
		<h2 class="text-claret px-10 py-8 text-3xl font-bold">Featured Creators</h2>
		<img class="object-cover" src="/content1.jpg" alt="" />
	</div>
</div>

<main class="mx-auto">
	{@render children()}
</main>

<Footer />
