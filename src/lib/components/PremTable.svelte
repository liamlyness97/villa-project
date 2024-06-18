<script lang="ts">
	let { table } = $props();
</script>

<h1 class="mt-10 text-3xl font-semibold">Premier League Table</h1>

<div class="flex flex-col">
	{#each table as team}
		<div class="flex items-center justify-between gap-20 p-5 even:bg-gray-100">
			<div class="flex items-center gap-10">
				<p>{team.position}</p>
				<p class="font-bold">{team.team.name}</p>
			</div>
			<div>
				<p>{team.points}</p>
			</div>
		</div>
	{/each}
</div>
