<script setup>
import { Check } from "@/components/icons";
import { useUserStore } from "@/stores";

const { user } = useUserStore();
</script>
<template>
	<div class="background-blur">
		<div class="modal">
			<Check class="icon" size="90" />
			<p>Seu cadastro foi concluido com sucesso!</p>
			<button @click="user.loggedStatus = 3">Prosseguir</button>
		</div>
	</div>
</template>
<style scoped>
.background-blur {
	position: fixed;
	width: 100%;
	height: 100%;
	backdrop-filter: blur(3px);
	background-color: rgba(0, 0, 0, 0.205);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
}

.modal {
	position: absolute;
	background-color: #282828;
	width: 65vw;
	padding: 10vw 8vw 7vw 8vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 7vw;
	border-radius: 35px;
	box-shadow: 0px 4px 30px 0px;
}

.icon {
	background: linear-gradient(180deg, #445244 0%, #99b898 100%);
	padding: 4vw 5vw;
	border-radius: 50%;
}

p {
	color: white;
	font-weight: 500;
	font-size: 0.9rem;
	display: flex;
	text-align: center;
}

button {
	background-color: #99b898;
	color: #000000;
	font-weight: 500;
	width: 100%;
	padding-block: 1rem;
	border-radius: 5rem;
	font-size: 1.1rem;
}
</style>
