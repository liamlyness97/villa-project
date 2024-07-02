<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import InfoBlocks from '$lib/components/InfoBlocks.svelte';
	import NewsCard from '$lib/components/news/NewsCard.svelte';

	let { data } = $props();
</script>

<Hero />

<InfoBlocks />

<div class="flex h-[64vh] w-full overflow-hidden">
	<div class=" w-1/2 border-r-2 border-gray-200">
		<h2 class="px-10 py-8 text-3xl font-bold text-claret">Latest News</h2>
		<div class="flex">
			<div class="flex w-[33.33%] flex-col">
				<img class="h-64 w-full object-cover" src="/news1.jpg" alt="" />
				<div class="border-r-2 border-gray-200 p-10">
					<p class="font-medium uppercase text-gray-500">Club News</p>
					<h3 class="py-5 text-2xl font-semibold leading-7 text-gray-900">
						Lorem ipsum dolor sit amet
					</h3>

					<p class="font-medium uppercase text-claret">Read More</p>
				</div>
			</div>
			<div class="flex w-[33.33%] flex-col">
				<img class="h-64 w-full object-cover" src="/news2.jpg" alt="" />
				<div class="border-r-2 border-gray-200 p-10">
					<p class="font-medium uppercase text-gray-500">Club News</p>
					<h3 class="py-5 text-2xl font-semibold leading-7 text-gray-900">
						Lorem ipsum dolor sit amet
					</h3>

					<p class="font-medium uppercase text-claret">Read More</p>
				</div>
			</div>
			<div class="flex w-[33.33%] flex-col">
				<img class="h-64 w-full object-cover" src="/news3.jpg" alt="" />
				<div class="border-r-2 border-gray-200 p-10">
					<p class="font-medium uppercase text-gray-500">Club News</p>
					<h3 class="py-5 text-2xl font-semibold leading-7 text-gray-900">
						Lorem ipsum dolor sit amet
					</h3>

					<p class="font-medium uppercase text-claret">Read More</p>
				</div>
			</div>
		</div>
	</div>
	<div class="h-full w-1/2 border-r-2 border-gray-200">
		<h2 class="px-10 py-8 text-3xl font-bold text-claret">Featured Creators</h2>
		<img class="object-cover" src="/content1.jpg" alt="" />
	</div>
</div>

<div class="w-full">
	<div class="flex justify-center bg-claret py-16">
		<h1 class="text-4xl font-extrabold uppercase tracking-widest text-avBlue">Explore Content</h1>
	</div>
	<div class="grid w-full grid-cols-4">
		<NewsCard title="Test Post Title" category="News" featuredImg="/news4.jpg" />
		<NewsCard title="Test Post Title 2" category="Recap" featuredImg="/news5.jpg" />
		<NewsCard
			title="Progress on the North Stand Rebuild"
			category="News"
			featuredImg="/news6.jpg"
			link="/article-template"
		/>
		<NewsCard title="Test Post Title 4" category="Throwback" featuredImg="/news7.jpg" />
		<NewsCard title="Test Post Title 5" category="Throwback" featuredImg="/news8.jpg" />
		<NewsCard title="Test Post Title 4" category="Throwback" featuredImg="/news7.jpg" />
		<NewsCard title="Test Post Title 2" category="Recap" featuredImg="/news5.jpg" />
		<NewsCard title="Test Post Title" category="News" featuredImg="/news4.jpg" />
		<NewsCard title="Test Post Title" category="News" featuredImg="/news4.jpg" />
		<NewsCard title="Test Post Title 2" category="Recap" featuredImg="/news5.jpg" />
		<NewsCard title="Test Post Title 3" category="News" featuredImg="/news6.jpg" />
		<NewsCard title="Test Post Title 4" category="Throwback" featuredImg="/news7.jpg" />
		<NewsCard title="Test Post Title 5" category="Throwback" featuredImg="/news8.jpg" />
		<NewsCard title="Test Post Title 4" category="Throwback" featuredImg="/news7.jpg" />
		<NewsCard title="Test Post Title 2" category="Recap" featuredImg="/news5.jpg" />
		<NewsCard title="Test Post Title" category="News" featuredImg="/news4.jpg" />
	</div>
</div>
