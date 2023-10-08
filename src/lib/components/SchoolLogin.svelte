<section class="min-h-screen flex items-stretch text-white">
	<div class="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" style="background-image: url(https://images.alphacoders.com/132/1326370.png);">
		<div class="absolute bg-black opacity-60 inset-0 z-0"></div>
		<div class="w-full px-24 z-10">
			<h1 class="text-5xl font-bold text-left tracking-wide">Bem-vindo(a) de volta!</h1>
			<p class="text-3xl my-4">Por-gentileza, realize o login com a sua conta.</p>
		</div>
	</div>
	<div class="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-white">
		<div class="w-full py-6 z-20">
			<h1 class="my-6">
				<div class="flex justify-center text-black">
					<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
						<path fill="currentColor" d="M18.5 1.15c-.53 0-1.04.19-1.43.58l-5.81 5.82l5.65 5.65l5.82-5.81c.77-.78.77-2.04 0-2.83l-2.84-2.83c-.39-.39-.89-.58-1.39-.58M10.3 8.5l-5.96 5.96c-.78.78-.78 2.04.02 2.85C3.14 18.54 1.9 19.77.67 21h5.66l.86-.86c.78.76 2.03.75 2.81-.02l5.95-5.96"/>
					</svg> 
				<a href="/" class="text-2xl pl-2 font-semibold">EducaFácil</a>
				</div>
			</h1>
			<form action="" class="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
				<div class="pb-2 pt-4">
					<input type="email" name="email" id="email" placeholder="Email" class="block w-full p-4 text-black text-lg bg-white border-2">
				</div>
				<div class="pb-2 pt-4">
					<input class="block w-full p-4 text-lg bg-white text-black border-2" type="password" name="Senha" id="Senha" placeholder="Senha">
				</div>
				<div class="text-right text-black font-semibold hover:underline hover:text-black">
					<a href="/404">Esqueceu sua senha?</a>
				</div>
				<div class="px-4 pb-2 pt-4">
					<button class="uppercase block w-full p-4 text-lg rounded-lg bg-violet-600 hover:bg-violet-900 focus:outline-none">Logar</button>
				</div>
				<p class="text-sm font-light text-gray-500 dark:text-gray-400">
					Não tem uma conta ainda? <a href="/school/register" class="font-medium text-violet-600 hover:underline dark:text-primary-500">Registrar</a>
				</p>
			</form>
		</div>
	</div>
</section>