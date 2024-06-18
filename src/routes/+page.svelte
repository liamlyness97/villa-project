<script lang="ts">
	import NewsCard from '$lib/components/news/NewsCard.svelte';

	let { data } = $props();
</script>

<div class="w-full">
	<div class="bg-claret flex justify-center py-16">
		<h1 class="text-avBlue text-4xl font-extrabold uppercase tracking-widest">Explore Content</h1>
	</div>
	<div class="grid w-full grid-cols-4">
		<NewsCard title="Test Post Title" category="News" featuredImg="/news4.jpg" />
		<NewsCard title="Test Post Title 2" category="Recap" featuredImg="/news5.jpg" />
		<NewsCard title="Test Post Title 3" category="News" featuredImg="/news6.jpg" />
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
