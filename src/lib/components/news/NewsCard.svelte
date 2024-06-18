<script lang="ts">
	let { title, category, featuredImg }: { title: string; category: string; featuredImg: string } =
		$props();
</script>

<div class="group relative h-[350px] hover:cursor-pointer">
	<img class="h-full w-full object-cover" src={featuredImg} alt="" />
	<div
		class="absolute left-0 top-0 h-full w-full overflow-hidden bg-black bg-opacity-40 duration-700 group-hover:bg-opacity-0"
	>
		<div
			class="bg-claret absolute bottom-9 left-0 z-20 px-8 py-3 duration-700 ease-in-out group-hover:-left-full"
		>
			<p class="text-2xl font-medium text-white">{title}</p>
		</div>
		<div
			class="bg-avBlue absolute bottom-20 left-0 z-30 px-8 py-2 shadow-xl delay-75 duration-1000 ease-in-out group-hover:-left-full"
		>
			<p class=" text-claret text-sm font-bold">{category}</p>
		</div>
	</div>
</div>
