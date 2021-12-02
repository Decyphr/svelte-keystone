<script context="module">
	export async function load({ page, fetch, session, stuff }) {
		const url = `/tasks.json`;
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
					data: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	export let data;
</script>

{#each data.tasks as task}
	<h1>{task.title}</h1>
{/each}
