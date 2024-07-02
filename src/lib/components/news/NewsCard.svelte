<script lang="ts">
	import { goto } from '$app/navigation';

	let {
		title,
		category,
		featuredImg,
		link
	}: { title: string; category: string; featuredImg: string; link?: string } = $props();
</script>

<button onclick={() => goto(`${link}`)} class="group relative h-[350px] hover:cursor-pointer">
	<img class="h-full w-full object-cover" src={featuredImg} alt="" />
	<div
		class="absolute left-0 top-0 h-full w-full overflow-hidden bg-black bg-opacity-40 duration-700 group-hover:bg-opacity-0"
	>
		<div
			class="absolute bottom-9 left-0 z-20 bg-claret px-8 py-3 duration-700 ease-in-out group-hover:-left-full"
		>
			<p class="text-2xl font-medium text-white">{title}</p>
		</div>
		<div
			class="absolute bottom-20 left-0 z-30 bg-avBlue px-8 py-2 shadow-xl delay-75 duration-1000 ease-in-out group-hover:-left-full"
		>
			<p class=" text-sm font-bold text-claret">{category}</p>
		</div>
	</div>
</button>
