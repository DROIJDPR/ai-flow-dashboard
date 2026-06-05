<script lang="ts">
	import '$lib/styles/pages/login.css';

	import Card from '$lib/components/ui/Card.svelte';
	import Input from '$lib/components/ui/Input.svelte';
	import Button from '$lib/components/ui/Button.svelte';

	let email = $state('');
	let password = $state('');

	function handleLogin() {
		// TODO:
		// POST /api/auth/login

		console.log({
			email,
			password
		});
	}
</script>

<div class="login-page">
	<div class="login-container">
		<Card>
			<div class="login-header">
				<h1>AIFlow</h1>

				<p>Manage your AI business from one place.</p>
			</div>

			<form
				class="login-form"
				onsubmit={(e) => {
					e.preventDefault();
					handleLogin();
				}}
			>
				<Input
					label="Email"
					type="email"
					bind:value={email}
				/>

				<Input
					label="Password"
					type="password"
					bind:value={password}
				/>

				<Button
					text="Sign In"
					type="submit"
				/>
			</form>
		</Card>
	</div>
</div>